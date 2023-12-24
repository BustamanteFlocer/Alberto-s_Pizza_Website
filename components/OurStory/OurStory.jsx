import Image from "next/image";
import styles from "@/components/OurStory/OurStory.module.css";

const OurStory = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          <Image
            className={styles.img}
            src="/img/aboutimgsss.png"
            alt=""
            width={530}
            height={353}
          />
          <div className={styles.allText}>
            <h4>About Us</h4>
            <h1>Quality Bites, Affordable Delights!</h1>
            <p>
              At Alberto's Pizza, we're not just about slices; we're about
              creating moments of joy around good food. From our humble
              beginnings near Vicente Sotto Memorial Medical Center in Cebu
              City, we've been on a mission to serve up affordable pizzas
              without compromising on quality or freshness.
            </p>

            <p>
              Our diverse menu caters to all tastes, drawing in people from
              various walks of life. Discover the simple pleasure of a great
              slice at Alberto's Pizza. Join us, and let's share the goodness,
              one slice at a time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
