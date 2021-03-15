"use strict";

//Settting up Express Application 
const express = require("express");
const cors = require("cors");
const environements = require("./environements");

//Importing Routes
const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");
const contactRoutes = require("./routes/contact-routes");

const error = require("./middleware/error");

//Requiring logger library
const winston = require("winston");

//Returns instance of app
const app = express();

//Checking if jwtPrivateKey is defined
//Connecting to MongoDB
//Setteing up Logging
//Require DBs' ObjectId validator for Joi.
require("./startup/config")();
require("./startup/mongodb")();
require("./startup/logging")();
require("./startup/validator")();

//Using middleware to parse body of requests
//Setting up cors config
app.use(express.json());
app.use(cors());

//Route Middlewares
app.use("/api/address-book", userRoutes.routes);
app.use("/api/address-book", authRoutes.routes);
app.use("/api/address-book", contactRoutes.routes);
app.use(error);

let port = process.env.PORT;
if (port == null || port == ""){
  port == environements.port;
}
app.listen(port, () =>
  winston.info(`Server is running on port ${environements.port}`)
);
