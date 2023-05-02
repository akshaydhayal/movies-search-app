import React from 'react';
import './Navbar.css';
import { Route, Router, Switch } from 'react-router-dom';
function Navbar(props) {
    return (
        <div className='navbar'>
            {/* <p>Movetica</p> */}
            <img className='nav-logo' src="/assets/logo.png"/>
            <div className='nav-links'>
                <p>Recent</p>
                <p>Coming soon</p>
                <p>For you</p>
                <p>News</p>
            </div>
            <p>Login</p>

        </div>
    );
}

export default Navbar;