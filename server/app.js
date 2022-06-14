const express = require('express');
const path = require('path');
const dbconnection = require('./db/conn');
const userRoutes = require('./routes/user');
const authRoutes = require("./routes/auth");
const foodRoutes = require("./routes/food");
const multer = require('multer');

require('dotenv').config;

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('Accueil backend');
    next();
})

// Gestion de l'erreur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin , X-Requested-width, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware et routes de gestion des utilisateurs
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Middleware et routes de gestion des repas
app.use("/api/food", foodRoutes);


module.exports = app;