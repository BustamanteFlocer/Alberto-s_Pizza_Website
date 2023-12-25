import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import styles from "@/components/Clients/Client.module.css";
import ClientSlider from "../ClientSlider/ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

let clients = [
  {
    name: "John Michel",
    position: "web developer",
    img_url: "/img/ALOHAPIZZA.png",
    stars: 3,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },

  {
    name: "John Michel",
    position: "web developer",
    img_url: "/img/MEATZZA.png",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
  {
    name: "John Michel",
    position: "web developer",
    img_url: "/img/HAM&CHEESE.png",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },

  {
    name: "John Michel",
    position: "web developer",
    img_url: "/img/bg.png",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },

  {
    name: "John Michel",
    position: "web developer",
    img_url: "/img/pizza.png",
    stars: 5,
    disc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`,
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <div className={styles.container} id="client">
      <div data-aos="fade-left">
        <h3>our testimonials</h3>
        <h1 className={styles.h1}>What Our Customers are Saying!</h1>
      </div>
      <div className={styles.testimonials}>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => arrowRef.current.slickPrev()}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={styles.button}
            onClick={() => arrowRef.current.slickNext()}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
