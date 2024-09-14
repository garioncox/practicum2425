
function ProjectForm() {
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
            required
          />
        </div>
        <div className="col-md-2 mb-3">
          <label htmlFor="validationDefault02">Start Date</label>
          <input
            type="text"
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
              type="text"
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
          <label htmlFor="validationDefaultUsername">Location</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              placeholder="Check in at Latitude: -3.59790, Longitude: -79.55949, or I-15 Mile Marker 223"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Create Project
      </button>
      <hr></hr>
    </form>
  );
}

export default ProjectForm;
