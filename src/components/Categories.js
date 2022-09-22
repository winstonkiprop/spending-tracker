import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Categories(){
    const[categories, setCategories] = useState([])
    const navigate = useNavigate();
    const handleClick = id => {
        navigate(`${id}`)
    };
    useEffect(()=>{
        getCategoryDetails();
    }, [])
    const getCategoryDetails =() =>{
        axios
        .get('http://localhost:9292/categories')
        .then((res)=>{
            console.log(res);
            setCategories(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    return(
        <div className="all-category">
            <h1>All Categories</h1>
            <div className="category-container">
            {categories.map((category) => (
                    <div className="category-det" key = {category.id}>
                        <h2>{category.category_name}</h2>
                        <h3>Description:{category.description}</h3>
                        <button className="view-btn" onClick={()=> handleClick(category.id)}>View Items</button>
                        </div>

                ))}
                </div>
        </div>
    )
}
export default Categories;