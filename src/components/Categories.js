import React, {useEffect, useState} from "react";
import axios from 'axios';
import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom";
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
        <div className="all-courses">
            <NavBar/>
            <h1>All Categories</h1>
            <div className="course-container">
            {categories.map((category) => (
                    <div className="course-det" key = {category.id}>
                        <h2>{category.category_name}</h2>
                        <div className="book-item-det">
                        <h3>Description:{category.description}</h3>
                        <div>
<button className="start-btn" onClick={() => handleClick(category.id)}>View Items</button>
    </div>
                        </div>
                        </div>
                ))}
                </div>
        </div>
    )
}
export default Categories;