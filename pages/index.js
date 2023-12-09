import axios from "axios";
import Head from "next/head";
import styles from "../styles/page.module.css";
import Featured from "../components/Featured";
import MySwiper from "../components/MySwiper";
import PizzaList from "../components/PizzaList";
import { useState } from "react";
import Add from "@/components/Add";
import AddButton from "@/components/AddButton";
import Contact from "./Contact";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <MySwiper />
      <Contact />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
