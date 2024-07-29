import React from 'react'
import Logo from '../assets/175b85183ecedb529e14.jpg';
import './Header.css'

function Header() {
    return (
        <div className='App-header'>
            <img src={Logo} alt='Logo' />
            <h1>School dashboard</h1>
        </div>
    )
}

export default Header