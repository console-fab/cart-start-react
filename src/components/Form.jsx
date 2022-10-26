const Form = ({groceryItem, handleChange, handleSubmit}) => {

    return (
			<div className="list0">
				<form className='bubble back' onSubmit={handleSubmit}>
                <label htmlFor='name'>Item Name:</label>
					<br></br>
					<input
						required
						onChange={handleChange}
						id='name'
						type='text'
						value={groceryItem.name}
						autoFocus
					/>
					<p />
					<label htmlFor='category'>Category:</label>
					<br></br>
					<select
						id='category'
						name='category'
						value={groceryItem.category}
						onChange={handleChange}
						>
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
						value={groceryItem.quantity}
					/>
					<p />
					<label htmlFor='location'>Location:</label>
					<br></br>
					<input
						onChange={handleChange}
						id='location'
						type='text'
						value={groceryItem.location}
					/>
					<p/>
					<button className="submit" type='submit'>Submit</button>
				</form>
			</div>
		);
}

export default Form;