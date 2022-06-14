// On importe le modèle utilisateur
// const Usermdl = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/User');


exports.findUser = (req, res, next) => {
    User.findById({ _id: req.params.id })
        .then((user) => res.status(200).send(user))
        .catch((error) => res.status(404).json({ error }))
}

exports.updateUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id, password: hash })
                .then((res) => res.status(200).json({ message: "Uitlisateur modifié avec succès !" }))
                .catch((error) => res.status(400).json({ error }))
        })
        .catch((error) => res.status(500).json({ error }))


}

exports.deleteUser = (req, res, next) => {

}