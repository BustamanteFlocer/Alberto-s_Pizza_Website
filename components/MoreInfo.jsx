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
  );
};

export default MoreInfo;
