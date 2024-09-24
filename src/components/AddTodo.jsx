import React from 'react'
import { useState } from 'react'
// import styles from './AddTodo.module.css'
const AddTodo = ({handleNewItem}) => {

  const [name,setName] = useState("");
  const [dueDate,setDueDate] = useState("");

  // to get the data when value changes we use onChange(input ki value nikalne ke liye )
  const handleNameChange = (event)=>{
    setName(event.target.value)
  }

  const handleDateChange = (event)=>{
    setDueDate(event.target.value)
  }
  // data send karke remove karne ke liye
  const handleAddButtonClicked = ()=>{
    handleNewItem(name,dueDate);
    // values add ho jaye to screen se remove ho jaye
    setName("");
    setDueDate("");
  }

  return (
    <div>
         <div className="container text-center">
         <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo name" onChange={handleNameChange} value={name}/>
          </div>
          <div className="col-4">
            <input type="date" placeholder="DD/MM/YY"  onChange={handleDateChange} value={dueDate}/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
            >Add</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default AddTodo