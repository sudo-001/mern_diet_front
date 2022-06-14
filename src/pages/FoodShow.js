import React, { Component } from 'react';
import Show from '../components/Food/Show';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

class FoodShow extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Show />
                <Footer />
            </div>
        );
    }
}

export default FoodShow;