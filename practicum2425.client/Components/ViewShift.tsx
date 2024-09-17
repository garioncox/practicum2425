import { useEffect, FC } from 'react';
import { Shift } from '../DataInterface/ShiftInterface'
import Spinner from './Spinner'
import { EmployeeShiftDTO } from '../DataDTOInterfaces/EmployeeShiftDTOInterface'

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

    async function postEmployeeShift(id:number) {
        const employee: EmployeeShiftDTO = {
            EmployeeId : 1,
            ShiftId: id
        }

        try {
            const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("content-type", "application/json");

            await fetch('https://localhost:7157/api/EmployeeShift/', {
                method: "POST",
                body: JSON.stringify(employee),
                headers: myHeaders,
            })
        }
        catch (e) {
            console.log(e)

        }

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