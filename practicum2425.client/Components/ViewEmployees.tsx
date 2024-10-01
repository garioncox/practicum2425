//import React from 'react'
import { Employee } from "../DataInterface/EmployeeInterface" 
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function ViewEmployees() {
    const [employees, setEmployees] = useState<Employee[]>([])

    useEffect(() => { 
        getEmployees()
    },[])

    async function getEmployees() {
        const response = await fetch(import.meta.env.VITE_API_URL + 'api/Employee/GetEmployees');
        const value = await response.json()

        setEmployees(value)
    }

    const contents =
        employees === undefined ? (
            <Spinner />
        ) : (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>

                    {employees.map((s) => (
                        <tr key={s.id }>
                            <td>{s.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );

    return (
        <>
            {contents }
        </>
        
    )
}

export default ViewEmployees