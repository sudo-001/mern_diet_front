const router = require('express').Router();
const User = require("../models/User");
const joi = require('joi');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

router.post("/",(req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Mot de passe ou email incorrect !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe ou email incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'sudo',
                            { expiresIn: '24h' }
                        ),
                        role: user.role
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
});

// router.post("/", async (req, res) => {
    
//     try{
//         const {error} = validate(req.body);
//         if(error) {
//             return res.status(400).send({message: error.details[0].message});
//         }

//         const user = await User.findOne({ email: req.body.email });
//         if(!user){
//             return res.status(401).send({ message: "Mot de passe ou email incorrect "});
//         }

//         const validPassword = await bcrypt.compare(
//             req.body.password, user.password
//         );

//         if(validPassword) {
//             return res.status(401).send({ message: "Mot de passe ou email incorrect 2"});
//         }

//         const token = user.generateAuthToken();
//         res.status(200).send({data: token, message: "Connexion réussie"});

//     } catch(error) {
//         res.status(500).send({message: error.message})
//     }
// })

// const validate = (data) => {
//     const schema = joi.object({
//         email: joi.string().email().required().label("E-mail"),
//         password: joi.string().required().label("password")
//     })
//     return schema.validate(data);
// }

module.exports = router;