import { useEffect, useState } from 'react';
import { Company } from '../DataInterface/CompanyInterface';
import Spinner from './Spinner'

function ViewProject() {
    const [companies, setCompanies] = useState<Company[]>();

    useEffect(() => {
        populateCompanyData();
    }, []);

    async function populateCompanyData() {
        const response = await fetch('/api/Company/GetCompanies');
        const data = await response.json();
        setCompanies(data);
    }

    const contents = companies === undefined ? <Spinner /> :
        (
            <div>
                {companies.map(c =>
                    <p key={c.id}>{c.id} {c.name}</p>
                )}
            </div>
        )

    return (
        <div>
            <h1 id="tableLabel">Company List</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    )

};

export default ViewProject