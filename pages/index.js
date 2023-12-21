import axios from "axios";
import Head from "next/head";
import styles from "../styles/page.module.css";
import Featured from "../components/Featured";
import MySwiper from "../components/MySwiper";
import PizzaList from "../components/PizzaList";
import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import OurStory from "@/components/OurStory";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuParallax from "@/components/MenuParallax";
import MoreInfo from "@/components/MoreInfo";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Featured />
      <OurStory />
      <MoreInfo />
      <MySwiper />
      <MenuParallax />
      <PizzaList pizzaList={pizzaList} />

      <Clients />
      <ContactUs />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
