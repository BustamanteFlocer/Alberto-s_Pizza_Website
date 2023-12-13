import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Contact.module.css";
import { TiSocialFacebook } from "react-icons/ti";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [notEmptyInputs, setNotEmptyInputs] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });
  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
    console.log("Focused Input:", inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
    console.log("Focused Input:", null);
  };

  const handleChange = (e, inputName) => {
    setNotEmptyInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: e.target.value.trim() !== "",
    }));
    console.log("Not Empty Input:", e.target.value.trim() !== "");
  };
  return (
    <div className={styles.contain}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.formWrapper}>
              <div className={styles.contactHeading}>
                <h1>Let's work together.</h1>
              </div>
              <form
                action="Contact.jsx"
                method="post"
                className={styles.contactForm}
              >
                <div className={styles.inputWrap}>
                  <input
                    className={`${styles.contactInput} ${
                      focusedInput === "firstName" ? styles.focus : ""
                    }`}
                    autoComplete="off"
                    name="firstName"
                    id="firstName"
                    type="text"
                    required
                    onFocus={() => handleFocus("firstName")}
                    onBlur={handleBlur}
                    onInput={(e) => handleChange(e, "firstName")}
                  />
                  <label
                    className={`${styles.label} ${
                      focusedInput === "firstName" ? styles.focus : ""
                    } ${notEmptyInputs.firstName ? styles.notEmpty : ""}`}
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <TiSocialFacebook
                    className={`${styles.icons} ${
                      focusedInput === "firstName" ? styles.focus : ""
                    }`}
                  />
                </div>
                <div className={styles.inputWrap}>
                  <input
                    className={`${styles.contactInput} ${
                      focusedInput === "lastName" ? styles.focus : ""
                    }`}
                    autoComplete="off"
                    name="lastName"
                    id="lastName"
                    type="text"
                    required
                    onFocus={() => handleFocus("lastName")}
                    onBlur={handleBlur}
                    onInput={(e) => handleChange(e, "lastName")}
                  />
                  <label
                    className={`${styles.label} ${
                      focusedInput === "lastName" ? styles.focus : ""
                    } ${notEmptyInputs.lastName ? styles.notEmpty : ""}`}
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <TiSocialFacebook
                    className={`${styles.icons} ${
                      focusedInput === "lastName" ? styles.focus : ""
                    }`}
                  />
                </div>
                <div className={styles.w100}>
                  <div className={styles.inputWrap}>
                    <input
                      className={`${styles.contactInput} ${
                        focusedInput === "email" ? styles.focus : ""
                      } `}
                      name="email"
                      id="email"
                      type="email"
                      autoComplete="off"
                      required
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      onInput={(e) => handleChange(e, "email")}
                    />
                    <label
                      className={`${styles.label} ${
                        focusedInput === "email" ? styles.focus : ""
                      } ${notEmptyInputs.email ? styles.notEmpty : ""}`}
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <TiSocialFacebook
                      className={`${styles.icons} ${
                        focusedInput === "email" ? styles.focus : ""
                      }`}
                    />
                  </div>
                </div>

                <div className={styles.w100}>
                  <div className={styles.inputWrap}>
                    <textarea
                      className={`${styles.contactInput} ${
                        focusedInput === "message" ? styles.focus : ""
                      }`}
                      name="message"
                      id="message"
                      autoComplete="off"
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                      onInput={(e) => handleChange(e, "message")}
                    ></textarea>
                    <label
                      className={`${styles.label} ${
                        focusedInput === "message" ? styles.focus : ""
                      } ${notEmptyInputs.message ? styles.notEmpty : ""}`}
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <TiSocialFacebook
                      className={`${styles.icons} ${
                        focusedInput === "message" ? styles.focus : ""
                      }`}
                    />
                  </div>
                </div>
                <div className={styles.contactButton}>
                  <button className={`${styles.button} ${styles.upload}`}>
                    <span>
                      <TiSocialFacebook className={styles.buttonIcons} /> Add
                      attachement
                    </span>
                    <input type="file" name="attachement" />
                  </button>
                  <input
                    className={styles.button}
                    type="submit"
                    value="Send message"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.img}
                src="/img/bg1.jpg"
                height={100}
                width={700}
                alt=""
              />
              <div className={styles.waveWrap}>
                <svg className={styles.wave} viewBox="0 0 783 1536" fill="none">
                  <path
                    id="wave"
                    d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                  />
                </svg>
              </div>
              <svg
                className={styles.dashedWave}
                viewBox="0 0 345 877"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="dashedWave"
                  d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
