import React from 'react';
import Logo from '../src/175b85183ecedb529e14.jpg';



function App() {
  return (
    <div>
        <div className='App-header'>
            <img src={Logo} alt='Logo'/>
            <h1>School dashboard</h1>
        </div>
        <div className='App-body'>
            <p>Login to access the full dashboard</p>
        </div>
        <div className='App-footer'>
            <p>Copyright 2020 - holberton School</p>
        </div>
    </div>
  )
}

export default App