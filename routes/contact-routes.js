'use strict';

const express = require('express');
const auth = require("../middleware/auth");
const { addContact, getAllContacts } = require("../controllers/contactController");

const router = express.Router();

//POST route to add a new user
router.post('', auth, addContact)

//GET route to read all contacts 
router.get('', auth, getAllContacts)

module.exports = {
    routes: router
}