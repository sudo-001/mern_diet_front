import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Nav.css';

const Nav = ({ height }) => {
    return (
        <div className='Nav flex-row-align'>
            <div>LOGO</div>
            <div className='links '>
                <ul className="flex-row-align">
                    <NavLink to={"/"} className={(nav) => nav.isActive ? "link-active" : ""}><li>Acceuil</li></NavLink>
                    <navLink to={"/regime"} className={(nav) => nav.isActive ? "link-active" : ""}><li>Regime</li></navLink>
                </ul>
            </div>
            <div className='auth-links'>
                <ul className="flex-row-align">
                    <navLink to={"/login"} className={(nav) => nav.isActive ? "link-active" : ""}><li>Se connecter</li></navLink>
                    <navLink to={"/signup"} className={(nav) => nav.isActive ? "link-active" : ""}><li>S'inscrire</li></navLink>
                </ul>
            </div>

        </div>
    );
};

export default Nav;