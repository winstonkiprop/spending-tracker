import React, {useState} from "react";
import axios from "axios";

function UpdateItem(){
    const [id, setId] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit=(e) => {
        e.preventDefault();

        axios.patch(`http://localhost:9292/items/${id}`, {
            id:id,
            price:price
        })
        .then((response) => {
            console.log(response)
        }, (error) => {
            console.log(error);
        })
    }
    return(
        <form className="update-item-price" onSubmit={handleSubmit}>
            <input placeholder="item_id" type="text"
            value={id} onChange={(e) => setId(e.target.value)}/>
            <input placeholder="price" type="text"
            value={price} onChange={(e) => setPrice(e.target.value)}/>
            <input  type="submit"
            value="submit" className="btn-update-inpt"/>
        </form>
    )
    }

    export default UpdateItem;