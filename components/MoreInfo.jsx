import Image from "next/image";
import styles from "../styles/MoreInfo.module.css";

const MoreInfo = () => {
  return (
    <div className={styles.body}>
      <div className={styles.cover}>
        <div className={styles.box}>
          <div className={styles.imageWrappers}>
            <a href="#">
              <Image
                className={styles.img}
                src="/img/cheappizza.jpg"
                alt=""
                width={350}
                height={200}
              />
            </a>
          </div>

          <div className={styles.wrapTexts}>
            <h4>Affordable Price</h4>

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
                src="/img/freedeliver.jpg"
                alt=""
                width={350}
                height={200}
              />
            </a>
          </div>

          <div className={styles.wrapTexts}>
            <h4>Free Delivery</h4>

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
                src="/img/yum.jpg"
                alt=""
                width={350}
                height={200}
              />
            </a>
          </div>

          <div className={styles.wrapTexts}>
            <h4>Yummy Pizza</h4>

            <p>
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
              eros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
