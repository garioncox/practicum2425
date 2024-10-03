import { useState } from "react";
import { ShiftDTO } from "../Data/DTOInterfaces/ShiftDTO";
import { httpRequest } from "../Functions/HttpRequest";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function CreateShift() {
    const [startTime, setStartTime] = useState<string>("");
    const [endTime, setEndTime] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [requestedEmployees, setRequestedEmployees] = useState<number>(0);
    const [formErrors, setFormErrors] = useState<{
        location?: string;
        startTime?: string;
        endTime?: string;
        description?: string;
        requestedEmployees?: string;
    }>({});

    const validateAllInput = () => {
        const errors: { [key: string]: string } = {};
        let isValid = true;

        if (requestedEmployees < 1) {
            errors.requestedEmployees = "Requested Officers Must be Greater than 0";
            isValid = false;
        }
        if (endTime <= startTime) {
            errors.endTime = "End Time has to be after Start Time";
            isValid = false;
        }
        if (!description) {
            errors.description = "Please add a description";
            isValid = false;
        }
        if (!location) {
            errors.location = "Please add a location";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    async function postShift() {
        if (validateAllInput()) {
            const shift: ShiftDTO = {
                StartTime: startTime,
                EndTime: endTime,
                Description: description,
                Location: location,
                RequestedEmployees: requestedEmployees,
                Status: "ACTIVE",
            };
            toast.promise(
                httpRequest(import.meta.env.VITE_API_URL + 'api/Shift/create', shift, "POST"),
                {
                    pending: 'Creating Shift...',
                    success: {
                        render() {
                            return 'Shift Created Successfully';
                        },
                    },
                    error: {
                        render({ data }) {
                            return data.message || 'Error Creating Shift';
                        },
                    },
                }
            );
            setFormErrors({});
        }
    }

    return (
        <form>
            <h1>Create a New Shift</h1>
            <div className="row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="location">Location</label>
                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                        className={`form-control ${formErrors.location ? "is-invalid" : ""}`}
                        id="location"
                        placeholder="North Side"
                        required
                    />
                    {formErrors.location && <div className="invalid-feedback">{formErrors.location}</div>}
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="startTime">Start</label>
                    <input
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        type="date"
                        className={`form-control ${formErrors.startTime ? "is-invalid" : ""}`}
                        id="startTime"
                        required
                    />
                    {formErrors.startTime && <div className="invalid-feedback">{formErrors.startTime}</div>}
                </div>
                <div className="col-md-2 mb-3">
                    <label htmlFor="endTime">End</label>
                    <input
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        type="date"
                        className={`form-control ${formErrors.endTime ? "is-invalid" : ""}`}
                        id="endTime"
                        required
                    />
                    {formErrors.endTime && <div className="invalid-feedback">{formErrors.endTime}</div>}
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb-3">
                    <label htmlFor="description">Description</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className={`form-control ${formErrors.description ? "is-invalid" : ""}`}
                        id="description"
                        placeholder="Traffic Control"
                        required
                    />
                    {formErrors.description && <div className="invalid-feedback">{formErrors.description}</div>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="requestedEmployees">Requested Number of Officers</label>
                    <input
                        value={requestedEmployees}
                        onChange={(e) => setRequestedEmployees(Number(e.target.value))}
                        type="number"
                        className={`form-control ${formErrors.requestedEmployees ? "is-invalid" : ""}`}
                        id="requestedEmployees"
                        placeholder="0"
                        required
                    />
                    {formErrors.requestedEmployees && <div className="invalid-feedback">{formErrors.requestedEmployees}</div>}
                </div>
            </div>
            <button className="btn btn-primary" type="button" onClick={postShift}>
                Create Shift
            </button>
            <ToastContainer position="bottom-right"
            />
        </form>
    );
}

export default CreateShift;
