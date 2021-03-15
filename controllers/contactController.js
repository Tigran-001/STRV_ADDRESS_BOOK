"use strict";
const Joi = require("joi");
const firebase = require("../startup/firedb");

//Adding a new contact to FirestoreDb
const addContact = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  //Saving a contact 
  try {
    const data = req.body;
    await firebase.firestore.collection("contacts").doc().set(data);
    res.send("Record saved successfuly");

  //Catching an error 
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//The contacts listing was not required to be implemented...
const getAllContacts = async (req, res, next) => {
  try {
    const contactsArray = [];
    const contacts = await firebase.firestore.collection("contacts").get();
    if (contacts.empty) {
      res.status(404).send("No contact record has been found");
    } else {
      contacts.forEach((doc) => {
        contactsArray.push(doc.data());
      });
      res.send(contactsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//Validation schema for adding new contact to FirestoreDb
const validate = (contact) => {
  const schema = {
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    phoneNumber: Joi.string().min(5).required(),
    address: Joi.string().min(5).required(),
  };
  return Joi.validate(contact, schema);
};

module.exports = {
  addContact,
  getAllContacts,
};
