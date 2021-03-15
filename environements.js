"use strict";

require("dotenv").config();
const assert = require("assert");

const {
  MONGO_URI,
  PORT,
  HOST,
  HOST_URL,
} = process.env;

//Set of assertion test to test invariants
assert(MONGO_URI, "MONGO_URI is required");
assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = {
  // mongoDb: MONGO_URI,
  port: PORT,
  host: HOST,
  url: HOST_URL,
};
