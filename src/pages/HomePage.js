import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import Trending from '../components/Trending/Trending';

function HomePage(props) {
    return (
        <div className='homepage'>
            <Navbar/>
            <Search/>
            <Trending/>
        </div>
    );
}

export default HomePage;