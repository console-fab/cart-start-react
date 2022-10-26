import axios from 'axios';
import { useState, useEffect } from 'react';
import Form from './Form';
import EditForm from './EditForm';
import { useNavigate } from 'react-router-dom';
import Other from './categories/Other';
import Produce from './categories/Produce';
import Bakery from './categories/Bakery';
import Dairy from './categories/Dairy';
import DryGoods from './categories/DryGoods';
import Frozen from './categories/Frozen';
import MeatSeafood from './categories/MeatSeafood';

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

    // VARIABLES: Saving each category results to a variable
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
                {/* Form to create an item */}
				<Form
					groceryItem={groceryItem}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
                
                {/* Components for each category result */}
                <Other otherResults={otherResults} EditForm={EditForm} closeModal={setEditModal} handleDelete={handleDelete} editModal={editModal} editId={editId} id={id} setEditModal={setEditModal}/>

                <Produce produceResults={produceResults} EditForm={EditForm} closeModal={setEditModal} handleDelete={handleDelete} editModal={editModal} editId={editId} id={id} setEditModal={setEditModal}/>

                <Bakery bakeryResults={bakeryResults} EditForm={EditForm} closeModal={setEditModal} handleDelete={handleDelete} editModal={editModal} editId={editId} id={id} setEditModal={setEditModal}/>

                <MeatSeafood meatResults={meatResults} EditForm={EditForm} closeModal={setEditModal} handleDelete={handleDelete} editModal={editModal} editId={editId} id={id} setEditModal={setEditModal}/>

                <Dairy dairyResults={dairyResults} EditForm={EditForm} closeModal={setEditModal} handleDelete={handleDelete} editModal={editModal} editId={editId} id={id} setEditModal={setEditModal}/>

                <DryGoods dryResults={dryResults} EditForm={EditForm} closeModal={setEditModal} handleDelete={handleDelete} editModal={editModal} editId={editId} id={id} setEditModal={setEditModal}/>

                <Frozen frozenResults={frozenResults} EditForm={EditForm} closeModal={setEditModal} handleDelete={handleDelete} editModal={editModal} editId={editId} id={id} setEditModal={setEditModal}/>

            </div>
		);
}

export default GroceryList;