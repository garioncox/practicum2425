import { useEffect, useState } from 'react';

function ViewShift() {
    interface Shift {
        id: number
        name: string
    }

    const[shifts, setShifts] = useState<Shift[]>() 

    useEffect(() => {
        populateShifts();
    },[])

    async function populateShifts() {
        const response = await fetch('/api/Company/GetCompanies');
        const data = await response.json();
        setShifts(data);
    }

    const contents = shifts === undefined ? <p>Loading</p> :
        <div>
            {companies.map(s =>
                <p key={s.id}> {s.name}</p>
            )}
        </div>
    
    return (
        <div >
            <h1 id="shifts"> Shift List</h1>
            <p> {shifts} </p>
            
        </div>
    
    )
}

export default ViewShift