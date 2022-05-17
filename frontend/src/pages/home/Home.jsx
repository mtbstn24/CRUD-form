import AddForm from "../../components/addForm/AddForm";
import UpdateForm from "../../components/updateForm/UpdateForm";
import DataTable from "../../components/dataTable/DataTable";
import "./home.css";

const updating=false;

export default function Home() {
  return (
    <div className="home">
      {updating && <UpdateForm /> }
      {!updating && <AddForm /> }
      <DataTable />
    </div>
  );
}