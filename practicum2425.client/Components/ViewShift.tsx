import { useEffect, FC } from 'react';
import { Shift } from '../DataInterface/ShiftInterface'
import Spinner from './Spinner';

const ViewShift: FC<{
    setShifts: (s: Shift[]) => void;
    shifts: Shift[] | undefined
}> = ({ shifts, setShifts }) => {
    
    useEffect(() => {
        populateShifts();
    },[])

    async function populateShifts() {
        const response = await fetch('/api/Shift/GetShifts');
        const data = await response.json();
        setShifts(data);
    }

    const contents =
      shifts === undefined ? <Spinner /> : (
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