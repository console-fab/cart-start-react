import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from './Form';
import { Axios } from 'axios';

function GroceryList() {
    
    const [results, setResults] = useState([]);
    const [groceryItem, setGroceryItem] = useState({
        name: '',
        category: '',
        quantity: 0,
        location: '',
    });

    // const [name, setName] = useState('');
    // const [quantity, setQuantity] = useState('');
    // const [category, setCategory] = useState('');
    // const [location, setLocation] = useState('');
    

    const handleChange = (e) => {
        setGroceryItem({ ...groceryItem, [e.target.id]: e.target.value})
    }


    //CREATE
    const handleSubmit = (e) => {
        e.preventDefault();

        //post into the grocery-list api
        axios.post('https://cart-start.herokuapp.com/grocery-list', groceryItem)
        //figure out how to clear form
    }

    //READ
    useEffect(() => {
        axios
        .get('https://cart-start.herokuapp.com/grocery-list')
        .then((res) => setResults(res.data))}, []);    

    //UPDATE


    //DELETE

    return (
        <div>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} groceryItem={groceryItem}
            />
            <h1>Category 1</h1>
            {/* make use of .filter */}
            <ul>
                {results.map((result) => (
                <li key={result._id}>{result.name}</li>
            ))}
            </ul>
            <h1>Category 2</h1>
            <h1>Category 3</h1>
        </div>
    );
}

export default GroceryList;