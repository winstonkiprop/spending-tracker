import React from "react";
import NavBar from "./NavBar";
import NewExpense from "./NewExpense";
function Home(){
    return(
        <div>
            <header  className="home-sect">
            <h1 className="app-name">Spending <span>Tracker</span></h1>
            </header>
            <NavBar/>
            <div className="head-sect">
                <article>
                    <p>Track your expenses.</p>
                    <p>Access the various categories of items and add their related costs.</p>
                </article>
            </div>

            <NewExpense/>
        </div>
    )
}

export default Home;