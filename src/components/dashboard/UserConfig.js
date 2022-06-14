import React from 'react';
import '../../styles/components/dashboard/Common_dashboard.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function UserConfig() {



    const [user, setUser] = useState({
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        job: "",
        sex: "",
        allergy: "",
        birthday: "",
        measurement: "",
        weight: "",
        healthState: "",
        registrationDay: "",
        role: "",
    });

    useEffect((user) => {
        axios.get('http://localhost:5000/api/users/' + localStorage.getItem("userId") + '')
            .then((user_res) => {
                setUser({ ...user_res.data })
            })
            .catch((error) => console.log(error.message));
    }
        , [])

    function verif() {
        let password1 = document.getElementById("password");
        let password2 = document.getElementById("password2");
        let valid = document.getElementById("valid");
        if (password1.value == null && password2.value == null) {
            valid.innerText = "";
            valid.style.color = "";
        } else if (password1.value === password2.value) {
            valid.innerText = "similaire ✅";
            valid.style.color = "green";
            setUser({ ...user, password: password2.value });
        } else {
            valid.innerText = "non similaire ❌";
            valid.style.color = "red";
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        verif();
        let password1 = document.getElementById("password");
        let password2 = document.getElementById("password2");
        let valid = document.getElementById("valid");
        console.log(password1.value)
        if (password1.value === "" || password2.value === "" || valid.innerText === "" || valid.innerText === "non similaire ❌") {
            alert("Veuillez revérifier les champs à remplir ");
        } else {
            axios.put("http://localhost:5000/api/users/" + localStorage.getItem("userId") + "", user)
                .then((res) => {
                    console.log(res.message);
                })
                .catch((error) => console.log(error))

            window.location.reload();

        }
    }



    return (
        <div className='UserConfig'>
            <div className="profil-content">
                <img src="./images/Icons/user.png" alt="profil" />
            </div>

            <div className="form-content">
                <form method="POST" onSubmit={handleSubmit} >
                    <div><label for="email">Votre adresse email : </label><br />
                        <input type="text" disabled placeholder='email' id="email" value={user.email} /></div>

                    <div><label for="password">Changer mot de passe : </label><br />
                        <input type="text" placeholder='Nouveau mot de passe' id="password" onKeyUp={verif} /></div>

                    <div><label for="password2">Confirmer le mot de passe : </label><br />
                        <input type="password" placeholder='Confirmer nouveau mot de passe' id="password2" onKeyUp={verif} />
                        <p id="valid"></p>
                    </div>

                    <input type="submit" value="Enregistrer modification" />
                </form>

                <div className="right-png"></div>
            </div>
        </div>
    );
}


export default UserConfig;