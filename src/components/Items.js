import React, {useState, useEffect} from "react";
import axios from 'axios';
import UpdateItem from "./updateItem";

function Items(){
    const[items,setItems] = useState([]);

    useEffect(() =>{
        getItems()
    })

    const getItems =()=>{
        axios 
        .get('http://localhost:9292/items')
        .then((res) =>{
           // console.log(res);
            setItems(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <div>
            <h1>Items</h1>
            <UpdateItem/>
            <div className="items-container">
                {items.map((item)=> (
                    <div className="item-det" key={item.id}>
                        <h2>{item.item_name}</h2>
                        <h2>{item.price}</h2>
                        <h2>{item.category_id}</h2>
                        </div>
                ))}
            </div>

        </div>
    )
}
export default Items;