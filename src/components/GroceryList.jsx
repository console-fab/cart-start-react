import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from './Form';
import EditForm from './EditForm';
import { useNavigate } from 'react-router-dom';

function GroceryList() {
    
    //CONSTANTS
    const [results, setResults] = useState([]);
    const navigate = useNavigate();
    const [groceryItem, setGroceryItem] = useState({
        name: '',
        category: 'other',
        quantity: '',
        location: '',
    });
    const [editModal, setEditModal] = useState(false)
    const [id, setId] = useState('')
    
    //SET ID
    const editId = (id) => {
        setEditModal(true)
        setId(id)
    }

    const handleChange = e => {
    setGroceryItem({ ...groceryItem, [e.target.id]: e.target.value})
    }

    //CREATE
    const handleSubmit = e => {
        e.preventDefault();

        //post into the grocery-list api
        axios.post('https://cart-start.herokuapp.com/grocery-list', groceryItem)
        //Clear Form
        setGroceryItem({
        name: '',
        category: 'other',
        quantity: '',
        location: '',
    });
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
        navigate('/grocery-list');
    }

    const checkCategory = (res) => {
        if (res !== null) {
            return true
        } else {
            return false
        }
    }

    let otherResults = results.filter(checkOther)

    function checkOther(item) {
            return item.category === 'other'
    }

    let produceResults = results.filter(checkProduce)

    function checkProduce(item) {
        return item.category === 'produce'
    }

    let bakeryResults = results.filter(checkBakery)

    function checkBakery(item) {
        return item.category === 'bakery'
    }

    let meatResults = results.filter(checkMeat)

    function checkMeat(item) {
        return item.category === 'meat-seafood'
    }

    let dairyResults = results.filter(checkDairy)

    function checkDairy(item) {
        return item.category === 'dairy'
    }

    let dryResults = results.filter(checkDry)

    function checkDry(item) {
        return item.category === 'dry-goods'
    }

    let frozenResults = results.filter(checkFrozen)

    function checkFrozen(item) {
        return item.category === 'frozen'
    }

    return (
			<div className='lists'>
				<Form
					groceryItem={groceryItem}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
                <div className='bubble back list1'>
            <h1 className='other bubble'>Other</h1>
				<ul>
					{otherResults.map((result) => (
						<li key={result._id}>
							{result.name}
							{result.quantity ? ` x${result.quantity}` : ''}
							{result.location
								? `, store: ${result.location}`
								: ''}
							 <button className='edit' id="openModal" onClick={() => editId(result._id)}>EDIT</button>
               {editModal && (id === result._id) && <EditForm closeModal={setEditModal} result={result}/>}
							<button className='delete' onClick={() => handleDelete(result._id)}>DELETE</button>
						</li>
					))}
				</ul>
                </div>
                <div className='bubble back list2'>
				<h1 className='produce bubble'>Produce</h1>
				<ul>
					{produceResults.map((result) => (
						<li key={result._id}>
							{result.name}
							{result.quantity ? ` x${result.quantity}` : ''}
							{result.location
								? `, store: ${result.location}`
								: ''}
							 <button className='edit' id="openModal" onClick={() => editId(result._id)}>EDIT</button>
               {editModal && (id === result._id) && <EditForm closeModal={setEditModal} result={result}/>}
							<button className='delete' onClick={() => handleDelete(result._id)}>DELETE</button>
						</li>
					))}
				</ul>
                </div>
                <div className='bubble back list3'>
            <h1 className='bakery bubble'>Bakery</h1>
				<ul>
					{bakeryResults.map((result) => (
                        <li key={result._id}>
							{result.name}
							{result.quantity ? ` x${result.quantity}` : ''}
							{result.location
								? `, store: ${result.location}`
								: ''}
							 <button className='edit' id="openModal" onClick={() => editId(result._id)}>EDIT</button>
               {editModal && (id === result._id) && <EditForm closeModal={setEditModal} result={result}/>}
							<button className='delete' onClick={() => handleDelete(result._id)}>DELETE</button>
						</li>
					))}
				</ul>
                </div>
                <div className='bubble back list4'>
            <h1 className='meat-seafood bubble'>Meat/Seafood</h1>
				<ul>
					{meatResults.map((result) => (
                        <li key={result._id}>
							{result.name}
							{result.quantity ? ` x${result.quantity}` : ''}
							{result.location ? `, store: ${result.location}` : ''}
							 <button className='edit' id="openModal" onClick={() => editId(result._id)}>EDIT</button>
               {editModal && (id === result._id) && <EditForm closeModal={setEditModal} result={result}/>}
							<button className='delete' onClick={() => handleDelete(result._id)}>DELETE</button>
						</li>
					))}
				</ul>
                </div>
                <div className='bubble back list5'>
				<h1 className='dairy bubble'>Dairy</h1>
				<ul>
					{dairyResults.map((result) => (
						<li key={result._id}>
							{result.name}
							{result.quantity ? ` x${result.quantity}` : ''}
							{result.location
								? `, store: ${result.location}`
								: ''}
							 <button className='edit' id="openModal" onClick={() => editId(result._id)}>EDIT</button>
               {editModal && (id === result._id) && <EditForm closeModal={setEditModal} result={result}/>}
							<button className='delete' onClick={() => handleDelete(result._id)}>DELETE</button>
						</li>
					))}
				</ul>
                </div>
                <div className='bubble back list6'>
				<h1 className='dry-goods bubble'>Dry Goods</h1>
				<ul>
					{dryResults.map((result) => (
						<li key={result._id}>
							{result.name}
							{result.quantity ? ` x${result.quantity}` : ''}
							{result.location ? `, store: ${result.location}` : ''}
							 <button className='edit' id="openModal" onClick={() => editId(result._id)}>EDIT</button>
               {editModal && (id === result._id) && <EditForm closeModal={setEditModal} result={result}/>}
							<button className='delete' onClick={() => handleDelete(result._id)}>DELETE</button>
						</li>
					))}
				</ul>
                </div>
                <div className='bubble back list7'>
				<h1 className='frozen bubble'>Frozen</h1>
				<ul>
					{frozenResults.map((result) => (
						<li key={result._id}>
							{result.name}
							{result.quantity ? ` x${result.quantity}` : ''}
							{result.location
								? `, store: ${result.location}`
								: ''}
							 <button className='edit' id="openModal" onClick={() => editId(result._id)}>EDIT</button>
                            {editModal && (id === result._id) && <EditForm closeModal={setEditModal} result={result}/>}
							<button className='delete' onClick={() => handleDelete(result._id)}>DELETE</button>
						</li>
					))}
				</ul>
                </div>
			</div>
		);
}

export default GroceryList;