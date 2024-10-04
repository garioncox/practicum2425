import { useEffect, useState } from 'react';
import { Project } from '../Data/Interfaces/Project';
import { httpRequest } from '../Functions/HttpRequest';

function ProjectList() {
    const [projects, setProjects] = useState<Project[]>()
    const [name, setName] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const [selected, setSelected] = useState<number>(-1)

    useEffect(() => {
        populateProjects();
    }, [])

    useEffect(() => {
        const project = findProject()

        if (project === undefined) {
            return
        }

        setLocation(project.location)
        setStartDate(project.startDate)
        setEndDate(project.endDate)
        setName(project.name)
    }, [selected])

    async function populateProjects() {
        const response = await fetch(import.meta.env.VITE_API_URL + 'api/Project/get');
        const data = await response.json();
        setProjects(data);
    }

    function findProject() {
        if (projects === undefined) {
            return
        }
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].id === selected) {
                return projects[i]
            }
        }
    }

    async function handleArchive(project: Project) {
        project.status = "ARCHIVED"

        httpRequest(import.meta.env.VITE_API_URL + 'api/Shift/edit/' + String(project.id), project, "PUT")

        setProjects(prevProjects =>
            prevProjects?.map(s => (s.id === project.id ? project : s)))
    }

    function saveEdit(id: number, status: string) {
        const newProject: Project = {
            id: id,
            name: name,
            location: location,
            startDate: startDate,
            endDate: endDate,
            status: status
        }

        httpRequest(import.meta.env.VITE_API_URL + 'api/Project/edit/' + String(newProject.id), newProject, "PUT")
        setSelected(-1)
        setProjects(prevProjects =>
            prevProjects?.map(s => (s.id === newProject.id ? newProject : s)))
    }


    function checkSelected(s: Project) {
        const val = s.id === selected ? (
            <tr key={s.id}>
                <td> <input className="form-control" onChange={(e) => setName(e.target.value)} value={name} /> </td>
                <td> <input className="form-control" onChange={(e) => setLocation(e.target.value)} value={location} /> </td>
                <td> <input className="form-control" onChange={(e) => setStartDate(e.target.value)} value={startDate} /> </td>
                <td> <input className="form-control" onChange={(e) => setEndDate(e.target.value)} value={endDate} /> </td>
                <td>  {s.status} </td>
                <td> <button onClick={() => saveEdit(s.id, s.status)} className="btn btn-success"> Save </button> </td>
                <td> <button onClick={() => setSelected(-1)} className="btn btn-danger"> Cancel </button> </td>
            </tr>
        ) : (
            <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.location}</td>
                <td>{s.startDate}</td>
                <td>{s.endDate}</td>
                <td>{s.status}</td>
                <td> <button onClick={() => { setSelected(s.id); setupEdit() }} className="btn btn-warning"> Edit </button> </td>
                <td> <button onClick={() => handleArchive(s)} className="btn btn-danger"> Delete </button> </td>
            </tr>
        )
        return val
    }

    const contents =
        projects === undefined ? (
            <div className="spinner-border" role="status" />
        ) : (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>

                    {projects.map((p) => (
                        checkSelected(p)
                    ))}
                </tbody>
            </table>
        );

    return (
        <div >
            <h1 id="projects">Project List</h1>
            {contents}
        </div>
    )
};
export default ProjectList

function setupEdit() {
    throw new Error('Function not implemented.');
}
