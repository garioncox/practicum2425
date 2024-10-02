import { useState } from "react"
import { EmployeeDTO } from "../DataDTOInterfaces/EmployeeDTOInterface"
import { httpRequest } from "../Functions/HttpRequest"

function AddOfficer() {
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    async function PostEmployee() {
        const employee: EmployeeDTO = {
            name: name,
            email: email,
            phonenumber: phone
        }
        await httpRequest(import.meta.env.VITE_API_URL + 'api/Employee/PostEmployee' , employee, "POST")
    }

    return (
        <>
            <h3> Add Officer</h3>
            <form onSubmit={(e) => { e.preventDefault(); PostEmployee();  } }>
            <label> Name
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className={`form-control`}
                    id="name"
                    placeholder="name"
                    required
                />
            </label>


            <label> Email
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className={`form-control`}
                    id="email"
                    placeholder="email"
                    required
                />
            </label>

            <label> Phone 
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    className={`form-control`}
                    id="phone"
                    placeholder="phone"
                    required
                />
            </label>
                <button type="submit" className="btn btn-primary"> Add Officer</button>
            </form>
        </>
    )
}

export default AddOfficer


