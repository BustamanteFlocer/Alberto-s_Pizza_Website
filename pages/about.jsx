import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image
          className={styles.img}
          src="/img/bg1.jpg"
          alt=""
          width={80}
          height={80}
        />
        <div className={styles.allText}>
          <h4>About Us</h4>
          <h1>A House of Creative & Intelligent</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            tenetur corrupti sint ratione autem! Itaque error eveniet expedita
            quia. Neque iste dolor praesentium aperiam hic architecto excepturi
            nihil cumque dolorem.
          </p>
          <div className={styles.btn}>
            <button className={styles.button} type="button">
              {" "}
              Our Team
            </button>
            <button
              className={`${styles.button} ${styles.button2}`}
              type="button"
            >
              Learn More{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
