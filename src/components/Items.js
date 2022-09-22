import React, {useState, useEffect} from "react";
import axios from 'axios';
import UpdateItem from "./updateItem";
import NavBar from "./NavBar";

function Items(){
    const[items,setItems] = useState([]);

    useEffect(() =>{
        getItems()
    })

    const getItems =()=>{
        axios 
        .get('https://backend-phase-3.herokuapp.com/items')
        .then((res) =>{
           // console.log(res);
            setItems(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <div className="all-items">
            <NavBar/>
            <h1>Items</h1>
            <h3>Update item price</h3>
            <UpdateItem/>
            <div className="items-container">
                {items.map((item)=> (
                    <div className="item-det" key={item.id}>
                        <h2> item name:{item.item_name}</h2>
                        <h2>price: {item.price}</h2>
                        <h2>category_id: {item.category_id}</h2>
                        </div>
                ))}
            </div>

        </div>
    )
}
export default Items;