import React, { Component } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import LoginForm from '../components/auth/LoginForm';

class Login extends Component {
    render() {
        return (
            <div className='Login'>
                <Nav />
                <LoginForm />
                <Footer />
            </div>
        );
    }
}

export default Login;