import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Routes, Route } from "react-router-dom";
import Categories from './components/Categories';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="categories/:id" element={<Items/>}/>
          <Route path="expenses" element={<Expense/>}/>
          <Route path="customers" element={<Customers/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
