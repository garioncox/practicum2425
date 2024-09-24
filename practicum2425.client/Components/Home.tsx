import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>This is the home page</h1>
        <Link to="view-shift">See All Shifts</Link>
        <p></p>
        <Link to="view-project">View All Projects</Link>{" "}
        <p></p>

        <Link to="project-form">Create a New Project</Link>{" "}
        <p></p>

        <Link to="shift-form">Create a New Shift</Link>{" "}
        <p></p>

        <Link to="view-shift-officer">Shift To Officer</Link>{" "}
      </div>
    );
}

export default Home;