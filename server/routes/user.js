const express = require('express');
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const UserCtrl = require("../controllers/User");

userRouter.post("/", (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                ...req.body,
                password: hash,
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé :' }))
                .catch((error) => res.status(400).json({ error: error }));
        })
        .catch((error) => res.status(500).json({ error: error }));
});

userRouter.get("/:id", UserCtrl.findUser);
userRouter.put("/:id", UserCtrl.updateUser);

// userRouter.post("/", async(req,res) => {
//     try {
//         // const {error} =Validate(req.body);
//         // if(error) {
//         //     return res.status(400).send({ message: error.details[0].message });
//         // }
//         // const user = await User.findOne({email: req.body.email});
//         // if(user) {
//         //     return res.status(409).send({ message: "Un utilisateur avec une adresse email similaire existe déja "})
//         // }

//         const salt = await bcrypt.genSalt(Number(process.env.SALT))
//         const hash = await bcrypt.hash(req.body.password, 10);

//         await new User({ ...req.body, password: hash }).save();
//         res.status(201).send({message: "Utilisateur crée"})
//     } catch (error) {
//         res.status(500).send({ message: error.message});
//     }
// });


module.exports = userRouter;