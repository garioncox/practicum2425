import { useState } from "react";
import { ShiftDTO } from "../DataDTOInterfaces/ShiftDTOInterface"
import { httpRequest } from "../Functions/Post"

function ShiftForm() {
    const [startTime, setStartTime] = useState<string>("")
    const [endTime, setEndTime] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [requestedEmployees, setRequestedEmployees] = useState<number>(0)
    const [formErrorList, setFormErrorList] = useState<string[]>(['']);
    const [isValidForm, setIsValidForm] = useState<boolean>(false)

    const validateAllInput = () => {
        const formArray = []; 

        let isValid = true;
        
        // Check each condition and accumulate errors
        if (requestedEmployees < 1) {
          formArray.push("Requested Officers Must be Greater than 0");
          isValid = false;
        }
        if (endTime <= startTime) { // Use <= to check for both cases
          formArray.push("End Time has to be after Start Time");
          isValid = false;
        }
        if (!description) {
          formArray.push("Please add a description");
          isValid = false;
        }
        if (!location) {
          formArray.push("Please add a location");
          isValid = false;
        }
        
        // Update the state only once with the accumulated errors
        setFormErrorList(formArray);
        
        // If valid, clear the error list
        if (isValid) {
          setFormErrorList([]);
        }
        
        return isValid;
    }

    async function postShift() {
        if (validateAllInput()) {
            const shift: ShiftDTO = {
                StartTime: startTime,
                EndTime: endTime,
                Description: description,
                Location: location,
                RequestedEmployees: requestedEmployees,
                Status: "ACTIVE"
            }
            setFormErrorList(["Shift Added Successfully"])
            httpRequest(import.meta.env.VITE_API_URL + 'api/Shift/create', shift, "POST")
        }
    }



    return (
        <form>
            <h1>Create a New Shift</h1>
            <div className="row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="title">Location</label>
                    <input
                        value={location}
                        onChange={(e) => { setLocation(e.target.value) }}
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
            <button className="btn btn-primary" type="button" onClick={() => { postShift() }}>
                Create Project
            </button>
            <div>
                {formErrorList.map((error) => (
                    <div>{error}</div>
                ))}
            </div>        </form>
    );
}

export default ShiftForm;
