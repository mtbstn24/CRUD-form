import { useState } from "react"
import "../dataForm.css"

export default function AddForm({addData}) {
    const [name,setName] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newFormData = {
            name,
            title,
            description
        };
        addData(newFormData)
        setName("")
        setTitle("")
        setDescription("")
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = ""; 

    }
    return(
        <div className="dataForm">
            <h2 className="dataFormHeading">Add Data</h2>
            <form name="addForm" onSubmit={handleSubmit}>
                <div className="dataFormGroup">
                    <label htmlFor="name">Author Name: </label>
                    <input 
                        type="text" id="name" placeholder="Your Name" required={true} 
                        onChange={e=>setName(e.target.value)} 
                    />
                    <label htmlFor="name">Title: </label>
                    <input 
                        type="text" id="title" placeholder="Tile" required={true} 
                        onChange={e=>setTitle(e.target.value)} 
                    />
                    <label htmlFor="name">Description: </label>
                    <input 
                        type="text" id="description" placeholder="Description...." required={true} 
                        onChange={e=>setDescription(e.target.value)} 
                    />
                    <button type="submit" className="dataFormSubmit">Submit</button>
                    <button type="reset" className="dataFormCancel">Cancel</button>
                </div>
            </form>
        </div>
    )
}