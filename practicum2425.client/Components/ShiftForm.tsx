
function ShiftForm() {
    return (
        <form>
            <h1>Create a New Shift</h1>
            <div className="row">
                <div className="col-md-8 mb-3">
                    <label htmlFor="title">Location</label>
                    <input
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
                        <select id="statusSelect" className="form-control">
                            <option value="ACTIVE">ACTIVE</option>
                            <option value="ARCHIVED">ARCHIVED</option>
                        </select>
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

export default ShiftForm;
