import { useEffect, useState } from 'react';
import { Shift } from '../DataInterface/ShiftInterface'
import { EmployeeShiftDTO } from '../DataDTOInterfaces/EmployeeShiftDTOInterface'
import Spinner from './Spinner'
import { httpRequest } from '../Functions/HttpRequest';


function ViewShiftOfficer() {
    const [shifts, setShifts] = useState<Shift[]>()

    useEffect(() => {
        populateShifts();
    }, [])

    const contents =
        shifts === undefined ? (
            <Spinner />
        ) : (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                    </tr>
                </thead>
                <tbody>

                    {shifts.map((s) => (
                        <tr key={s.id}>
                            <td>{s.location}</td>
                            <td>{s.startTime}</td>
                            <td>{s.endTime}</td>
                            <td> <button className="btn btn-primary" onClick={() => postEmployeeShift(s.id)}>Take This Shift</button> </td>
                        </tr>))}

                </tbody>
            </table>
        );

    async function populateShifts() {
        const response = await fetch(import.meta.env.VITE_API_URL + 'api/Shift/get');
        const data = await response.json();
        setShifts(data);
    }

    async function postEmployeeShift(id: number) {
        const employee: EmployeeShiftDTO = {
            EmployeeId: 1,
            ShiftId: id
        }

        httpRequest(import.meta.env.VITE_API_URL + 'api/EmployeeShift/', employee, "POST")

    }

    return (
        <div >
            <h1 id="shifts"> Shift List</h1>
            {contents}

        </div>
    )

}

export default ViewShiftOfficer