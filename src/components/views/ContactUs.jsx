import React, { useState } from "react";
import "./contactPage.css";

const ContactUs = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="contactPage">
        <div className="contactPageHeader">
          <h1>Get in Touch</h1>
          <h2>We're Here to Help</h2>
        </div>

        <div className="contactPageWrapper">
          <form onSubmit={handleSubmit}>
            <div className="inputWrapper col">
              <label>Your name:</label>
              <input
                type="text"
                name="name"
                value={contactInfo.name}
                onChange={handleChange}
                className="input"
                required
                placeholder="John Doe"
              />
            </div>

            <div className="inputWrapper col">
              <label>Your email:</label>
              <input
                type="text"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
                className="input"
                required
                placeholder="example@email.com"
              />
            </div>

            <div className="inputWrapper col">
              <label>Your message:</label>
              <textarea
                name="message"
                value={contactInfo.message}
                placeholder="Write your message here"
                onChange={handleChange}
                required
                className="input"
                rows={10}
              />
            </div>

            <div className="inputWrapper space">
              <button className="btn" type="submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
