import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.left}>
          <div className={styles.heroText}>
            <h2 className={styles.h2}>Fast and Tasty</h2>
            <h1 className={styles.h1}>
              TRY A BETTER & <span style={{ color: "red" }}>FASTER</span> EATING
              EXPERIENCE
            </h1>
            <p className={styles.p}>
              Indulge in artisanal coffee delights. Crafted with passion, brewed
              with perfection. Savor the Flavor!
            </p>
            <button className={styles.button}>Order Now</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.img}>
            <Image
              className={styles.featured1}
              src="/img/featured.png"
              alt=""
              width="550"
              height="380"
            />
            <Image
              className={styles.featured2}
              src="/img/featured1.png"
              alt=""
              width="550"
              height="380"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
