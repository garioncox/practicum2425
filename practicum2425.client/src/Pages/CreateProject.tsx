import { useState } from "react";
import { ProjectDTO } from "../Data/DTOInterfaces/ProjectDTO";
import { httpRequest } from "../Functions/HttpRequest";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function CreateProject() {
  const [title, setTitle] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [formErrors, setFormErrors] = useState<{
    title?: string;
    startDate?: string;
    endDate?: string;
    location?: string;
  }>({});

  const validateAllInput = () => {
    const errors: { [key: string]: string } = {};
    let isValid = true;

    if (!title) {
      errors.title = "Project title is required";
      isValid = false;
    }
    if (!startDate) {
      errors.startDate = "Start date is required";
      isValid = false;
    }
    if (!endDate) {
      errors.endDate = "End date is required";
      isValid = false;
    }
    if (endDate <= startDate) {
      errors.endDate = "End date must be after start date";
      isValid = false;
    }
    if (!location) {
      errors.location = "Location is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  async function postProject() {
    if (validateAllInput()) {
      const project: ProjectDTO = {
        name: title,
        location: location,
        startDate: startDate,
        endDate: endDate,
      };
      toast.promise(
        httpRequest(
          import.meta.env.VITE_API_URL + "api/Project",
          project,
          "POST"
        ),
        {
          pending: "Creating Shift...",
          success: {
            render() {
              return "Shift Created Successfully";
            },
          },
          error: {
            render({ data }) {
              return data.message || "Error Creating Shift";
            },
          },
        }
      );
      setFormErrors({});
    }
  }

  return (
    <form>
      <h1>Create a New Project</h1>
      <div className="row">
        <div className="col-md-8 mb-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className={`form-control ${formErrors.title ? "is-invalid" : ""}`}
            id="title"
            placeholder="I-15, Mile Marker: 223, Expansion"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {formErrors.title && (
            <div className="invalid-feedback">{formErrors.title}</div>
          )}
        </div>
        <div className="col-md-2 mb-3">
          <label htmlFor="startDate">Start</label>
          <input
            type="date"
            className={`form-control ${
              formErrors.startDate ? "is-invalid" : ""
            }`}
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          {formErrors.startDate && (
            <div className="invalid-feedback">{formErrors.startDate}</div>
          )}
        </div>
        <div className="col-md-2 mb-3">
          <label htmlFor="endDate">End</label>
          <input
            type="date"
            className={`form-control ${formErrors.endDate ? "is-invalid" : ""}`}
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
          {formErrors.endDate && (
            <div className="invalid-feedback">{formErrors.endDate}</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-3">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className={`form-control ${
              formErrors.location ? "is-invalid" : ""
            }`}
            id="location"
            placeholder="Check in at Latitude: -3.59790, Longitude: -79.55949, or I-15 Mile Marker 223"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          {formErrors.location && (
            <div className="invalid-feedback">{formErrors.location}</div>
          )}
        </div>
      </div>
      <button className="btn btn-primary" type="button" onClick={postProject}>
        Create Project
      </button>
      <ToastContainer />
    </form>
  );
}

export default CreateProject;
