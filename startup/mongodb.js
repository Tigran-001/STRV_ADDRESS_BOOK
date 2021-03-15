"use strict";

const mongoose = require("mongoose");
const winston = require("winston");
const { mongoDb } = require("../environements");

//Connecting to MongoDB
module.exports = () => {
  mongoose
    .connect("mongodb+srv://admin-strv:Strv_AB2021@cluster0.ovek5.mongodb.net/usersDB", {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => winston.info("MongoDB Connected..."));
};
