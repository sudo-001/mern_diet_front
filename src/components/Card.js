import React, { Component } from 'react';
import '../styles/components/Card.css'
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';

class Card extends Component {
    

    
    render() {
        return (
            <div>
                <motion.div  whileHover={{ scale: 1.1 }}
     initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }} className='food-card' key={this.props.food.id}>
                    <img src={this.props.food.photo} alt="food"></img>
                    <h2>{this.props.food.name}</h2>
                    <p className="description">{this.props.food.description}</p>
                    <NavLink to={"/food/show/"+this.props.food._id} ><div className="food-btn">Voir plus</div></NavLink>
                </motion.div>
            </div>
        );
    }
}

export default Card;