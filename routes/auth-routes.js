"use strict";

const express = require("express");
const { login } = require("../controllers/authController");
const router = express.Router();

//POST route to login an existing user 
router.post("/login", login);

module.exports = {
  routes: router,
};
