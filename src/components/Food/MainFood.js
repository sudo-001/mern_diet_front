import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Card from '../Card';
import '../../styles/components/Food/Food.css';


class MainFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: [],
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleFilter(e) {
        e.preventDefault();
        
        const search_value = document.querySelector("input[type=search]");

        const buttons = document.querySelectorAll("button");
        for (let i in buttons) {
            if(buttons[i].className === "active") {
                buttons[i].classList = '';
            }
        }

        e.target.classList.toggle('active');
        this.setState({ filter: e.target.value });

        if (search_value.value === "" && e.target.value !== "all") {
            console.log("cas 1")
            axios.get("http://localhost:5000/api/food/filter/" + e.target.value)
                .then((food_list) => {
                    this.setState({
                        foods: food_list.data
                    })
                    console.log("cas 1")
                })
                .catch((error) => {
                    console.log(error)
                })
        } else if ((e.target.value === "all" && search_value.value ==="") || (e.target.value === "all" && search_value.value !=="")) {
            console.log("'cas3")
            axios.get("http://localhost:5000/api/food/find/" + search_value.value)
                .then((food_list) => {
                    this.setState({
                        foods: food_list.data
                    })
                    console.log(this.state.foods)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            console.log("pire des cas")
            console.log(search_value.value)
            axios.get("http://localhost:5000/api/food/name-filter/" + search_value.value + "&" + e.target.value)
                .then((food_list) => {
                    this.setState({
                        foods: food_list.data
                    })
                    console.log(this.state.foods)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    // ✅
    handleSearch(e) {
        axios.get("http://localhost:5000/api/food/find/" + e.target.value)
            .then((food_list) => {
                this.setState({
                    foods: food_list.data
                })
                console.log(this.state.foods)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // const [foods, setFoods] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost/api/food")
    //         .then((food_list) => {
    //             setFoods({ food_list})
    //         })
    //         .catch((error)=> console.log( error ))
    // }, [])

    componentDidMount() {
        axios.get(`http://localhost:5000/api/food`)
            .then((food_list) => {
                this.setState({
                    foods: food_list.data
                })
                console.log(this.state.foods)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="FoodMenu">
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
                    {this.state.foods.slice(0, 12).map((food) => (<Card key={food._id} food={food} />))}
                </div>
            </div>
        );
    }

}

export default MainFood;