import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditForm( {closeModal, result} ) {

    const navigate = useNavigate();
	const [ groceryItem, setGroceryItem ] = useState(null)

	const handleChange = e => {
    setGroceryItem({ ...groceryItem, [e.target.id]: e.target.value })
    }
    
    //UPDATE
    const handleEdit = e => {
        e.preventDefault();
        axios.patch(`https://cart-start.herokuapp.com/grocery-list/${result._id}`, groceryItem);
        navigate('/grocery-list')
    }

    return (
					<div id='modal-content'>
					<h2>Editing {result.name}</h2>
					<form className='bubble' onSubmit={()=>handleEdit(result._id)}>
						<label htmlFor='name'>Item Name:</label>
					<br></br>
					<input
						required
						onChange={handleChange}
						id='name'
						type='text'
						defaultValue={result.name}
					/>
					<p />
					<label htmlFor='category'>Category:</label>
					<br></br>
					<select
						id='category'
						name='category'
						defaultValue={result.category}
						onChange={handleChange}>
						<option value='other'>🍾other</option>
						<option value='produce'>🍎produce</option>
                        <option value='bakery'>🥐bakery</option>
						<option value='meat-seafood'>🥩meat-seafood</option>
                        <option value='dairy'>🧀dairy</option>
                        <option value='dry-goods'>🥫dry-goods</option>
						<option value='frozen'>🧊frozen</option>
					</select>
					<p />
                <label htmlFor='quantity'>Quantity:</label>
					<br></br>
					<input
						onChange={handleChange}
						id='quantity'
						type='number'
						min='1'
						defaultValue={result.quantity}
					/>
					<p />
                <label htmlFor='location'>Location:</label>
					<br></br>
					<input
						onChange={handleChange}
						id='location'
						type='text'
						defaultValue={result.location}
					/>
						<button className='submit' type='submit'>Submit</button>
						<button className='close' type='button' onClick={() => closeModal(false)}>
							Close
						</button>
					</form>
					</div>
	);
};

export default EditForm;