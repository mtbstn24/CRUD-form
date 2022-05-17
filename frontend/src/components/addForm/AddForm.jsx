import "../dataForm.css"

export default function AddForm() {
    return(
        <div className="addForm">
            <h2 className="addFormHeading">Add Data</h2>
            <form name="addForm">
                <div className="addFormGroup">
                    <label htmlFor="name">Author Name: </label>
                    <input type="text" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Title: </label>
                    <input type="text" id="title" placeholder="Tile" />
                    <label htmlFor="name">Description: </label>
                    <input type="text" id="description" placeholder="Description...." />
                    <button type="submit" className="addFormSubmit">Submit</button>
                    <button type="reset" className="addFormCancel">Cancel</button>
                </div>
            </form>
        </div>
    )
}