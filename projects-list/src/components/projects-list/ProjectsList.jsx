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
    <main
      className='projects-list-container'
      role="main"
      aria-labelledby="projects-list-heading"
    >
      <h1 id="projects-list-heading" className="projects-list-header">
        Projects Funding Status
      </h1>

      <ProjectsTable data={projectsList} />
    </main>
  );
};

export default ProjectsList;
