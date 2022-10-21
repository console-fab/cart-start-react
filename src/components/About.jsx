import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div>
            <h1>Welcome to Cart-Start 🛒</h1>
            <p>This essential Grocery List is a life saver on the busy weeks. <br /> Add, view, edit or remove grocery items to your list which are organized into different categories just like your favorite grocery store!</p>
            <hr /> 
            <p>Lovingly created by Ai, Brandon, Morteza and Trey for your convenience</p>
            <Link to='/grocery-list'>
				<button className='grocery-link'>Start adding groceries!</button>
			</Link>
        </div>
    );
}

export default About;