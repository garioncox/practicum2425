import { useEffect, FC } from 'react';
import { Shift } from '../DataInterface/ShiftInterface'
import { Post } from "../Functions/Post"
import { EmployeeShiftDTO } from '../DataDTOInterfaces/EmployeeShiftDTOInterface'
import Spinner from './Spinner'


const ViewShiftOfficer: FC<{
    setShifts: (s: Shift[]) => void;
    shifts: Shift[] | undefined
}> = ({ shifts, setShifts }) => {

    useEffect(() => {
        populateShifts();
    }, [])

    const contents =
        shifts === undefined ? (
            <Spinner />
        ) : (
            <table className="table table-striped">
                <thead>
                    <th>Location</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                </thead>
                <tbody>

                        {shifts.map((s) => (
                            <tr key={s.id}>
                            <td>{s.location}</td>
                            <td>{s.startTime}</td>
                            <td>{s.endTime}</td>
                            <td> <button className="btn btn-primary" onClick={() => postEmployeeShift(s.id)}>Take This Shift</button> </td>
                        </tr>) )}
                    
                </tbody>
            </table>
        );

    async function populateShifts() {
        const response = await fetch('/api/Shift/GetShifts');
        const data = await response.json();
        setShifts(data);
    }

    async function postEmployeeShift(id: number) {
        const employee: EmployeeShiftDTO = {
            EmployeeId: 1,
            ShiftId: id
        }

        Post('https://localhost:7157/api/EmployeeShift/', employee)

    }

    return (
        <div >
            <h1 id="shifts"> Shift List</h1>
            {contents}

        </div>
    )

}

export default ViewShiftOfficer