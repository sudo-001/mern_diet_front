import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/dashboard/Navdashboard.css';

class Navdashboard extends Component {

    render() {
        var role = false;

        if (localStorage.getItem("userRole") !== "user") {
            role = true;
        }

        return (
            <div className='Navdashboard'>
                <div className='container'>
                    <div><NavLink to="/" className={(nav) => nav.isActive ? "dashboard-active" : ""}><img src="./images/Icons/home.png" alt='regime' width='50px' height='50px' /></NavLink></div>

                    <div><NavLink to="/dashboard" className={(nav) => nav.isActive ? "dashboard-active" : ""}><img src="./images/Icons/soutien.png" alt='account' width='50px' height='50px' /></NavLink></div>
                    <div><NavLink to="/dashboard/food" className={(nav) => nav.isActive ? "dashboard-active" : ""}><img src="./images/Icons/couverts.png" alt='regime' width='50px' height='50px' /></NavLink></div>
                    <div><NavLink to="/dashboard/aliment" className={(nav) => nav.isActive ? "dashboard-active" : ""}><img src="./images/Icons/statistiques.png" alt='regime' width='50px' height='50px' /></NavLink></div>
                    {!role ? <div><NavLink to="/dashboard/aliment" className={(nav) => nav.isActive ? "dashboard-active" : ""}><img src="./images/Icons/user_manage.png" alt='regime' width='50px' height='50px' /></NavLink></div>
                        : ""}
                </div>
            </div>
        );
    }
}

export default Navdashboard;