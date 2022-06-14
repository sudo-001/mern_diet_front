import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/components/Food/Show.css'

class Show extends Component {
    constructor(props) {
        super(props)
        this.state = { food: {} }
    }

    componentDidMount() {
        const food_id = window.location.pathname.split("/")[3]

        axios.get("http://localhost:5000/api/food/show/" + food_id)
            .then((foodFinded) => {
                console.log(foodFinded.data)

                this.setState({
                    food: foodFinded.data
                })
                
                
            })
            .catch((error) => {
                console.log(error)
            })
            
            
            

        // Requête vers L'API pour savoir les dangers 
        // Requête vers l'API pour savoir les bienfaits
        // Requête vers l'API pour savoir
    }

    render() {
        return (
            <div className="Show">
                <div className="Show-left">
                    <div>
                        <img src={this.state.food.photo} alt="food" />
                    </div>


                </div>
                <div className="Show-right">
                    <div className="food-decsription">
                        <div>
                            <h3><u>Nom:</u> <span> {this.state.food.name} </span> </h3>
                        </div>
                        <div>
                            <h3><u>Type :</u> <span> {this.state.food.type} </span></h3>
                        </div>
                        <div>
                            <h3><u>valeur nutritionnelle :</u> <span> {this.state.food.valeur_nutritionnelle} Kcal </span></h3>
                        </div>

                        <div className='description'>
                            <h3><u>Description:</u></h3>
                            <p>{this.state.food.description}</p>
                        </div>

                        <div className='ingredients'>
                            <h3><u>Ingrédients:</u></h3>
                            <p>
                                <ul>
                                    { this.state.food.ingredients }
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;