import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import GroceryList from './components/GroceryList';

function App() {
	return (
		<div className='App'>
			<div className='wave'></div>
			<div className='wave wave2'></div>
			<div className='wave wave3'></div>
			<div>
				<Routes>
					<Route path='/' element={<About />} />
					<Route path='/grocery-list' element={<GroceryList />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
