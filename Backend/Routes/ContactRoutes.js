const express = require("express");
const { postContactMsg, fetchContactMsg } = require("../Controller/ContactCtrl.js");

const ContactRoutes = express.Router();

ContactRoutes.post("/post-contact-message", postContactMsg); 
ContactRoutes.get('/fetch-contact-message',fetchContactMsg);

module.exports = ContactRoutes;
     