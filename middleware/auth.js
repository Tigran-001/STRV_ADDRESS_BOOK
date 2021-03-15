"use strict";

const jwt = require("jsonwebtoken");
const config = require("config");

//Authorization jwt
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");         //Access header
  if (!token) return res.status(401).send("Access Denied!: No token provided");
  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));       //Verifying provided token
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");    //Invalid token was provided / Bad request
  }
};
