import '../../styles/components/auth/Login.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({
            ...data,
            [input.name]: input.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = "http://localhost:5000/api/auth";
            const { data: res } = await axios.post(url, data);
            // console.log(res.userId)
            localStorage.setItem("token", res.token);
            localStorage.setItem("userId", res.userId);
            localStorage.setItem("userRole",  res.role);
            window.location = "/";
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    }

    return (
        <div className="LoginForm">
            <div className="container">
            <div className="left">
                <form onSubmit={handleSubmit}>
                    <h1>Se connecter à votre compte</h1>
                    
                    
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
                    
                    {error && <div>{error}</div>}
                    <button type="submit">Se connecter</button>
                </form>
            </div>

            <div className="right">
                <h1>Nouveau sur le site ?</h1>
                <NavLink to="/signup">Sinscrire</NavLink>
            </div>
            </div>
        </div>
    )
}

export default LoginForm


// import React, { useState } from "react";
// import axios from "axios";
// import { NavLink } from 'react-router-dom';
// import '../../styles/components/auth/Login.css'


// function LoginForm({ setLoginUser }) {
//     // const history = useHistory()
//     const [user, setUser] = useState({
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         const { email, value } = e.target
//         setUser({
//             ...user,
//             [email]: value
//         })
//     }

//     const login = () => {
//         axios.post("https://localhost:5000/api/auth/login", user)
//             .then((res) => {
//                 alert(res.data.message)
//                 setLoginUser(res.data.user)
//                 // history.pushState("/");
//             })
//     }

//     return (
//         <div className="cont">
//             <br />
//             <h2>Connectez vous à votre compte</h2>
//             <p> Visiter +100 repas avec la rubrique Visiter les repas</p>
//             <form action="#" autoComplete="off" >
//                 <input className="mail" type='email' name='email' onchange={handleChange} placeholder='E-mail' />
//                 <br />
//                 <br />
//                 <input className="mdp" type='password' name='password' onchange={handleChange} placeholder='Mot de passe' />
//                 <br />
//                 <br />
//                 <button type="submit" onClick={login} className="btn" >Login to your Account</button>
//                 <br />
//                 <br />
//                 <NavLink to={''}><p><u>Mot de passe oublié?</u></p></NavLink>
//             </form>

//         </div>

//     )
// }
// export default LoginForm;