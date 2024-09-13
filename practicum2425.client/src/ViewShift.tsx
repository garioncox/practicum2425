import { useEffect, useState } from 'react';
import { Shift } from '../DataInterface/ShiftInterface'

function ViewShift() {
    const[shifts, setShifts] = useState<Shift[]>() 

    useEffect(() => {
        populateShifts();
    },[])

    async function populateShifts() {
        const response = await fetch('/api/Shift/GetShifts');
        const data = await response.json();
        setShifts(data);
    }

    const contents =
      shifts === undefined ? (
        <p>Loading</p>
      ) : (
        <div>
          {shifts.map((s) => (
              <p key={s.id}> {s.location} : {s.startTime} - {s.endTime}</p>
          ))}
        </div>
      );
    
    return (
        <div >
            <h1 id="shifts"> Shift List</h1>
            {contents}
            
        </div>
    )
}

export default ViewShift