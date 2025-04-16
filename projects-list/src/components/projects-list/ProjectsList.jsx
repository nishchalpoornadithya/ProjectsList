import React, { useEffect, useState } from 'react';
import { getProjectsList } from '../../services/projects-service';
import ProjectsTable from '../../shared-components/projects-table/ProjectsTable';

const ProjectsList = () => {

    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProjectsList();
            console.log(result)
            setProjectsList(result);
          };
          fetchData();
    }, []);


    return (
        <div className='projects-list-container'>
            <ProjectsTable data={projectsList}/>
        </div>
    )

}

export default ProjectsList;