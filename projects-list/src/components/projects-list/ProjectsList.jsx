import React, { useEffect, useState } from 'react';
import { getProjectsList } from '../../services/projects-service';
import ProjectsTable from '../../shared-components/projects-table/ProjectsTable';

import './ProjectsList.css';

const ProjectsList = () => {

    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProjectsList();
            setProjectsList(result);
          };
          fetchData();
    }, []);


    return (
        <div className='projects-list-container'>
            <h1 className="projects-list-header">Projects Funding Status</h1>
            <ProjectsTable data={projectsList}/>
        </div>
    )

}

export default ProjectsList;