import React, { useState, useEffect } from "react";
import "./ProjectsTable.css";

const ProjectsTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const totalPages = Math.ceil(data.length / recordsPerPage);

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

  return (
    <div className="projects-table-container">
      <table className="projects-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
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

      <div className="pagination">
        <button onClick={() => paginate(1)} disabled={currentPage === 1}>
          ⏮
        </button>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          <span className="pagination-arrows">{"<"}</span>
        </button>

        {getPagination().map((num) => (
          <button
            key={num}
            className={currentPage === num ? "active" : ""}
            onClick={() => paginate(num)}
          >
            {num}
          </button>
        ))}

        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          <span className="pagination-arrows">{">"}</span>
        </button>
        <button onClick={() => paginate(totalPages)} disabled={currentPage === totalPages}>
          ⏭
        </button>
      </div>
    </div>
  );
};

export default ProjectsTable;
