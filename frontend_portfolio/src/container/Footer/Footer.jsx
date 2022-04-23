import React, { useState } from "react";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Footer.scss";
import { images } from "../../constants";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Let's Connect!</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.emailIcon1} alt="email" />
          <a href="mailto:giyogun@gmail.com" className="p-text">
            giyogun@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.samsung} alt="mobile" />
          <a href="tel: +2347032045439" className="p-text">
            +2348135599978
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              className="p-text"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              className="p-text"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              name="message"
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="submit" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__altbg"
);
