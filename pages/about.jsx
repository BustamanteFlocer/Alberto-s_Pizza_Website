import Image from "next/image";
import styles from "../styles/About.module.css";
import Clients from "@/components/Clients";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.pageHeader}>
        <h1>About</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.main}>
          <Image
            className={styles.img}
            src="/img/pizzaa.webp"
            alt=""
            width={530}
            height={353}
          />
          <div className={styles.allText}>
            <h1>Our Story</h1>
            <p>
              Alberto's Pizza started small in Cebu City near Vicente Sotto
              Memorial Medical Center. Our founders wanted great pizzas that
              wouldn't break the bank. Affordable, but never skimping on quality
              or freshness.
            </p>
            <p>
              Our story is one of a hidden gem discovered by people from all
              walks of life. Alberto's Pizza has become synonymous with a
              delightful menu that resonates with pizza lovers everywhere. Join
              us on a journey of flavors, where each bite tells the tale of our
              passion for affordable excellence. Alberto's Pizza – where good
              times and great pizzas meet!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.cover}>
          <div className={styles.box}>
            <div className={styles.imageWrappers}>
              <a href="#">
                <Image
                  className={styles.img}
                  src="/img/bg1.jpg"
                  alt=""
                  width={350}
                  height={200}
                />
              </a>
            </div>

            <div className={styles.wrapTexts}>
              <h4>Romantic Restaurant</h4>

              <p>
                Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
                eros.
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.imageWrappers}>
              <a href="#">
                <Image
                  className={styles.img}
                  src="/img/bg1.jpg"
                  alt=""
                  width={350}
                  height={200}
                />
              </a>
            </div>

            <div className={styles.wrapTexts}>
              <h4>Romantic Restaurant</h4>

              <p>
                Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
                eros.
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.imageWrappers}>
              <a href="#">
                <Image
                  className={styles.img}
                  src="/img/bg1.jpg"
                  alt=""
                  width={350}
                  height={200}
                />
              </a>
            </div>

            <div className={styles.wrapTexts}>
              <h4>Romantic Restaurant</h4>

              <p>
                Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
                eros.
              </p>
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
