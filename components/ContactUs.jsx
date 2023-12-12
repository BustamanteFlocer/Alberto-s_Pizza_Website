import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import styles from "../styles/ContactUs.module.css";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const ContactUs = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <Slide direction="left" delay={1}>
            <h1 className={styles.title}>Portfolio</h1>
          </Slide>
          <div className={styles.address}>
            <Slide direction="left">
              <h1>Address:</h1>
            </Slide>
            <Slide direction="left">
              <p>1030 Southwood Dr San Luis Obispo, California(CA), 93401</p>
            </Slide>
          </div>

          <div className={styles.links}>
            <Slide direction="left">
              <h1>Contact me directly:</h1>
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

          <div className={styles.profiles}>
            <Slide direction="left">
              <h1>Check my profiles</h1>
            </Slide>
            <div className={styles.icon}>
              <Zoom>
                <span>
                  <a href="/">
                    <AiFillGithub />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="/">
                    <AiFillLinkedin />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="/">
                    <BsFacebook />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="/">
                    <BsSlack />
                  </a>
                </span>
              </Zoom>
            </div>
          </div>
        </div>
        {/** 
      <div className={styles.forms}>
        <Slide direction="right">
          <form className={styles.form}>
            <div className={styles.name}>
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className={styles.email}>
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className={styles.message}>
              <span className={styles.messageIcon}>
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
            </div>
            <button>Submit</button>
          </form>
        </Slide>
      </div>
  */}
        <div id={styles.formWrap} className={styles.formWrap}>
          <form action="">
            <p className={styles.text}>hello joe!</p>
            <label htmlFor="message">message:</label>
            <textarea
              name="message"
              id={styles.message}
              cols="30"
              rows="10"
              defaultValue="your message"
            ></textarea>

            <p className={styles.text}>Best,</p>

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />

            <input type="submit" name="submit" value="I, send thanks!" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
