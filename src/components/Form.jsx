const Form = ({groceryItem, handleChange, handleSubmit}) => {

    return (
			<div className='list0'>
				<form className='bubble back' onSubmit={handleSubmit}>
					{/* name of Item */}
					<label htmlFor='name'>Item Name:</label>
					<br></br>
					<input
						required
						// When the user types on <input> element, the onChange event handler will create an event object and pass it to the handleChange() function. Name section is required.
						onChange={handleChange}
						id='name'
						type='text'
						value={groceryItem.name}
						autoFocus
					/>
					<p />

					{/* category of grocery items */}
					<label htmlFor='category'>Category:</label>
					<br></br>
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

					{/* quantity of Item */}
					<label htmlFor='quantity'>Quantity:</label>
					<br></br>
					<input
						onChange={handleChange}
						id='quantity'
						type='number'
						min='1'
						value={groceryItem.quantity}
					/>
					<p />

					{/* location of store */}
					<label htmlFor='location'>Location:</label>
					<br></br>
					<input
						onChange={handleChange}
						id='location'
						type='text'
						value={groceryItem.location}
					/>
					<p/>
					<button className='submit' type='submit'>Submit</button>
				</form>
			</div>
		);
}

export default Form;