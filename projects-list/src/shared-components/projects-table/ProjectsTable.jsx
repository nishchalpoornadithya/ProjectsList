import React, {useState, useEffect} from 'react';

const ProjectsTable = (props) => {
    const { data } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentRecords, setCurrentRecords] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const recordsPerPage = 5;

    useEffect(() => {
        if(data) {
            // Calculate which records to show on the current page
            const indexOfLastRecord = currentPage * recordsPerPage;
            const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
            setCurrentRecords(data.slice(indexOfFirstRecord, indexOfLastRecord));
        }
    }, [currentPage, data]);


    useEffect(() => {
        // Calculate total pages
        setTotalPages(Math.ceil(data.length / recordsPerPage));
    }, [data]);

    /* METHODS */

    // Handle page change
    const paginate = (pageNumber) => {
        if(pageNumber < 1 || pageNumber > totalPages) {
            return;
        }
        setCurrentPage(pageNumber);
    }

    /* VIEWS */

    return (
        data && <div class="projects-table-container">
            <table border="1" cellPadding="5" style={{ width: "100%", marginTop: "20px" }}>
                <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Percentage funded</th>
                    <th>Amount pledged</th>
                </tr>
                </thead>

                <tbody>
                {currentRecords && currentRecords.map((record, index) => (
                    <tr key={'project-'+index}>
                        <td>{record['s.no']}</td>
                        <td>{record['percentage.funded']}</td>
                        <td>{record['amt.pledged']}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {'<'}
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={'project-next-btn'+ index + 1}
                    onClick={() => paginate(index + 1)}
                    style={{ margin: "0 5px" }}
                >
                    {index + 1}
                </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    {'>'}
                </button>
            </div>

        </div>
    )
}

export default ProjectsTable;