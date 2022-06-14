const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/ma_bd', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db = mongoose.connection;
db.on('error', function() {
    console.log('erreur lors de la connexion à la bd : ')
});
db.once('open', function() {
    console.log('connecté à la bd !');
    // console.log(User.find())
});
