import { useState } from "react";
import { ProjectDTO } from "../DataDTOInterfaces/ProjectDTOInterface"
import { Post } from "../Functions/Post"

function ProjectForm() {
    const [title, setTitle] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const [location, setLocation] = useState<string>("")

    async function postProject() {

        const project: ProjectDTO = {
            name: title,
            location: location,
            startDate: startDate,
            endDate: endDate,
        }

        Post(import.meta.env.VITE_API_URL + 'api/Project', project)
    }

    return (
        <form>
            <h1>Create a New Project</h1>
            <div className="row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="I-15, Mile Marker: 223, Expansion"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="validationDefault02">Start</label>
                    <input
                        type="date"
                        className="form-control"
                        id="validationDefault02"
                        placeholder="09-18-2024"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="validationDefaultUsername">End</label>
                    <div className="input-group">
                        <input
                            type="date"
                            className="form-control"
                            id="validationDefaultUsername"
                            placeholder="11-18-2024"
                            aria-describedby="inputGroupPrepend2"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb-3">
                    <label htmlFor="validationDefaultUsername">Location</label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="validationDefaultUsername"
                            placeholder="Check in at Latitude: -3.59790, Longitude: -79.55949, or I-15 Mile Marker 223"
                            aria-describedby="inputGroupPrepend2"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" type="button" onClick={() => 
                postProject()
            }>
                Create Project
            </button>
        </form>
    );
}

export default ProjectForm;
