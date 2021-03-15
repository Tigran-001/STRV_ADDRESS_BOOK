"use strict";

const express = require("express");
const { addUser } = require("../controllers/userController");

//Creating a modular mountable route handlers using router
const router = express.Router();

//POST route for user registration
router.post("/register", addUser);

module.exports = {
  routes: router,
};
