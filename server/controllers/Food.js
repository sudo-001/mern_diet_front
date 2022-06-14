const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Food = require("../models/Food");
const fs = require('fs');
const nutritionix = require('nutritionix-api');

exports.getNutriment = (req, res, next) => {
    nutritionix.init('c7339d5c','fd7fca248338e60babdc64d9b744abf5');

    nutritionix.natural.search('apple')
    .then(result => console.log(result));
}

exports.getAllFood = (req, res, next) => {
    Food.find()
    .then((foods_list)=> {
        res.status(200).json(foods_list);
    })
    .catch((error) => {
        res.status(400).json({ error: error })
    })
}

exports.getOneFood = (req, res, next) => {
    Food.findOne({ _id: req.params.id})
        .then((food) => {
            
            res.status(200).json(food)
        })
        .catch((error) => res.status(404).json({ error: error}))
}

exports.getSearchedFood = (req, res, next) => {
    Food.find({ name: RegExp(`${req.params.name}`, 'i') })
        .then((food) => {
            res.status(200).json(food);
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        })
}

exports.getFoodByFilter = (req, res, next) => {
    Food.find({ type: RegExp(`${req.params.filter}`, 'i') })
        .then((food) => {
            res.status(200).json(food);
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        })
}

exports.getFoodByNameAndFilter = (req, res, next) => {
    Food.find({ name: RegExp(`${req.params.name}`, 'i') , type: RegExp(`${req.params.filter}`, 'i') })
        .then((food) => {
            res.status(200).json(food)
        })
        .catch((error) => {
            res.status(404).json({ error: error })
        })
}