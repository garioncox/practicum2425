import ViewShift from '../Components/ViewShift';
import ProjectForm from '../Components/ProjectForm';
import ViewProject from '../Components/ViewProject';
import ShiftForm from '../Components/ShiftForm'
import ViewShiftofficer from '../Components/ViewShiftOfficer'

function App() {

    return (
        <>
            <ViewShift/>
            <hr />
            <ViewProject />
            <hr />
            <ProjectForm />
            <hr />
            <ShiftForm />
            <hr />
            <ViewShiftofficer/>
        </>
    );
}

export default App;