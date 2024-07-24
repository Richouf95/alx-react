import React from 'react';
import Logo from '../assets/175b85183ecedb529e14.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function App() {
	return (
		<div>
			<div className='App-header'>
				<img src={Logo} alt='Logo' />
				<h1>School dashboard</h1>
			</div>
			<div className='App-body'>
				<p>Login to access the full dashboard</p>
				<label htmlFor='email'>Email:</label>
				<input type='email' name='email' id='email' />
				<label htmlFor='password'>Password: </label>
				<input type='password' name='password' id='password' />
				<button>OK</button>
			</div>
			<div className='App-footer'>
				<p>
					Copyright {getFullYear()} - {getFooterCopy(true)}
				</p>
			</div>
		</div>
	);
}

export default App;