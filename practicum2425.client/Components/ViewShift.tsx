import { useState, useEffect, FC } from 'react';
import { Shift } from '../DataInterface/ShiftInterface'
import Spinner from './Spinner'

const ViewShift: FC<{
    setShifts: (s: Shift[]) => void;
    shifts: Shift[] | undefined
}> = ({ shifts, setShifts }) => {

    const [selected, setSelected] = useState<number>()

    useEffect(() => {
        populateShifts();
    }, [])

    function handleEdit(id: number) {
        setSelected(id)
    }

    function checkSelected(s: Shift) {
        const val = s.id === selected ? (
            <tr key={s.id}>
                <td> <input className="form-control" value={s.location} /> </td>
                <td> <input className="form-control" value={s.startTime} /> </td>
                <td> <input className="form-control" value={s.endTime} /> </td>
                <td> <button className="btn btn-success" disabled> Save </button> </td>
                <td> <button onClick={() => handleEdit(-1)} className="btn btn-danger"> Cancel </button> </td>
            </tr>
        ) : (
            <tr key={s.id}>
                <td>{s.location}</td>
                <td>{s.startTime}</td>
                <td>{s.endTime}</td>
                <td> <button onClick={() => handleEdit(s.id)} className="btn btn-warning"> Edit </button> </td>
                <td> <button className="btn btn-danger" disabled> Delete </button> </td>
            </tr>
        )
        return val
    }

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
                        checkSelected(s)
                    ))}
                </tbody>
            </table>
        );

    async function populateShifts() {
        const response = await fetch(import.meta.env.VITE_API_URL + 'api/Shift/get');
        const data = await response.json();
        setShifts(data);
    }

    return (
        <div >
            <h1 id="shifts"> Shift List</h1>
            {contents}

        </div>
    )
}

export default ViewShift