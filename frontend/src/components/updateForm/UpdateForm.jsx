import { useEffect, useState } from "react"
import "../dataForm.css"

export default function UpdateForm(props) {
    const [id,setId] = useState(props.currentData.id);
    const [name,setName] = useState(props.currentData.name);
    const [title,setTitle] = useState(props.currentData.title);
    const [description,setDescription] = useState(props.currentData.description);

    useEffect(() => {
        setId(props.currentData.id)
        setName(props.currentData.name)
        setTitle(props.currentData.title)
        setDescription(props.currentData.description)
    }, [props])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newFormData = {
            id,
            name,
            title,
            description
        };
        props.updateViewData(id, newFormData)
        setName("")
        setTitle("")
        setDescription("")
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = ""; 

    }
    return(
        <div className="dataForm">
            <h2 className="dataFormHeading" >Update Data</h2>
            <form name="updateForm" onSubmit={handleSubmit}>
                <div className="dataFormGroup">
                <label htmlFor="name">Author Name: </label>
                    <input 
                        type="text" id="name" placeholder="Your Name" required={true} 
                        value={name} onChange={e=>setName(e.target.value)} 
                    />
                    <label htmlFor="name">Title: </label>
                    <input 
                        type="text" id="title" placeholder="Tile" required={true} 
                        value={title} onChange={e=>setTitle(e.target.value)} 
                    />
                    <label htmlFor="name">Description: </label>
                    <input 
                        type="text" id="description" placeholder="Description...." required={true} 
                        value={description} onChange={e=>setDescription(e.target.value)} 
                    />
                    <button type="submit" className="dataFormSubmit">Update</button>
                    <button type="reset" className="dataFormCancel" onClick={()=> props.setUpdating(false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}