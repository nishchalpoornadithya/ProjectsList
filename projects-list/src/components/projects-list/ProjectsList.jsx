import React, { useEffect } from 'react';
import { getProjectsList } from '../../services/projects-service';
const ProjectsList = () => {

    useEffect(() => {
        getProjectsList();
    }, []);


    return (
        <div className='projects-list-container'>

        </div>
    )

}

export default ProjectsList;