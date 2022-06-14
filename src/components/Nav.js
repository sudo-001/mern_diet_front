import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Nav.css';

class Nav extends Component {
    render() {

        const handleLogout = () => {
            localStorage.removeItem("token");
            window.location.reload();
        }

        const usertoken = localStorage.getItem('token');



        return (
            <div className='Nav flex-row-align'>
                <NavLink to={'/'} className='no-hover'><div>LOGO</div></NavLink>
                <div className='links '>
                    <ul className="flex-row-align">
                        <NavLink to={'/'} className={(nav) => nav.isActive ? "link-active" : ""}><li>Acceuil</li></NavLink>
                        <NavLink to={'/food'} className={(nav) => nav.isActive ? "link-active" : ""} ><li>Repas</li></NavLink>
                        <NavLink to={'/aliment'} className={(nav) => nav.isActive ? "link-active" : ""}><li>Aliment</li></NavLink>

                    </ul>
                </div>
                <div className='auth-links'>
                    {usertoken ?
                        <ul className="flex-row-align">
                            <NavLink to={"/dashboard"} className={(nav) => nav.isActive ? "link-active" : ""}><li>Mon compte</li></NavLink>
                            <NavLink to={"/"} onClick={handleLogout} className={(nav) => nav.isActive ? "link-active" : ""}><li>Se déconnecter</li></NavLink>
                        </ul>
                        :
                        <ul className="flex-row-align">
                            <NavLink to={"/login"} className={(nav) => nav.isActive ? "link-active" : ""}><li>Se connecter</li></NavLink>
                            <NavLink to={"/signup"} className={(nav) => nav.isActive ? "link-active" : ""}><li>S'inscrire</li></NavLink>
                        </ul>
                    }

                </div>

            </div >
        );
    }
}
export default Nav;