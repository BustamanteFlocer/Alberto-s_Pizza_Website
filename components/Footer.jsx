import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { FaRegArrowAltCircleRight, FaRegEnvelope } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { LiaTwitter } from "react-icons/lia";
import { TiSocialPinterest } from "react-icons/ti";
import { LiaInstagram } from "react-icons/lia";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Image
            className={styles.logo}
            src="/img/logo.png"
            alt=""
            height="140"
            width="170"
          />
          <p className={styles.logoText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            laboriosam expedita mollitia libero at iure repudiandae. illum!
          </p>
        </div>
        <div className={styles.col}>
          <h3>
            Address
            <div className={styles.underline}>
              <span className={styles.span}></span>
            </div>
          </h3>
          <p className={styles.info}>ITPL Road</p>
          <p className={styles.info}>Magpayang, Mainit</p>
          <p className={styles.info}>Karnataka, PIN 7866, Philippines</p>
        </div>
        <div className={styles.col}>
          <h3>
            Links
            <div className={styles.underline}>
              <span className={styles.span}></span>
            </div>
          </h3>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a className={styles.anchor} href="">
                Homepage
              </a>
            </li>
            <li className={styles.link}>
              <a className={styles.anchor} href="">
                Menu
              </a>
            </li>
            <li className={styles.link}>
              <a className={styles.anchor} href="">
                About
              </a>
            </li>
            <li className={styles.link}>
              <a className={styles.anchor} href="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3 className={styles.getUpdates}>
            Get Updates
            <div className={styles.underline}>
              <span className={styles.span}></span>
            </div>
          </h3>
          <form className={styles.form}>
            <FaRegEnvelope className={styles.icons} size={20} />
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className={styles.button} type="submit">
              <FaRegArrowAltCircleRight className={styles.icons} size={20} />
            </button>
          </form>
          <div className={styles.socialMedia}>
            <TiSocialFacebook className={styles.socialIcons} />
            <LiaTwitter className={styles.socialIcons} />
            <LiaInstagram className={styles.socialIcons} />
            <TiSocialPinterest className={styles.socialIcons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
