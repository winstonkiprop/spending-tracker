import axios from "axios";
import React, {useEffect, useState} from "react"; 
import NavBar from "./NavBar"

function Customers(){
    const[customers, setCustomers] = useState([])
    useEffect(()=>{
        getAllCustomers();
    }, [])

    const getAllCustomers=()=>{
        axios
        .get ('https://backend-phase-3.herokuapp.com/customers')
        .then((res) =>{
            console.log(res);
            setCustomers(res.data);
        })

        .catch((err) => {
            console.log(err);
        })
    };
    return(
        <div className="all-customers">
            <NavBar/>
            <div className="customer-container">
                {customers.map((customer) =>(
                    <div className="customer-det" key = {customer.id}>
                    <div className="id">
                    <h1>{customer.id}</h1>
                    </div>
                    <div className="username">
                    <h1>{customer.username}</h1>
                    </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Customers;