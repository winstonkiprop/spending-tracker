import axios from "axios";
import React, {useState} from "react";
function NewExpense(){
    const [item_name, setItem_name] = useState("")
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:9292/expenses',{
            item_name: item_name,
            price: price,
            amount: amount
        })
        .then((response) =>{
            console.log(response)
        }, (error) => {
            console.log(error);
        })
    };

    return(
    <div>
    <form className="new-expense-form" onSubmit={handleSubmit}>
      <input placeholder="item-name" type="text"
      value={item_name}
      onChange={(e) => setItem_name(e.target.value)}/>
       <input placeholder="price" type="text"
      value={price}
      onChange={(e) => setPrice(e.target.value)}/>
      <input placeholder="amount" type="text"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}/>
      <input type="submit" value="create-expense" className="btn-inpt"/>
    </form>
        </div>
    )
}

export default NewExpense