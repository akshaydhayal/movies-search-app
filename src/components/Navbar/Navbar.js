import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
        <div className='navbar'>
            <p>Movetica</p>
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