import "./dataTable.css";

export default function DataTable() {
    return (
        <div className="dataTable">
            <h2 className="dataTableHeading">View Data</h2>
            <table className="dataTable" class="table table-hover">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Author</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>01</td>
                    <td>Thushari</td>
                    <td>Tiny Tales</td>
                    <td>Combination of small stories</td>
                    <td>
                        <button className="rowUpdateBtn">Update</button>
                        <button className="rowDeleteBtn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>Mari</td>
                    <td>The Letter</td>
                    <td>Letters to the people</td>
                    <td>
                        <button className="rowUpdateBtn">Update</button>
                        <button className="rowDeleteBtn">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}