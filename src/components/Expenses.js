import React, {useState, useEffect} from "react";
import axios from 'axios';
import DeleteExpense from "./DeleteExpense";
import NavBar from "./NavBar";

function Expenses(){
    const [expenses, setExpenses] = useState([])
    useEffect(() =>{
        getExpenses();
    }, [])

    const getExpenses =() =>{
        axios
        .get('http://localhost:9292/expenses')
        .then((res) =>{
            console.log(res)
            setExpenses(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    return(
        <div className="all-expenses">
            <NavBar/>
            <h1>My expense</h1>
            <button type="search"><DeleteExpense/></button>
            <div className="expense-container">
                {expenses.map((expense) => (
                    <div className="expense-det" key = {expense.id}>
                        <h1>Total expenses:<span>{expense.amount}</span></h1>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Expenses;