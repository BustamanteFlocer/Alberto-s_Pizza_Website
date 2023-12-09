import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <input type="checkbox" id={styles.checkbox} className={styles.checkbox} />

      <label className={styles.icon} htmlFor={styles.checkbox}>
        <GiHamburgerMenu className={styles.menuIcon} />
        <IoClose className={styles.closeIcon} />
      </label>
      <Image
        className={styles.img}
        src="/img/albertos.png"
        alt=""
        width="130"
        height="80"
      />

      <ul className={styles.list}>
        <Link href="/" passHref>
          <li className={styles.listItem}>Homepage</li>
        </Link>
        <Link href="/about" passHref>
          <li className={styles.listItem}>Menu</li>
        </Link>
        <Link href="/about" passHref>
          <li className={styles.listItem}>About</li>
        </Link>
        <Link href="/Contact" passHref>
          <li className={styles.listItem}>Contact</li>
        </Link>
        <Link href="/cart" passHref>
          <div className={styles.listItem}>
            <div className={styles.cart}>
              <TiShoppingCart className={styles.shoppingCart} />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
