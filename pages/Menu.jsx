import React from "react";
import styles from "../styles/Menu.module.css";
import Navbar from "@/components/Navbar";
import PizzaList from "@/components/PizzaList";
import Footer from "@/components/Footer";
import axios from "axios";

const Menu = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={` ${styles.pageHeader}`}>
        <h1>Menu</h1>
      </div>
      <PizzaList pizzaList={pizzaList} />
      <Footer />
    </div>
  );
};

export default Menu;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
