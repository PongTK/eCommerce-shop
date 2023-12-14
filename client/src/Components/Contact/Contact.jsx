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
                <h4>Address</h4>
                <a
                  href="https://maps.app.goo.gl/Rg7gnF6cKnS71wrdA"
                  target="_blank"
                >
                  AAA tower 20th floor, 789 sathorn St, bangkok, Thailand 10120
                </a>
              </div>
              <div className="phone">
                <h4>Phone</h4>
                <p>+66 89 789 1234</p>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
              <div className="mail">
                <h4>e-mail</h4>
                <p>support@TKstore.com</p>
                <p>Send us your query anytime!</p>
              </div>
            </div>
            <div className="contact-column">
              <h1 className="msg-heading">Send Us a Message</h1>
              <form action="">
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <input type="text" placeholder="Enter your subject" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter your message"
                ></textarea>
                <button>submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
