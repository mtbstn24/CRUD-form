import AddForm from "../../components/addForm/AddForm";
import UpdateForm from "../../components/updateForm/UpdateForm";
import DataTable from "../../components/dataTable/DataTable";
import "./home.css";
import { useState } from "react";

// const updating=false;

export default function Home() {

  const viewdata = [
    {id:1, name:'Thush', title:'The Article', description:'This is a new article'},
    {id:2, name:'Jane', title:'React', description:'Introduction on React'},
    {id:3, name:'Leela', title:'Python', description:'How to use it on ML'}
  ]

  const [data, setData] = useState(viewdata)
  const [updating, setUpdating] = useState(false)
  const emptyData = {id: null, name:"", title:"", description:""}
  const [currentData, setCurrentData] = useState(emptyData)

  const addData = (formdata) => {
    formdata.id = data.length + 1
    setData([...data, formdata])
  }

  const deleteData = (id) => {
    setData(data.filter((d) => d.id !== id))
  }

  const updateData = (formdata) => {
    setUpdating(true)
    setCurrentData({id:formdata.id, name:formdata.name, title:formdata.title, description:formdata.description})
  }

  const updateViewData = (id, updatedData) => {
    setUpdating(false)
    setData(data.map((d) => (d.id === id ? updatedData : d)))
  }

  return (
    <div className="home">
      {updating && <UpdateForm currentData={currentData} updateViewData={updateViewData} setUpdating={setUpdating} /> }
      {!updating && <AddForm addData={addData} /> }
      <DataTable data={data} deleteData={deleteData} updateData={updateData} />
    </div>
  );
}