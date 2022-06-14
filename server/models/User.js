const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken')
const joi = require('joi')
const passwordComplexity = require('joi-password-complexity')

const UserSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    job: { type: String, required: true },
    sex: { type: String, required: true },
    allergy: { type: String },
    birthday: { type: Date },
    measurement: { type: String },
    weight: { type: String },
    healthState: { type: String },
    registrationDay: { type: String },
    role: { type: String }
});

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id },processs.env.SECRET_KEY, {expiresIn: "24h"});
    return token;
}

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserSchema);

// const User = mongoose.model("User", UserSchema);

// module.exports = [User, validate]