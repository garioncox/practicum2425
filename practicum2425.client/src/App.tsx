import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import ViewProject from '../Components/ViewProject'
import ViewShift from '../Components/ViewShift'
import ViewShiftOfficer from '../Components/ViewShiftOfficer'
import ShiftForm from '../Components/ShiftForm'
import ProjectForm from '../Components/ProjectForm'
import ViewEmployees from '../Components/ViewEmployees'
import EmployeeDetails from '../Components/EmployeeDetails'

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shift/view" element={<ViewShift />} />
            <Route path="shift/view/officer" element={<ViewShiftOfficer />} />
            <Route path="project/view" element={<ViewProject />} />
            <Route path="shift/create" element={<ShiftForm />} />
            <Route path="project/create" element={<ProjectForm />} />
            <Route path="admin/view/employees" element={<ViewEmployees />} />
            <Route path="admin/view/employees/:id" element={<EmployeeDetails />} />
        </Routes>
    );
}

export default App;