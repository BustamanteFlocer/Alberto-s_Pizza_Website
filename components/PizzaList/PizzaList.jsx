import styles from "@/components/PizzaList/PizzaList.module.css";
import PizzaCard from "../PizzaCard/PizzaCard";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const PizzaList = ({ pizzaList }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-aos="fade-up">
        DOUGH-LICIOUS
      </h1>
      <p className={styles.desc} data-aos="fade-up" data-aos-delay="500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper} data-aos="fade-up" data-aos-delay="500">
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
