import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import Card from '../components/Card';
import { axios } from 'axios';

class Aliment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            aliments: []
        };

    }

    componentDidMount() {
        
    }
    
    

    render() {
        return (

            <div className="FoodMenu">
                <Nav />
                <div className="search-form">
                    <form>
                        <div>
                            <input type="search" placeholder="Entrez le Repas à chercher" name='search_value' onChange={this.handleSearch} />
                            <input type="submit" value="Rechercher" />
                        </div>
                    </form>

                    <div>
                        <NavLink to="/food/add"><div className={(nav) => nav.isActive ? "link-active" : ""} >Ajouter un repas</div></NavLink>
                    </div>

                </div>

                <div className="filter-container">

                    <button value="all" onClick={this.handleFilter}>Tout</button>
                    <button value="Complet" onClick={this.handleFilter}>Repas complet</button>
                    <button value="Complement" onClick={this.handleFilter}>Complement</button>
                    <button value="Sauce" onClick={this.handleFilter}>Sauce</button>

                </div>

                <div className="result">
                    {this.state.aliments.slice(0, 12).map((food) => (<Card key={food._id} food={food} />))}
                </div>

                <Footer />

            </div>
        );
    }
}

export default Aliment;