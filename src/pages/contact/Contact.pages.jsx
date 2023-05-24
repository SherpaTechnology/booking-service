/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Layout from "../../common/layout/Layout";
import Banner2Component from "../../components/banner2/banner2.Component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import InputComponent from "../../components/input/Input.component";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/Button.component";
import TextAreaComponent from "../../components/textarea/TextArea.component";

const defineValues = {
  userName: "",
  userEmail: "",
  subject: "",
  message: "",
};

const ContactPage = () => {
  const [emailForms, setEmailForms] = useState(defineValues);
  const { userEmail, userName, subject, message } = emailForms;
  console.log(emailForms);
  const handleEmailChange = e => {
    setEmailForms({ ...emailForms, [e.target.name]: e.target.value });
  };
  return (
    <Layout>
      <div className="banner-section">
        <Banner2Component title="Contact Us" description="Get in touch" />
      </div>
      <div className="contact-info">
        <div className="wrapper">
          <div className="contact-info-content">
            <div className="contact-info-content__contact">
              <div className="contact-info-content__contact--icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h2>Phone</h2>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings.
              </p>
              <a href="tel:+1-800-555-1212">(800) 555-1212</a>
            </div>
            <div className="contact-info-content__email">
              <div className="contact-info-content__contact--icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h2>Email</h2>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings.
              </p>
              <a href="Contact@goodlayers.com">Contact@goodlayers.com</a>
            </div>
            <div className="contact-info-content__location">
              <div className="contact-info-content__contact--icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <h2>Location</h2>
              <p>4 apt. Flawing Street. The Grand Avenue.Liverpool, UK 33342</p>
              <a href="tel:+1-800-555-1212">View on Google Map</a>
            </div>
          </div>
        </div>
      </div>
      <div className="send-email">
        <div className="wrapper">
          <div className="email-section">
            <div className="email-section__title">
              <h2>Send us an email</h2>
            </div>
            <div className="email-section__contact">
              <div className="email-section__contact--email">
                <InputComponent
                  type="text"
                  label="Full Name"
                  name="userName"
                  value={userName}
                  onChange={e => handleEmailChange(e)}
                  required
                />
                <InputComponent
                  type="email"
                  label="Email"
                  name="userEmail"
                  value={userEmail}
                  onChange={e => handleEmailChange(e)}
                  required
                />
              </div>
              <div className="email-section__contact--message">
                <InputComponent
                  type="text"
                  label="Subject"
                  name="subject"
                  value={subject}
                  onChange={e => handleEmailChange(e)}
                  required
                />
                <TextAreaComponent
                  name="message"
                  value={message}
                  rows="1"
                  cols="40"
                  placeholder="Message here ...."
                  onChange={e => handleEmailChange(e)}
                  required
                />
              </div>
              <div className="email-section__cotact--button">
                <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.normal}>
                  Send Messge
                </ButtonComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="booking">
        <div className="wrapper">
          <div className="chat-section">
            <div className="chat-section__detail">
              <div className="chat-section__detail--title">
                <span>WE'D LOVE TO</span>
                <h2>Have a CHat</h2>
              </div>
              <p>
                If you would like to discuss your next adventure, have any
                questions or simply just a good old chin wag, then please call
                us, or send us a message.
              </p>
            </div>
            <div className="chat-section__call">
              <div className="chat-section__call--button">
                <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.normal}>
                  Book a call back
                </ButtonComponent>
              </div>
              <div className="chat-section__call--number">
                <span>
                  <FontAwesomeIcon icon={faPhone} /> 9803045098
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
