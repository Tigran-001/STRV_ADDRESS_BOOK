"use strict";

const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../model/user");

//Sign up a user and save the information such as email and password into the MongoDB
const addUser = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  //Checking if the user exists
  let user = await User.findOne({ email: req.body.email }).exec();
  if (user) {
    return res.status(400).send("An account with this email already exists");
  }

  //Returning the user/object in accordance to filter
  user = new User(_.pick(req.body, ["email", "password"]));

  //Creating salt and hashing password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  //Saving the user 
  (await user).save();

  //Creating and assigning a token 
  const token = user.generateAuthToken();
  res.header("x-auth-token", token).send(_.pick(user, ["_id", "email"]));
};

module.exports = {
  addUser,
};
