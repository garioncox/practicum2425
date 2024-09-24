import { useState } from "react";
import { ShiftDTO } from "../DataDTOInterfaces/ShiftDTOInterface"
import { httpRequest } from "../Functions/Post"

function ShiftForm() {
    const [startTime, setStartTime] = useState<string>("")
    const [endTime, setEndTime] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [requestedEmployees, setRequestedEmployees] = useState<number>(0)

    async function postShift() {
        const shift: ShiftDTO = {
            StartTime: startTime,
            EndTime: endTime,
            Description: description,
            Location: location,
            RequestedEmployees: requestedEmployees,
            Status: "ACTIVE"
        }

        httpRequest(import.meta.env.VITE_API_URL + 'api/Shift/create', shift, "POST")
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
                    <label htmlFor="validationDefault02">Start</label>
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
                    <label htmlFor="validationDefaultUsername">End</label>
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
            </div>
            <button className="btn btn-primary" type="button" onClick={() => { postShift() } }>
                Create Project
            </button>
        </form>
    );
}

export default ShiftForm;
