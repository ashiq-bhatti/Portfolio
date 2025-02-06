const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    phone: { type: String, required: true }, 
    email: { type: String, required: true },
    emailsubject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const ContactModel = mongoose.model("ContactMessage", contactSchema);
module.exports = ContactModel;
