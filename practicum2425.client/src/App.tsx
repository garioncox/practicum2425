import { useState } from 'react';
import ViewShift from '../Components/ViewShift';
import ProjectForm from '../Components/ProjectForm';
import ViewProject from '../Components/ViewProject';
import { Shift } from '../DataInterface/ShiftInterface';
import ShiftForm from '../Components/ShiftForm'
import ViewShiftofficer from '../Components/ViewShiftOfficer'
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home'

function App() {
    const [shifts, setShifts] = useState<Shift[]>()

    return (
        <>
        {/* <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="view-shift" element={ <ViewShift
                shifts={shifts}
                setShifts={setShifts}
            /> } />
        <Route path="view-project" element={ <ViewProject/> } />
        <Route path="project-form" element={ <ProjectForm/> } />
        <Route path="shift-form" element={ <ShiftForm/> } />
        <Route path="view-shift-officer" element={ <ViewShiftofficer shifts={shifts} setShifts={setShifts} /> } />
        </Routes> */}
        <ViewShift setShifts={setShifts} shifts={shifts} />
        </>
    );
}

export default App;