import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Categories from './components/Categories';
import Home from './components/Home';
import Customers from './components/Customers';
import Expenses from './components/Expenses';
import Items from "./components/Items";

function App() {
  return (
    <div className="App">
    <main>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="categories" element={<Categories/>}/>
  <Route path="categories/:id" element={<Items/>}/>
  <Route path="expenses" element={<Expenses/>}/>
  <Route path="customers" element={<Customers/>}/>
  </Routes>
</BrowserRouter>
</main>
    </div>
  );
}

export default App;
