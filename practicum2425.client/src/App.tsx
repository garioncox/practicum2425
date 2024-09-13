import { useEffect, useState } from 'react';
import './App.css';
import ViewShift from './ViewShift';

import ProjectForm from '../Components/ProjectForm';
import ViewProject from '../Components/ViewProject'
import { Shift } from '../DataInterface/ShiftInterface';



interface Company {
    id: number;
    name: string;
}

function App() {
    const [shifts, setShifts] = useState<Shift[]>() 
    const [companies, setCompanies] = useState<Company[]>();

    useEffect(() => {
        populateCompanyData();
    }, []);

    const contents = companies === undefined ? <p>Loading... Please refresh once the ASP.NET backend has started.</p> : (
        <div>
            {companies.map(c =>
                <p key={c.id}>{c.id} {c.name}</p>
            )}
        </div>
    );

    return (
        <>
            <div>
                <h1 id="tableLabel">Company List</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>

            <ViewShift
                shifts={shifts}
                setShifts={setShifts}
            />

            <ShiftForm />
            <ViewShift />
            <ViewProject />

        </>
    );


    async function populateCompanyData() {
        const response = await fetch('/api/Company/GetCompanies');
        const data = await response.json();
        setCompanies(data);
    }
}

export default App;