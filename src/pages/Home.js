import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeFood from '../components/home/HomeFood';
import HomeRegime from '../components/home/HomeRegime';

import '../styles/pages/Home.css';
class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Header />
                <HomeFood />
                <HomeRegime />
                <Footer />
            </div>
        )
    }
}

export default Home;