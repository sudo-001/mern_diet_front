import React, { Component } from 'react';
import Nav from './Nav';
import Banner from './Banner';
class Header extends Component {
    render() {
        return (
            < div className="Header" >
                <Nav />
                <Banner />
            </div >
        )
    }
}
export default Header;