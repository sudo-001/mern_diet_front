import React,{ Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MainFood from '../components/Food/MainFood';

class Food extends Component {
    render() {
        return(
            <div className='Food'>
                <Nav />
                <MainFood />
                <Footer />
            </div>
        )
    }
}

export default Food;