import { useState } from "react";
import { ShiftDTO } from "../DataDTOInterfaces/ShiftDTOInterface"
import { Post } from "../Functions/Post"

function ShiftForm() {
    const [startTime, setStartTime] = useState<string>("")
    const [endTime, setEndTime] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [requestedEmployees, setRequestedEmployees] = useState<number>(0)
    const [status, setStatus] = useState<string>("ACTIVE")


    async function postShift() {
        const shift: ShiftDTO = {
            StartTime: startTime,
            EndTime: endTime,
            Description: description,
            Location: location,
            RequestedEmployees: requestedEmployees,
            Status: status
        }

        Post('https://localhost:7157/api/Shift', shift)
    }

    return (
        <form>
            <h1>Create a New Shift</h1>
            <div className="row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="title">Location</label>
                    <input
                        value={location}
                        onChange={(e) => { setLocation(e.target.value)} }
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="North Side"
                        required
                    />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="validationDefault02">Start Date</label>
                    <input
                        value={startTime}
                        onChange={(e) => { setStartTime(e.target.value) }}
                        type="date"
                        className="form-control"
                        id="validationDefault02"
                        placeholder="09-18-2024"
                        required
                    />
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="validationDefaultUsername">End Date</label>
                    <div className="input-group">
                        <input
                            value={endTime}
                            onChange={(e) => { setEndTime(e.target.value) }}
                            type="date"
                            className="form-control"
                            id="validationDefaultUsername"
                            placeholder="11-18-2024"
                            aria-describedby="inputGroupPrepend2"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb-3">
                    <label htmlFor="validationDefaultUsername">Description</label>
                    <div className="input-group">
                        <input
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                            type="text"
                            className="form-control"
                            id="validationDefaultUsername"
                            placeholder="Traffic Control"
                            aria-describedby="inputGroupPrepend2"
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="title">Requested Number of Officers</label>

                    <input
                        value={requestedEmployees}
                        onChange={(e) => { setRequestedEmployees(Number(e.target.value)) }}
                        type="number"
                        className="form-control"
                        id="title"
                        placeholder="0"
                        required
                    />
                </div>
                <div className="col-md-4 mb-4">
                    <div className="form-group">
                        <label htmlFor="statusSelect">Choose a status</label>
                        <select id="statusSelect" className="form-control"
                            value={status}
                            onChange={(e) => { setStatus(e.target.value) }}
                        >
                            <option value="ACTIVE">ACTIVE</option>
                            <option value="ARCHIVED">ARCHIVED</option>
                        </select>
                    </div>
                </div>

            </div>
            <button className="btn btn-primary" type="button" onClick={() => { postShift() } }>
                Create Project
            </button>
            <hr></hr>
        </form>
    );
}

export default ShiftForm;
