import React from 'react';
import Banner from './Banner';
import Nav from './Nav';

const Header = () => {
    return (
        <div className="Header">
            <Nav />
            <Banner />
        </div>
    );
};

export default Header;