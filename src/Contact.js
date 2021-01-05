import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact__space"></div>
      <div className="contact">
        <div className="contact__title">CONTACT US</div>
        <div className="contact__info">
          <div className="contact__infoData">info@mysite.com</div>
          <div className="contact__infoData">/ </div>
          <div className="contact__infoData">
            500 Terry Francois Street, San Francisco, CA 94158
          </div>
          <div className="contact__infoData">/ </div>
          <div className="contact__infoData">Tel: 123-456-7890 </div>
        </div>
        <div className="contact__row">
          <input className="contact__name" type="text" placeholder="Name*" />
          <input className="contact__email" type="email" placeholder="Email*" />
        </div>
        <input className="contact__subject" type="text" placeholder="Subject" />
        <textarea
          className="contact__message"
          type="text"
          placeholder="Message"
        />

        <button className="contact__button" type="submit">
          Send
        </button>
      </div>
    </>
  );
}

export default Contact;
