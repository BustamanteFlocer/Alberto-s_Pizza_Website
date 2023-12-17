import Image from "next/image";
import styles from "../styles/About.module.css";
import Clients from "@/components/Clients";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Parallax } from "react-parallax";

const About = () => {
  const woman = "/img/cart-page-header-img.jpg";
  return (
    <div>
      <Navbar />
      <div className={` ${styles.pageHeader}`}>
        <h1>About</h1>
      </div>

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
              quia. Neque iste dolor praesentium aperiam hic architecto
              excepturi nihil cumque dolorem.
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
      <div className={styles.parallax}>
        <Parallax className={styles.parallaxImg} strength={20} bgImage={woman}>
          <div className={styles.content}>
            <div className={styles.textContent}>Normal Parallax</div>
          </div>
        </Parallax>
      </div>

      <div className={styles.contentIntro}>
        <div className={styles.contain}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.blo1}>
                <div className={styles.imageWrapper}>
                  <a href="#">
                    <Image
                      className={styles.img}
                      src="/img/bg1.jpg"
                      alt=""
                      width={306}
                      height={182}
                    />
                  </a>
                </div>

                <div className={styles.wrapText}>
                  <a href="#">
                    <h4 className={styles.texts}>Romantic Restaurant</h4>
                  </a>

                  <p className={styles.paragraph}>
                    Phasellus lorem enim, luctus ut velit eget, con-vallis
                    egestas eros.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.blo1}>
                <div className={styles.imageWrapper}>
                  <a href="#">
                    <Image
                      className={styles.img}
                      src="/img/bg1.jpg"
                      alt=""
                      width={306}
                      height={182}
                    />
                  </a>
                </div>

                <div className={styles.wrapText}>
                  <a href="#">
                    <h4 className={styles.texts}>Romantic Restaurant</h4>
                  </a>

                  <p className={styles.paragraph}>
                    Phasellus lorem enim, luctus ut velit eget, con-vallis
                    egestas eros.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.blo1}>
                <div className={styles.imageWrapper}>
                  <a href="#">
                    <Image
                      className={styles.img}
                      src="/img/bg1.jpg"
                      alt=""
                      width={306}
                      height={182}
                    />
                  </a>
                </div>

                <div className={styles.wrapText}>
                  <a href="#">
                    <h4 className={styles.texts}>Romantic Restaurant</h4>
                  </a>

                  <p className={styles.paragraph}>
                    Phasellus lorem enim, luctus ut velit eget, con-vallis
                    egestas eros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Clients />
      <Footer />
    </div>
  );
};

export default About;
