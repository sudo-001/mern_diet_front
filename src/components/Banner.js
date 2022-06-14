import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/components/Banner.css';
import { NavLink } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <Carousel className='Banner' autoPlay={true} infiniteLoop={true} showArrows={true} showStatus={false} showThumbs={false} useKeyboardArrows={true}>
                <div className='Banner-container'>
                    <div className="slide-container">
                        <div className='text'>
                            <h1>Repas riche en vitamine pour des os encore plus solides</h1>
                            <p>Riche en vitamines du groupe B, à l'origine du métabolisme des lipides, glucides et protéines, le poulet agit sur les systèmes nerveux et contribue au bon fonctionnement général de l'organisme. En outre, il permet de conserver une peau saine et en bonne santé.</p>
                            <NavLink to={'/food'}><div className='button'>Visiter les repas</div></NavLink>
                        </div>
                        <div className='img'>
                            <img src='./images/Banner/Banner1.png' alt="image-food" />

                            <div className='cercle'></div>
                            <div className='cercle'></div>
                        </div>
                    </div>
                </div>

                <div className='Banner-container'>
                    <div className="slide-container">
                        <div className='text'>
                            <h1>Laisser parler votre imagination et essayer de nouveaux repas </h1>
                            <p>Riche en vitamines du groupe B, à l'origine du métabolisme des lipides, glucides et protéines, le poulet agit sur les systèmes nerveux et contribue au bon fonctionnement général de l'organisme. En outre, il permet de conserver une peau saine et en bonne santé.</p>
                            <NavLink to={'/essais'}><div className='button'>essaiyer un repas</div></NavLink>
                        </div>
                        <div className='img'>
                            <img src='./images/Banner/Banner3.png' alt="image-food" />

                            <div className='cercle'></div>
                            <div className='cercle'></div>
                        </div>
                    </div>
                </div>
                <div className='Banner-container'>
                    <div className="slide-container">
                        <div className='text'>
                            <h1>Régimes de minceur et autre pour vous remettre en santé</h1>
                            <p>Riche en vitamines du groupe B, à l'origine du métabolisme des lipides, glucides et protéines, le poulet agit sur les systèmes nerveux et contribue au bon fonctionnement général de l'organisme. En outre, il permet de conserver une peau saine et en bonne santé.</p>
                            {/* <NavLink to={'/regime'}><div className='button'>Visiter les regimes</div></NavLink> */}
                            <NavLink to={'/aliment'} ><div className='button'>Visiter les aliments</div></NavLink>
                        </div>
                        <div className='img'>
                            <img src='./images/Banner/Banner7.png' alt="image-food" />

                            <div className='cercle'></div>
                            <div className='cercle'></div>
                        </div>
                    </div>
                </div>
            </Carousel>
        );
    }
};

// const Banner = () => {
//     return (
//         <div className='Banner'>
//             <div className='Banner-container'>
//                 <div className="slide-container">
//                     <div className='text'>
//                         <h1>Repas riche en vitamine pour des os encore plus solides</h1>
//                         <p>Riche en vitamines du groupe B, à l'origine du métabolisme des lipides, glucides et protéines, le poulet agit sur les systèmes nerveux et contribue au bon fonctionnement général de l'organisme. En outre, il permet de conserver une peau saine et en bonne santé.</p>
//                         <NavLink to={'/food'}><div className='button'>Visiter les repas</div></NavLink>
//                     </div>
//                     <div className='img'>
//                         <img src='./images/Banner/Banner1.png' alt="image-food" />

//                         <div className='cercle'></div>
//                         <div className='cercle'></div>
//                     </div>
//                 </div>
//             </div>
//             <div className='slide-control'>
//                 <div></div>
//                 <div></div>
//                 <div></div>
//             </div>
//         </div>
//     );
// };

export default Banner;