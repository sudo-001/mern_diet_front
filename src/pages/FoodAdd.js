import React, { Component } from 'react';
import FoodAddForm from '../components/Food/FoodAddForm';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

class FoodAdd extends Component {
    render() {
        return (
            <div>
                <Nav />
                <FoodAddForm />
                <Footer />
            </div>
        );
    }
}

export default FoodAdd;