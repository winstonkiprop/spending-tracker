import axios from "axios";
import React, {useEffect, useState} from "react"; 

function Customers(){
    const[customers, setCustomers] = useState([])
    useEffect(()=>{
        getAllCustomers();
    }, [])

    const getAllCustomers=()=>{
        axios
        .get ('http://localhost:9292/customers')
        .then((res) =>{
            console.log(res);
            setCustomers(res.data);
        })

        .catch((err) => {
            console.log(err);
        })
    };
    return(
        <div>
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