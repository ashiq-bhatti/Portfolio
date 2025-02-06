import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { backendURL } from "../../BackendURL";
import axios from "axios";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    emailsubject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { fullname, phone, email, emailsubject, message } = formData;
      const response = await axios.post(
        `${backendURL}/api/contact/post-contact-message`,
        { fullname, phone, email, emailsubject, message }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setFormData({
          fullname: "",
          phone: "",
          email: "",
          emailsubject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 py-10">
      <div className="bg-slate-900 w-[90%] md:w-[84%] mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="left text-white flex-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Let's Work Together
          </h1>
          <p className="my-4">
            Have a project or question? Feel free to reach out. I’m here to help
            and collaborate!
          </p>
          <div className="flex items-center gap-5">
            <FaPhoneAlt className="w-9 h-9 rounded-lg bg-slate-800 text-green-500 text-2xl px-2" />
            <div>
              <p className="text-green-500">Phone</p>
              <p>+923029047292</p>
            </div>
          </div>
          <div className="flex items-center gap-5 py-2">
            <MdEmail className="w-9 h-9 rounded-lg bg-slate-800 text-green-500 text-2xl px-2" />
            <div>
              <p className="text-green-500">Email</p>
              <p>ashiqbhatti217@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <IoLocation className="w-9 h-9 rounded-lg bg-slate-800 text-green-500 text-2xl px-2" />
            <div>
              <p className="text-green-500">Address</p>
              <p>Joher Town, Lahore</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="right w-full flex-1 rounded-lg bg-slate-800 p-5">
          <h1 className="text-xl flex gap-2 md:text-2xl lg:text-3xl font-bold text-green-500 mb-4 text-center">
            <span className="text-white">Contact</span>
            Me
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="w-full gap-5 flex flex-col md:flex-row">
              <input
                type="text"
                 
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full text-white bg-slate-900 rounded-md p-2"
              />
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full text-white bg-slate-900 rounded-md p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
            <div className="w-full gap-5 flex flex-col md:flex-row">
              <input
                type="email"
                 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full text-white bg-slate-900 rounded-md p-2"
              />
              <input
                type="text"
                 
                name="emailsubject"
                value={formData.emailsubject}
                onChange={handleChange}
                placeholder="Email Subject"
                className="w-full text-white bg-slate-900 rounded-md p-2"
              />
            </div>
            <textarea
              name="message"
               
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="text-white bg-slate-900 rounded-md p-2"
              rows={6}
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 w-44 m-auto text-white rounded-md p-2"
              disabled={loading} // ✅ Disable button while submitting
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
