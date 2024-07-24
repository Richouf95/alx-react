import React from 'react';
import Logo from '../src/175b85183ecedb529e14.jpg';
import { getFullYear } from './utils';
import { getFooterCopy } from './utils';


function App() {
  return (
    <div className='App'>
        <div className='App-header'>
            <img src={Logo} alt='Logo'/>
            <h1>School dashboard</h1>
        </div>
        <div className='App-body'>
            <p>Login to access the full dashboard</p>
              <label htmlFor="email">Email</label>
              <input type='email' id='email' name='email'/>
              <label htmlFor="password">Password</label>
              <input type='password' id='password' name='password'/>
              <button>OK</button>
        </div>
        <div className='App-footer'>
            <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
        </div>
    </div>
  )
}

export default App