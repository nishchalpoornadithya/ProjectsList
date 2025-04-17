import React, { useState, useEffect } from "react";
import "./ProjectsTable.css";

const ProjectsTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const totalPages = Math.ceil(data.length / recordsPerPage);

  /* METHODS */

  const getCurrentRecords = () => {
    const start = (currentPage - 1) * recordsPerPage;
    return data.slice(start, start + recordsPerPage);
  };

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const getPagination = () => {
    const visiblePages = 5;
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let end = start + visiblePages - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - visiblePages + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  /* VIEW */

  return (
    <div className="projects-table-container">
        <div className="projects-table-viewer">
            <table className="projects-table" aria-label="Projects Data Table">
                <caption className="visually-hidden">List of projects with funding data</caption>
                    <thead>
                        <tr class="project-table-header">
                            <th scope="col">S.No.</th>
                            <th scope="col">Percentage Funded</th>
                            <th scope="col">Amount Pledged</th>
                        </tr>
                    </thead>
                <tbody>
                {getCurrentRecords().map((record, idx) => (
                    <tr key={idx}>
                    <td>{record["s.no"]}</td>
                    <td>{record["percentage.funded"]}</td>
                    <td>{record["amt.pledged"]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

      <nav
        className="pagination"
        role="navigation"
        aria-label="Pagination Navigation"
      >
            <button
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
            aria-label="Go to first page"
            >
            ⏮
            </button>

            <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
            >
            {"<"}
            </button>

            {getPagination().map((num) => (
            <button
                key={num}
                className={currentPage === num ? "active" : ""}
                onClick={() => paginate(num)}
                aria-current={currentPage === num ? "page" : undefined}
                aria-label={`Go to page ${num}`}
            >
                {num}
            </button>
            ))}

            <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
            >
            {">"}
            </button>

            <button
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
            aria-label="Go to last page"
            >
            ⏭
            </button>
      </nav>
    </div>
  );
};

export default ProjectsTable;
