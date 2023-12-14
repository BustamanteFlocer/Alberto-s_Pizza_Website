import Image from "next/image";
import styles from "../styles/NavAdmin.module.css";
import { LiaTwitter } from "react-icons/lia";
import Link from "next/link";

const NavAdmin = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <Link href="/dashboard" passHref>
            <li>
              <div className={`${styles.logo} `}>
                <Image
                  className={styles.img}
                  src="/img/featured1.png"
                  alt=""
                  height="45"
                  width="45"
                />
                <span className={styles.navItem}>Admin</span>
              </div>
            </li>
          </Link>
          <Link href="/dashboard" passHref>
            <li>
              <div className={styles.a}>
                <LiaTwitter className={styles.icons} />
                <span className={styles.navItem}>Menu</span>
              </div>
            </li>
          </Link>
          <Link href="/AdminOrders" passHref>
            <li>
              <div className={styles.a}>
                <LiaTwitter className={styles.icons} />
                <span className={styles.navItem}>Orders</span>
              </div>
            </li>
          </Link>
          <Link href="/AdminAdd" passHref>
            <li>
              <div className={styles.a}>
                <LiaTwitter className={styles.icons} />
                <span className={styles.navItem}>Add Menu</span>
              </div>
            </li>
          </Link>
          <Link href="/admin/login" passHref>
            <li>
              <div className={`${styles.logout}`}>
                <LiaTwitter className={styles.icons} />
                <span className={styles.navItem}>Log out</span>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavAdmin;
