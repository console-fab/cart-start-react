import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About'
import GroceryList from './components/GroceryList'

function App() {
  const [groceryItem, setGroceryItem] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<About />} />
        <Route
        path='/grocery-list' 
        element={<GroceryList 
        groceryItem={groceryItem} 
        setGroceryItem={setGroceryItem} />}
        />
      </Routes>
    </div>
  );
}

export default App;
