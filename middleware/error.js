"use strict";

const winston = require("winston");

//Logging
//Logging levels: 1.winston.error; 2.winston.warn; 3.winston.info; 4.winston.verbose; 5.winston.debug; 6.winston.silly
module.exports = (err, req, res, next) => {
  winston.error(err.message, err);
  res.status(500).send("Something went wrong");
};
