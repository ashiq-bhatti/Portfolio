const ContactModel = require("../Models/contactSchema.js");

const postContactMsg = async (req, res) => {
  const { fullname, phone, email, emailsubject, message } = req.body;

  if (!fullname || !phone || !email || !emailsubject || !message) {
    return res.status(400).json({ error: "Please fill all fields!" });
  }

  try {
    const newContact = new ContactModel({ fullname, phone, email, emailsubject, message });
    await newContact.save();

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
const fetchContactMsg = async(req,res)=>{
  try {
    const contact = await ContactModel.find();
    if(!contact){
      return res.status(404).json({ success: false, message: "No contact messages found" });
    }
    res.status(200).json({ success: true, message:'Messages fetch successfully' , data: contact });
    
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });

  }
}

module.exports = { postContactMsg ,fetchContactMsg }; 
