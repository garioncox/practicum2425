import { useEffect, useState } from 'react';
import { Project } from '../DataInterface/ProjectInterface';
import Spinner from './Spinner';

function ViewProject() {
    const [projects, setProjects] = useState<Project[]>()

    useEffect(() => {
        populateProjects();
    }, [])

    async function populateProjects() {
        const response = await fetch('/api/Project/GetProjects');
        const data = await response.json();
        setProjects(data);
    }
    
    const contents = projects === undefined ? <Spinner /> : (
      <div>
          {projects.map(c =>
              <p key={c.id}>{c.id}: {c.name}, {c.location}</p>
          )}
      </div>)
    
    return (
        <div >
            <h1 id="projects"> Project List</h1>
            {contents}
        </div>
    )

};

export default ViewProject