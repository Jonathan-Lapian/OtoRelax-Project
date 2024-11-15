import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact For Any Query</h2>
      <div className="contact-content">
        {/* Informasi Kontak */}
        <div className="contact-info">
          <h3>Quick Contact Info</h3>
          <p>
            <strong>Opening Hour:</strong> Mon - Fri, 8:00 - 9:00
          </p>
          <p>
            <strong>Call Us:</strong> +012 345 6789
          </p>
          <p>
            <strong>Email Us:</strong> info@example.com
          </p>
        </div>

        {/* Formulir Kontak */}
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button className="send-message-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
