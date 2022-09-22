import React, { useState } from "react";
import axios from 'axios';
function DeleteExpense(){
    const [id, setId] = useState("")
const handleSubmit =(e) => {
    e.preventDefault();
  axios.delete(`http://localhost:9292/expenses/${id}`, {
})
.then((response) => {
  console.log(response)
}, (error) => {
  console.log(error);
})
  };
    return(
        <div>
        <form className="expense-details-form" onSubmit={handleSubmit}>
      <input placeholder="expense id" type="text"
      value={id}
      onChange={(e) => setId(e.target.value)}/>
       <input type="submit" value="remove expense" className="btn-delete-inpt"/>
    </form>
        </div>
    )
}
export default DeleteExpense;









