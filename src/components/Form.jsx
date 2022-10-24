function Form({ handleSubmit, handleChange, groceryItem }) {

    return (
        <div className='form-box'>
            <form onSubmit={handleSubmit}>
                <label>Item Name:</label>
                <br></br>
                <input
                    // required
                    onChange={handleChange}
                    id='name'
                    type='text'
                    value={groceryItem.name}
                />
                <p/>
                <label>Category:</label>
                 <br></br>
                <input
                    onChange={handleChange}
                    id='category'
                    type='text'
                    value={groceryItem.category}
                />
                <p/>
                <label>Quantity:</label>
                 <br></br>
                <input
                    onChange={handleChange}
                    id='quantity'
                    type='number'
                    value={groceryItem.quantity}
                />
                <p/>
                <label>Location:</label>
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