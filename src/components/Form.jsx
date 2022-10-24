import axios from 'axios';
import { useState, useEffect } from 'react';

const Form = ({groceryItem, handleChange, handleSubmit}) => {

    return (
			<div className='form-box'>
				<form onSubmit={handleSubmit}>
					<label for='name'>Item Name:</label>
					<br></br>
					<input
						// required
						onChange={handleChange}
						id='name'
						type='text'
						value={groceryItem.name}
					/>
					<p />
					<label for='category'>Category:</label>
					<br></br>
					{/* <input
						onChange={handleChange}
						id='category'
						type='text'
						value={groceryItem.category}
					/> */}
					<select
						id='category'
						name='category'
						value={groceryItem.category}
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
					<label for='quantity'>Quantity:</label>
					<br></br>
					<input
						onChange={handleChange}
						id='quantity'
						type='number'
						min='1'
						value={groceryItem.quantity}
					/>
					<p />
					<label for='location'>Location:</label>
					<br></br>
					<input
						onChange={handleChange}
						id='location'
						type='text'
						value={groceryItem.location}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
}

export default Form;