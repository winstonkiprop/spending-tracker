import React from "react";
import NavBar from "./NavBar";
import NewExpense from "./NewExpense";
function Home(){
    const imgUrl = "https://media.istockphoto.com/photos/month-revenue-of-young-couple-picture-id1205213679?b=1&k=20&m=1205213679&s=170667a&w=0&h=J2-8f7eyQMhKScAI9woHo7Tpn4dDKx1SYFlqZ8AYEJ4="
    return(
        <div>
            <header  className="home-sect">
            <h1 className="app-name">Spending <span>Tracker</span></h1>
            <NavBar/>
            </header>
            <div className="head-sect">
                <article>
                    <div className="home-txt">
                    <p>Track your expenses.</p>
                    <p>Access the various categories of items and add their related costs.</p>
                    </div>
                    <div className="bg-image">
                        <img src={imgUrl} alt="budget calculation"></img>
                        </div>
                </article>
            </div>
            <h2>Add a new expense.</h2>

            <NewExpense/>
            
        </div>
    )
}

export default Home;