import "./dataTable.css";

export default function DataTable(props) {
    
    return (
        <div className="dataTable">
            <h2 className="dataTableHeading">View Data</h2>
            <table className="table table-hover">
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
                    {props.data.map((d) => (
                        <>
                        <tr>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.title}</td>
                        <td>{d.description}</td>
                        <td>
                            <button className="rowUpdateBtn" onClick={()=> props.updateData(d)} >Update</button>
                            <button className="rowDeleteBtn" onClick={()=> props.deleteData(d.id)} >Delete</button>
                        </td>
                        </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}