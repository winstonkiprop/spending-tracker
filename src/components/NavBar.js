import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    <div className="navbar">
        <nav>
            <ul>
                <li>
                    <NavLink className="nav_link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to="/categories">Categories</NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to="/customers">Customers</NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to="/expenses">Expenses</NavLink>
                </li>
            </ul>
        </nav>
    </div>
}