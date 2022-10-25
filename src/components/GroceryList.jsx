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
        category: '',
        quantity: '',
        location: '',
    });

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
        category: '',
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
        //unsure how to grab result._id of this delete.. we have to find the index of where this data exists in the array and splice it
        //setResults()
        navigate('/grocery-list');
    }

    let otherResults = results.filter(checkOther)

    function checkOther(item) {
            return item.category == 'other'
    }

    let produceResults = results.filter(checkProduce)

    function checkProduce(item) {
        return item.category == 'produce'
    }

    let bakeryResults = results.filter(checkBakery)

    function checkBakery(item) {
        return item.category == 'bakery'
    }

    let meatResults = results.filter(checkMeat)

    function checkMeat(item) {
        return item.category == 'meat-seafood'
    }

    let dairyResults = results.filter(checkDairy)

    function checkDairy(item) {
        return item.category == 'dairy'
    }

    let dryResults = results.filter(checkDry)

    function checkDry(item) {
        return item.category == 'dry-goods'
    }

    let frozenResults = results.filter(checkFrozen)

    function checkFrozen(item) {
        return item.category == 'frozen'
    }

    return (
			<div>
				<Form
					groceryItem={groceryItem}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
            <h1 className='other'>Other</h1>
				<ul>
					{otherResults.map((otherResult) => (
						<li className='bubble' key={otherResult._id}>
							{otherResult.name}
							{otherResult.quantity ? ` x${otherResult.quantity}` : ''}
							{otherResult.location
								? `, location: ${otherResult.location}`
								: ''}
							{/* <button onClick={showEditForm}>Edit</button>
							clicking on edit button opens up EditForm modal */}
							<button onClick={() => handleDelete(otherResult._id)}>X</button>
						</li>
					))}
				</ul>
				<h1 className='produce'>Produce</h1>
				<ul>
					{produceResults.map((produceResult) => (
						<li className='bubble' key={produceResult._id}>
							{produceResult.name}
							{produceResult.quantity ? ` x${produceResult.quantity}` : ''}
							{produceResult.location
								? `, location: ${produceResult.location}`
								: ''}
							{/* <button onClick={showEditForm}>Edit</button>
							clicking on edit button opens up EditForm modal */}
							<button onClick={() => handleDelete(produceResult._id)}>X</button>
						</li>
					))}
				</ul>
            <h1 className='bakery'>Bakery</h1>
				<ul>
					{bakeryResults.map((bakeryResult) => (
                        <li className='bubble' key={bakeryResult._id}>
							{bakeryResult.name}
							{bakeryResult.quantity ? ` x${bakeryResult.quantity}` : ''}
							{bakeryResult.location
								? `, location: ${bakeryResult.location}`
								: ''}
							{/* <button onClick={showEditForm}>Edit</button>
							clicking on edit button opens up EditForm modal */}
							<button onClick={() => handleDelete(bakeryResult._id)}>X</button>
						</li>
					))}
				</ul>
            <h1 className='meat-seafood'>Meat/Seafood</h1>
				<ul>
					{meatResults.map((meatResult) => (
                        <li className='bubble' key={meatResult._id}>
							{meatResult.name}
							{meatResult.quantity ? ` x${meatResult.quantity}` : ''}
							{meatResult.location ? `, location: ${meatResult.location}` : ''}
							{/* <button onClick={showEditForm}>Edit</button>
							clicking on edit button opens up EditForm modal */}
							<button onClick={() => handleDelete(meatResult._id)}>X</button>
						</li>
					))}
				</ul>
				<h1 className='dairy'>Dairy</h1>
				<ul>
					{dairyResults.map((dairyResult) => (
						<li className='bubble' key={dairyResult._id}>
							{dairyResult.name}
							{dairyResult.quantity ? ` x${dairyResult.quantity}` : ''}
							{dairyResult.location
								? `, location: ${dairyResult.location}`
								: ''}
							{/* <button onClick={showEditForm}>Edit</button>
							clicking on edit button opens up EditForm modal */}
							<button onClick={() => handleDelete(dairyResult._id)}>X</button>
						</li>
					))}
				</ul>
				<h1 className='dry-goods'>Dry Goods</h1>
				<ul>
					{dryResults.map((dryResult) => (
						<li className='bubble' key={dryResult._id}>
							{dryResult.name}
							{dryResult.quantity ? ` x${dryResult.quantity}` : ''}
							{dryResult.location ? `, location: ${dryResult.location}` : ''}
							{/* <button onClick={showEditForm}>Edit</button>
							clicking on edit button opens up EditForm modal */}
							<button onClick={() => handleDelete(dryResult._id)}>X</button>
						</li>
					))}
				</ul>
				<h1 className='frozen'>Frozen</h1>
				<ul>
					{frozenResults.map((frozenResult) => (
						<li className='bubble' key={frozenResult._id}>
							{frozenResult.name}
							{frozenResult.quantity ? ` x${frozenResult.quantity}` : ''}
							{frozenResult.location
								? `, location: ${frozenResult.location}`
								: ''}
							{/* <button onClick={showEditForm}>Edit</button>
							clicking on edit button opens up EditForm modal */}
							<button onClick={() => handleDelete(frozenResult._id)}>X</button>
						</li>
					))}
				</ul>
			</div>
		);
}

export default GroceryList;