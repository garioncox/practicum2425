import { useState } from 'react';
import ViewShift from '../Components/ViewShift';
import ViewCompany from '../Components/ViewCompany'
import ProjectForm from '../Components/ProjectForm';
import ViewProject from '../Components/ViewProject';
import { Shift } from '../DataInterface/ShiftInterface';
import ShiftForm from '../Components/ShiftForm'

function App() {
    const [shifts, setShifts] = useState<Shift[]>()

    return (
        <>
            <ViewCompany />
            <ViewShift
                shifts={shifts}
                setShifts={setShifts}
            />
            <ViewProject />
            <ProjectForm />
            <ShiftForm />
        </>
    );
}

export default App;