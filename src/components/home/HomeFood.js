import React, { Component } from 'react';
import '../../styles/components/home/HomeFood.css';
import { NavLink } from 'react-router-dom';
class HomeFood extends Component {
    render() {
        return (
            <div className='food-section'>
                <div className='title'>
                    <h1>Nos services</h1>
                    <p>Clean-Alimentation vous offre ses services concernant les repas afin que vous puissiez découvrir ou revenir en santé tout en vous délectant </p>
                </div>
                <div className='homefood-section1'>
                    <div className='home-card back-color1'></div>
                    <div className='home-card second-back1'></div>
                    <div className='home-card image1'></div>
                    <div className='home-card description1'>
                        <div className="description-text1">
                            <h2>Testez de nouvelles combinaison de repas</h2>
                            <p>Parceque savoir ce qu'on mange eloigne de l'ignorance et ainsi nous rassure sur la qualité du repas.Ainsi vous serez à l'abri de surprise tel que des réactions d'allergie à des produits aux quels vous serez allergiques.</p>
                            <NavLink to={'/food'} className='no-hover'><div className='btn1'>Y aller</div></NavLink>
                        </div>
                    </div>
                </div>
                <div className='homefood-section2'>
                    <div className='home-card back-color2'></div>
                    <div className='home-card second-back2'></div>
                    <div className='home-card image2'></div>
                    <div className='home-card description2'>
                        <div className="description-text2">
                            <h2>Découvrez de quoi sont constitués vos repas</h2>
                            <p>Parceque savoir ce qu'on mange eloigne de l'ignorance et ainsi nous rassure sur la qualité du repas.Ainsi vous serez à l'abri de surprise tel que des réactions d'allergie à des produits aux quels vous serez allergiques.</p>
                            <NavLink to={'/food'} className='no-hover'><div className='btn2'>Y aller</div></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeFood;