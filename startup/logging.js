"use strict";

//Handling and logging errors using "express-async-errors"
const winston = require("winston");
require("express-async-errors");

//Handling uncaught exception. Exception that happening on node level
module.exports = () => {
  process.on("uncaughtException", (ex) => {
    winston.error(ex.message, ex);
    process.exit(1); //As good practice exit process every time there is uncaughtError or rejection
  });

  //Handling promise rejection
  process.on("unhandledRejection", (ex) => {
    winston.error(ex.message, ex);
    process.exit(1);
  });

  //Handling nhandledRejection and uncaughtException using winston
  winston.add(winston.transports.File, { filename: "logfile.log" });
};
