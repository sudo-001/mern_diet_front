const express = require('express');
const foodRouter = express.Router();
const foodCtrl = require("../controllers/Food");
const multer = require('../middleware/multer-config');
const path = require("path")
const Food = require("../models/Food");


foodRouter.get("/", foodCtrl.getAllFood);

foodRouter.get("/aliment/:aliment", foodCtrl.getNutriment);

foodRouter.get("/find/", foodCtrl.getAllFood);

foodRouter.get("/show/:id", foodCtrl.getOneFood);

foodRouter.get("/find/:name", foodCtrl.getSearchedFood);

foodRouter.get("/filter/:filter", foodCtrl.getFoodByFilter);

foodRouter.get("/name-filter/:name&:filter", foodCtrl.getFoodByNameAndFilter);

foodRouter.post("/add", multer, (req, res, next) => {
    const name =  req.body.name;
    const type =  req.body.type;
    const photo =  req.body.photo //req.body.photo;
    const description = req.body.description;
    const ingredients =req.body.ingredients;
    const valeur_nutritionnelle = req.body.valeur_nutritionnelle//req.body.valeur_nutritionnelle;
    const user_id = req.body.user_id;

    const newFoodData = {
        photo,
        name,
        type,
        description,
        ingredients,
        valeur_nutritionnelle,
        user_id
    }

    const newFood = new Food({ 
        ...newFoodData, 
        photo: `${req.protocol}://${req.get('host')}/images/${req.body.photo}`
    })

    newFood.save()
        .then(() => res.status(200).json({'message:': 'Repas ajouté !'}))
        .catch(error => res.status(400).json({ 'Error': error.message }))
});

module.exports = foodRouter;