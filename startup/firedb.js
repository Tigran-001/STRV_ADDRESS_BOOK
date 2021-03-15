"use strict";

const config = require("config");
const Firestore = require("@google-cloud/firestore");
const {firestoreConfig} = require("../environements")

//Initializing an instance of Firestore
const db = new Firestore({
  projectId: config.get("project_id"),
  keyFilename: ("./config/default.json"),
});

module.exports = {
  firestore: db,
};