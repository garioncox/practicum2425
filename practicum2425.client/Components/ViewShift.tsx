import { useEffect, FC } from 'react';
import { Shift } from '../DataInterface/ShiftInterface'
import Spinner from './Spinner'
import { Post } from "../Functions/Post"
import { EmployeeShiftDTO } from '../DataDTOInterfaces/EmployeeShiftDTOInterface'


const ViewShift: FC<{
    setShifts: (s: Shift[]) => void;
    shifts: Shift[] | undefined
}> = ({ shifts, setShifts }) => {
    
    useEffect(() => {
        populateShifts();
    },[])

    async function populateShifts() {
        const response = await fetch('/api/Shift/get');
        const data = await response.json();
        setShifts(data);
    }

    async function postEmployeeShift(id:number) {
        const employee: EmployeeShiftDTO = {
            EmployeeId : 1,
            ShiftId: id
        }

        Post(import.meta.env.API_PATH + 'api/EmployeeShift/', employee)

    }

    const contents =
      shifts === undefined ? <Spinner /> : (
        <div>
                    {shifts.map((s) => (
              <>
              <p key={s.id}> {s.location} : {s.startTime} - {s.endTime}</p>
              <button onClick={()=> postEmployeeShift(s.id) }>Take This Shift</button>
              </>
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