import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../../styles/components/Food/FoodAddForm.css';

function FoodAddForm() {
    const [newFood, setNewFood] = useState({
        photo: '',
        name: '',
        type: '',
        description: '',
        valeur_nutritionnelle: 0,
        ingredients: '',
        user_id: localStorage.getItem("userId"),
        file: {}
    });


    const handleChange = (e) => {
        setNewFood({ ...newFood, [e.target.name]: e.target.value });
    }

    const handlePhoto = (e) => {
        setNewFood({ ...newFood, photo: e.target.files[0].name, file: e.target.files[0] });
        // console.log(e.target.files[0])
        console.log(e.target.files[0].name)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newFood.photo);
        formData.append('name', newFood.name)
        formData.append('type', newFood.type)
        formData.append('description', newFood.description)
        formData.append('ingredients', newFood.ingredients)
        formData.append('valeur_nutritionnelle', newFood.valeur_nutritionnelle)
        formData.append('user_id', newFood.user_id)

        console.log(newFood)

        axios.post('http://localhost:5000/api/food/add', formData)
            .then((res) => {
                console.log(res);
                alert("Repas ajouté")
                window.location.reload();

            })
            .catch(err => {
                console.log("erreur")
                // console.log(err);
            })
    }
    return (
        <div className="FoodAddForm">

            <div className="form_container">
                <form onSubmit={handleSubmit} encType='multipart/formData' >
                    <h2>Ajouter un repas</h2>
                    <div className="confirmation"></div>


                    <label for="photo">Photo</label>
                    <input
                        type="file"
                        accept=".jpg, .jpg, .jpeg"
                        name="photo"
                        onChange={handlePhoto}
                        id="photo"
                    /><br />

                    <label for="type">Type:</label>
                    <input
                        type="text"
                        name="type"
                        placeholder='Exple: complet, sauce..'
                        value={newFood.type}
                        onChange={handleChange}
                        id="type"
                    /><br />

                    <label for="name">Nom du repas: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder='nom'
                        value={newFood.nom}
                        onChange={handleChange}
                    /><br />

                    <label for="description">Description :</label>
                    <textarea
                        name="description"
                        placeholder='description'
                        value={newFood.description}
                        onChange={handleChange}
                        rows="15"
                        cols="20"
                        id="description"
                    ></textarea><br />


                    <label for="ingredient">Ingrédient :</label>
                    <textarea
                        name="ingredients"
                        placeholder='ingredients'
                        value={newFood.ingredients}
                        onChange={handleChange}
                        rows="15"
                        cols="20"
                        id="ingredients"
                    ></textarea>

                    <div className="bg">

                    </div>

                    <input type="submit" />

                </form>
            </div>
        </div>
    )
}

// class FoodAddForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             newfood: {
//                 name: "",
//                 type: "",
//                 description: "",
//                 valeur_nutritionnelle: "",
//                 img_url: "",
//                 user_id: ""
//             }
//         };

//         // On permet un appel de ces fonctions selon les principes de l'
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange = ({ currentTarget: input }) => {
//         var selected = document.querySelector("select").value;

//         setNewfood({ 
//             ...newfood, 
//             [input.name]: input.value 
//         });

//         newfood.type = selected;
//         console.log(newfood)
//     }


//     handlePhoto = (e) => {
//         handleChange();

//         newfood.img_url= e.target.files[0];
//         console.log(newfood);
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();

//         axios.post("http://localhost:5000/api/food/", newfood )
//             .then((res) => console.log(res))
//             .catch((error) => console.log(error))
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
//                     <input
//                         type="file"
//                         accept=".png, .jpg, .jpeg"
//                         name="image"
//                         onChange={this.handlePhoto}
//                     />

//                     <input
//                         type="text"
//                         placeholder="Nom complet"
//                         name="name"
//                         value={this.state.newfood.name}
//                         onChange={this.handleChange}
//                     />

//                     <select name="type" onChange={this.handleChange} >
//                         <option value="" >Sélectinnez le type de votre repas </option>
//                         <option value="Repas-complet">Repas Complet</option>
//                         <option value="Sauce">Sauce</option>
//                         <option value="Complement">Complement</option>
//                     </select>

//                     <label for="description" >Description : </label>
//                     <textarea name="description" onChange={this.handleChange} ></textarea>

//                     <label for="ingrédient">Ingrédient : (ingrédient1 + ingredients2 + ... )</label>
//                     <textarea name="ingredient" onChange={this.handleChange} ></textarea>

//                     <input
//                         type="number"
//                         placeholder="Valeur nutritionnelle"
//                         onChange={this.handleChange}
//                     />

//                     <input
//                         type="submit"
//                         value="Ajouter repas"
//                     />

//                 </form>
//             </div>
//         );
//     }
// }

export default FoodAddForm;