import React, { Component } from 'react';
import SignupForm from '../components/auth/SignupForm';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

class Signup extends Component {
    render() {
        return (
            <div className='signup'>
                <Nav />
                <SignupForm />
                <Footer />
            </div>
        );
    }
}

export default Signup;