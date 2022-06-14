import '../../styles/components/auth/Inscription.css'

import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';

function SignupForm() {
    const date = new Date();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        measurement: "",
        weight: "",
        healthState: "",
        birthday: "",
        registrationDay: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
        allergy: "",
        sex: "",
        job: "",
        role: 'user'
    })

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        var selected = document.querySelector("select").value;
        
        setData({
            ...data,
            [input.name]: input.value
        })

        data.sex=selected;
        console.log(data)
    }

    


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = "http://localhost:5000/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/login");
            console.log(res.message);
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }

    return (
        <div className="signupform">
            <div className="formulaire">
            <div class="left">
                <h1>Bienvenu</h1>
                <NavLink to="/login">Se connecter</NavLink>
            </div>

            <div class="right">
                <form onSubmit={handleSubmit}>
                    <h1>Créer un compte</h1>
                    <input
                        type="text"
                        placeholder="nom"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName}
                        required
                    />
                    <input
                        type="text"
                        placeholder="prenom"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                        required
                    />

                    <select name="sex" onChange={handleChange} >
                        <option value="">Selectionner votre sexe </option>
                        <option value="Masculin">M</option>
                        <option value="Feminin">F</option>
                    </select>

                    {/* <input
                        type="text"
                        placeholder="Sexe"
                        name="sex"
                        onChange={handleChange}
                        value={data.sex}
                        required
                    /> */}

                    <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Profession"
                        name="job"
                        onChange={handleChange}
                        value={data.job}
                        required
                    />
                    <input
                        type="date"
                        placeholder="Date de naissance"
                        name="birthday"
                        onChange={handleChange}
                        value={data.birthday}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Etat de santé"
                        name="healthState"
                        onChange={handleChange}
                        value={data.healthState}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Allergie (tapez Aucune si vous ne connaissez pas)"
                        name="allergy"
                        onChange={handleChange}
                        value={data.allergy}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Poids (en KG)"
                        name="weight"
                        onChange={handleChange}
                        value={data.weight}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Taille"
                        name="measurement"
                        onChange={handleChange}
                        value={data.measurement}
                        required
                    />
                    <input
                        type="hidden"
                        placeholder="Date d'inscription"
                        name="registrationDay"
                        onChange={handleChange}
                        value={data.registrationDay}
                        required
                    />
                    {error && <div>{error}</div>}
                    <button type="submit">S'inscrire</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default SignupForm
