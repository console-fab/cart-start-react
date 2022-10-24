import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditForm() {

    const { _id } = useParams();
    const [groceryItem, setGroceryItem] = useState(null)
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();


    useEffect(() => {
        axios
        .get(`https://cart-start.herokuapp.com/grocery-list/${_id}`)
        //figure out a way to pull id
        .then((res) => setGroceryItem(res.data))
    }, [_id]);
    //need to change id

	const handleChange = (event) => {
		setGroceryItem({ ...groceryItem, [event.target.id]: event.target.value });
	};

	const confirmEdit = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};
    
    //UPDATE (handleEdit is what the edit button should do when clicked)
    const handleEdit = e => {
        e.preventDefault();
        axios.patch(`https://cart-start.herokuapp.com/grocery-list/${_id}`, groceryItem);
        navigate('/grocery-list')
    }

    return (
        <section>
			{modal ? (
				<div className='modal'>
					<h2>Editing {groceryItem.name}</h2>
					<form onSubmit={handleEdit}>
						<label>Name</label>
						    <input
                                onChange={handleChange}
                                id='name'
                                value={groceryItem.flavor}
                                />

						<label>Category</label>
						    <input
							    onChange={handleChange}
							    id='category'
							    value={groceryItem.category}
						        />

						<label>Quantity</label>
						    <input
							    onChange={handleChange}
							    id='quantity'
							    value={groceryItem.quantity}
						    />

                            <input
							    onChange={handleChange}
							    id='location'
							    value={groceryItem.location}
						    />
						<button type='submit'>Submit</button>
						<button type='button' onClick={closeModal}>
							Close
						</button>
					</form>
				</div>
            ) : (
				<>
					<h2>{groceryItem.name}</h2>
					<h2>{groceryItem.category}</h2>
					<h2>{groceryItem.quantity}</h2>
					<h2>{groceryItem.location}</h2>
					<button onClick={confirmEdit}>Confirm</button>
				</>
			)}
		</section>
	);
};

export default EditForm;