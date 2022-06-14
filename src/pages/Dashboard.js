import React, { Component } from 'react';
import Navdashboard from '../components/dashboard/Navdashboard';
import UserConfig from '../components/dashboard/UserConfig';
import '../styles/components/dashboard/Maindashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard'>
                <Navdashboard />
                <UserConfig />
            </div>
        );
    }
}

export default Dashboard;