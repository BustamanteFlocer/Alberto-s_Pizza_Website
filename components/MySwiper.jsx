import React from "react";
import styles from "../styles/Swiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdStar } from "react-icons/io";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const MySwiper = () => {
  return (
    <div className={styles.container}>
      <h3 className={`${styles.textCenter} ${styles.sectionSubheading}`}>
        - Popular Delivery -
      </h3>
      <h1 className={`${styles.textCenter} ${styles.sectionHeading}`}>
        Trending Food
      </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: `.${styles.swiperPagination}`, clickable: true }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/tranding-food-1.png"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>$20</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Special Pizza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/tranding-food-2.png"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>$20</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Special Pizza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/tranding-food-3.png"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>$20</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Special Pizza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/tranding-food-4.png"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>$20</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Special Pizza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/tranding-food-5.png"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>$20</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Special Pizza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/tranding-food-6.png"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>$20</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Special Pizza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            className={styles.img}
            src="/img/tranding-food-5.png"
            alt=""
            width="170"
            height="220"
          />
          <div className={styles.trandingSlideContent}>
            <h1 className={styles.foodPrice}>$20</h1>
            <div className={styles.trandingSlideContentBottom}>
              <h2 className={styles.foodName}>Special Pizza</h2>
              <h3 className={styles.foodRating}>
                <span>4.5</span>
                <div className={styles.rating}>
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                  <IoMdStar className={styles.star} />
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={styles.sliderControler}>
        <div
          className={`${styles.swiperButtonPrev} ${styles.sliderArrow}`}
        ></div>
        <div
          className={`${styles.swiperButtonNext} ${styles.sliderArrow}`}
        ></div>
        <div className={styles.swiperPagination}></div>
      </div>
    </div>
  );
};

export default MySwiper;
