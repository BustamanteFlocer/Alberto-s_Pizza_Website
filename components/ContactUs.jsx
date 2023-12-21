import React from "react";
import styles from "../styles/ContactUs.module.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const ContactUs = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.container}>
        <div className={styles.box1}>
          <div className={styles.profile}>
            <Slide direction="left" delay={1}>
              <h1 className={styles.header}>Send Us A Message</h1>
            </Slide>
            <div className={styles.address}>
              <Slide direction="left">
                <h2>Address:</h2>
              </Slide>
              <Slide direction="left">
                <p>1030 Southwood Dr San Luis Obispo, California(CA), 93401</p>
              </Slide>
            </div>

            <div className={styles.links}>
              <Slide direction="left">
                <h2>Contact us directly:</h2>
              </Slide>
              <div>
                <span>
                  <FiPhoneCall className={styles.linkIcon} />
                </span>
                <Slide direction="left">
                  <a href="tel:+4733378901">+47 333 78 901</a>
                </Slide>
              </div>
              <div>
                <Slide direction="left">
                  <span>
                    <HiOutlineMailOpen className={styles.linkIcon} />
                  </span>
                </Slide>
                <Slide>
                  <a href="mailto:miladamiri@gmail.com">miladamiri@gmail.com</a>
                </Slide>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div id={styles.formWrap} className={styles.formWrap}>
            <form action="">
              <p className={styles.text}>hello joe!</p>
              <label htmlFor="message">message:</label>
              <textarea
                name="message"
                id={styles.message}
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>

              <p className={styles.text}>Best,</p>

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your email"
              />

              <input type="submit" name="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
