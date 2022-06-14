import React, { Component } from 'react';
import '../../styles/components/home/HomeRegime.css';
import { NavLink } from 'react-router-dom';

class HomeRegime extends Component {
    render() {
        return (
            <div className='HomeRegime'>
                <div className='left-div'></div>
                <div className='right-div'>
                    <div>
                        <h2>
                            <img src="./images/Home/apple.png" alt="apple" />
                            Des régimes alimentaires pour tous
                        </h2>
                        <p>
                            Clean-Alimentation vous offre différents type de régimes basée chacun sur une alimentation sélectionée avec soin par des experts de la santé.Parceque votre santé nous tiends à coeur dans ces régimes vous aurez un programme entièrement basé sur votre alimentation ainsi vous n'aurez à faire aucun effort physique si ce n'est celui de vous donner plaisir en laissant opéré la magie d'un repas sain.</p>
                    </div>
                    <div className='right-div_cards'>
                        <div className='card'>
                            <h2>Regime minceur</h2>
                            <p>Le régime minceur est un type de régime approprié pour des personnes obèse ou des personnes désirantes juste de perdre un peu du poids .</p>
                            <NavLink to={'/aliment'}><div className='button'>Consulter nos régimes </div></NavLink>
                        </div>
                        <div className='card'>
                            <h2>Regime minceur</h2>
                            <p>Le régime minceur est un type de régime approprié pour des personnes obèse ou des personnes désirantes juste de perdre un peu du poids .</p>
                            <NavLink to={'/aliment'} ><div className='button'>Consulter nos régimes </div></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeRegime;