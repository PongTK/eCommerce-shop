import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <header>
        <span className="header-text">CONTACT</span>
        <span className="header-subText">Location | Phone | Mail</span>
      </header>
      <section className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-content">
            <h1 className="contact-heading">Get In Touch With Us</h1>
            <p className="contact-text">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
          <div className="contact-row">
            <div className="contact-column">
              <div className="location">
                location make it link to google map
              </div>
              <div className="phone">phone</div>
              <div className="mail">mail</div>
            </div>
            <div className="contact-column">
              <h1 className="msg-heading">Send Us a Message</h1>
              <form action="">
                <input type="text" />
                <input type="email" />
                <input type="text" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
