import { useEffect, useState } from 'react';
import { Company } from '../Data/Interfaces/Company';

function CompanyList() {
    const [companies, setCompanies] = useState<Company[]>();

    useEffect(() => {
        populateCompanyData();
    }, []);

    async function populateCompanyData() {
        const response = await fetch(import.meta.env.VITE_API_URL + 'api/Company/GetCompanies');
        const data = await response.json();
        setCompanies(data);
    }

    const contents = companies === undefined ? <div className="spinner-border" role="status" />
    :
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

export default CompanyList