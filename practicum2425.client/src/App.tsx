import { Routes, Route } from "react-router-dom";
import CreateShift from "./Pages/CreateShift";
import Home from "./Pages/Home";
import ProjectList from "./Pages/ProjectList";
import ShiftList from "./Pages/ShiftList";
import ShiftOfficerList from "./Pages/ShiftOfficerList";
import CreateProject from "./Pages/CreateProject";
import EmployeeDetails from "./Pages/EmployeeDetails";
import EmployeeList from "./Pages/EmployeeList";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shift/view" element={<ShiftList />} />
            <Route path="shift/view/officer" element={<ShiftOfficerList />} />
            <Route path="project/view" element={<ProjectList />} />
            <Route path="shift/create" element={<CreateShift />} />
            <Route path="project/create" element={<CreateProject />} />
            <Route path="admin/view/employees" element={<EmployeeList />} />
            <Route path="admin/view/employees/:id" element={<EmployeeDetails />} />
        </Routes>
    );
}

export default App;