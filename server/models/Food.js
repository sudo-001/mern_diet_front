const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');

const FoodSchema = mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    user_id: {type: String, required: true },
    description: {type: String, required: true},
    valeur_nutritionnelle: {type: Number },
    photo: {type: String, required: true },
    ingredients: {type: String}
})

module.exports = mongoose.model("Food", FoodSchema);