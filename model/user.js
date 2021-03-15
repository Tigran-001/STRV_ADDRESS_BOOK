"use strict";

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const Joi = require("joi");

//Creating schema for MongoDb using mongoose
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
});

//Creating and assigning a token
userSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
  return token;
};

//Creating a model/collection in MongoDb 
const User = mongoose.model("User", userSchema);

//Validation schema to add a user 
const validateUser = (user) => {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  };
  return Joi.validate(user, schema);
};

module.exports = {
  User: User,
  validate: validateUser,
};
