import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from './Form';
import EditForm from './EditForm';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

function GroceryList() {
    
    //CONSTANTS
    const [results, setResults] = useState([]);
    const { _id } = useParams();
    const navigate = useNavigate();
    const [groceryItem, setGroceryItem] = useState({
        name: '',
        category: '',
        quantity: 0,
        location: '',
    });

    const handleChange = e => {
    setGroceryItem({ ...groceryItem, [e.target.id]: e.target.value})
    }

    // const [name, setName] = useState('');
    // const [quantity, setQuantity] = useState('');
    // const [category, setCategory] = useState('');
    // const [location, setLocation] = useState('');

    //CREATE
    const handleSubmit = e => {
        e.preventDefault();

        //post into the grocery-list api
        axios.post('https://cart-start.herokuapp.com/grocery-list', groceryItem)
        //figure out how to clear form
    }

    //READ ALL
    useEffect(() => {
        axios
        .get(`https://cart-start.herokuapp.com/grocery-list/`)
        .then((res) => setResults(res.data))
    })

    //DELETE
    const handleDelete = (_id) => {
        axios.delete(`https://cart-start.herokuapp.com/grocery-list/${_id}`)
        //unsure how to grab result._id of this delete.. we have to find the index of where this data exists in the array and splice it
        //setResults()
        navigate('/grocery-list');
    }

    return (
        <div>
            <Form groceryItem={groceryItem} handleSubmit={handleSubmit} handleChange={handleChange}/>
            <h1>Category 1</h1>
            {/* make use of .filter for each category*/}
            <ul>
                {results.map((result) => (
                <li key={result._id}>{result._id} {result.name} {result.quantity} {result.location}
                {/* <button type='button' onClick={closeEditForm}>Close</button> */}
                {/* <button onClick={showEditForm}>Edit</button> */}
                <button onClick={()=>handleDelete(result._id)}>Delete</button>
                </li>
            ))}
            </ul>
            <h1>Category 2</h1>
            <h1>Category 3</h1>
            {/* <EditForm groceryItem={groceryItem}/> */}
        </div>
    );
}

export default GroceryList;