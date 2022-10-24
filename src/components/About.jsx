import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div>
            <h1 className='welcome'>Welcome to <br /> Cart-Start 🛒</h1>
            <span className='center'>
            <p className='about bubble'>This essential Grocery List is a life saver on the busy weeks. <br /> Add, view, edit or remove grocery items to your list. We'll do the organizing for you.</p>
            <hr /> 
            <p className='creators'>Lovingly created by Ai, Brandon, Morteza and Trey for your convenience</p>
            <Link to='/grocery-list'>
				<button className='grocery-link'>Start Adding Groceries!</button>
			</Link>
            </span>
        </div>
    );
}

export default About;