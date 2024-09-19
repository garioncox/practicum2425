import { useEffect, useState } from 'react';
import { Project } from '../DataInterface/ProjectInterface';
import Spinner from './Spinner';

function ViewProject() {
    const [projects, setProjects] = useState<Project[]>()

    useEffect(() => {
        populateProjects();
    }, [])

    async function populateProjects() {
        const response = await fetch('/api/Project/GetProjects');
        const data = await response.json();
        setProjects(data);
    }

    const contents = projects === undefined ? <Spinner /> : (
        <div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(p =>
                        <tr>
                            <th scope="row">{p.id}</th>
                            <td>{p.name}</td>
                            <td>{p.location}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>) 

    return (
        <div >
            <h1 id="projects">Project List</h1>
            {contents}
        </div>
    )

};

export default ViewProject