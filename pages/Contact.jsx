import styles from "../styles/Contact.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MdRestaurantMenu } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contain}>
      <Navbar />

      <div className={` ${styles.pageHeader}`}>
        <h1>Contact</h1>
      </div>

      {/**Contact Form */}
      <div className={styles.wrapper}>
        <div className={`${styles.containerFluid} ${styles.contact}`}>
          <div className={`${styles.contactContainer} ${styles.row} `}>
            <div className={styles.contactRounded}>
              <div className={styles.contactForm}>
                <h1>Get in touch</h1>
                <p>
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.
                </p>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className={styles.contactInput}>
              <form action="" className="">
                <input type="text" placeholder=" Your Name"></input>
                <input type="email" placeholder=" Enter Your Email"></input>
                <textarea
                  rows="5"
                  cols="10"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>

            <div className={styles.contactInfoWrapper}>
              <div className={styles.contactInfo}>
                <FaLocationDot className={styles.icons} />
                <div>
                  <h4>Address</h4>
                  <p>123 Street New York.USA</p>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <IoIosMail className={styles.icons} />
                <div>
                  <h4>Mail Us</h4>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <FaPhoneAlt className={styles.icons} />
                <div>
                  <h4>Telephone</h4>
                  <p>(+012) 3456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**End of Contact Form */}

      <Footer />
    </div>
  );
};

export default Contact;
