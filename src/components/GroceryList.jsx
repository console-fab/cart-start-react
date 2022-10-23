import { useState } from 'react';
import Form from './Form';

function GroceryList() {
  
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
        setGroceryItem({ ...groceryItem, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //update into the grocery-list api
        fetch('https://cart-start.herokuapp.com/grocery-list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(groceryItem),
        })
        .then((res) => res.json())
        .then((data) => {
            setGroceryItem(data);
            //clearing form should go here, not sure how to implement
        })
    }

    return (
        <div>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} groceryItem={groceryItem}
            />
            <h1>Category 1</h1>
            {/* make use of .filter */}
            <h1>Category 2</h1>
            <h1>Category 3</h1>
        </div>
    );
}

export default GroceryList;