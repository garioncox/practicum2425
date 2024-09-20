import { useState } from 'react';
import ViewShift from '../Components/ViewShift';
import ProjectForm from '../Components/ProjectForm';
import ViewProject from '../Components/ViewProject';
import { Shift } from '../DataInterface/ShiftInterface';
import ShiftForm from '../Components/ShiftForm'
import ViewShiftofficer from '../Components/ViewShiftOfficer'

function App() {
    const [shifts, setShifts] = useState<Shift[]>()

    return (
        <>
            <ViewShift
                shifts={shifts}
                setShifts={setShifts}
            />
            <hr />
            <ViewProject />
            <hr />
            <ProjectForm />
            <hr />
            <ShiftForm />
            <hr />
            <ViewShiftofficer shifts={shifts} setShifts={setShifts} />
        </>
    );
}

export default App;