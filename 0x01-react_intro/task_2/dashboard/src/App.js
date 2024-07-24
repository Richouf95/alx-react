import React from 'react';
import Logo from '../src/175b85183ecedb529e14.jpg';
import { getFullYear } from './utils';
import { getFooterCopy } from './utils';


function App() {
  return (
    <div>
        <div className='App-header'>
            <img src={Logo} alt='Logo'/>
            <h1>School dashboard</h1>
        </div>
        <div className='App-body'>
            <p>Login to access the full dashboard</p>
            <div className='loginInput'>
              <label for="email">Email</label> <br/>
              <input type='email' id='email' name='email'/>
            </div>
            <div className='loginInput'>
              <label for="password">Password</label> <br/>
              <input type='password' id='password' name='password'/>
            </div>
            <div className='LoginBtn'>
              <button>OK</button>
            </div>
        </div>
        <div className='App-footer'>
            <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
        </div>
    </div>
  )
}

export default App