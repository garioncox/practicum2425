import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import ProjectList from './Pages/ProjectList'
import ShiftList from './Pages/ShiftList'
import ShiftOfficerList from './Pages/ShiftOfficerList'
import CreateShift from './Pages/CreateShift'
import ProjectForm from './Pages/CreateProject'

function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shift/view" element={<ShiftList />} />
            <Route path="shift/view/officer" element={<ShiftOfficerList />} />
            <Route path="project/view" element={<ProjectList />} />
            <Route path="shift/create" element={<CreateShift />} />
            <Route path="project/create" element={<ProjectForm />} />
        </Routes>
    );
}

export default App;