"use strict";

//Using config to override various data for different env
const config = require("config");

//Checking for availability of jwt Key
module.exports = () => {
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey not defined");
  }
};
