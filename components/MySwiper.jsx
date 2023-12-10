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
      <div className={`${styles.spacer} ${styles.layer1}`}>
        <svg
          id="visual"
          viewBox="0 0 900 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 106L11.5 109C23 112 46 118 69 120.3C92 122.7 115 121.3 138.2 117.8C161.3 114.3 184.7 108.7 207.8 108.2C231 107.7 254 112.3 277 116.2C300 120 323 123 346 121.2C369 119.3 392 112.7 415.2 110.2C438.3 107.7 461.7 109.3 484.8 110.5C508 111.7 531 112.3 554 115.7C577 119 600 125 623 125.7C646 126.3 669 121.7 692.2 117.5C715.3 113.3 738.7 109.7 761.8 109.2C785 108.7 808 111.3 831 112.2C854 113 877 112 888.5 111.5L900 111L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
            fill="#ff9729"
          ></path>
          <path
            d="M0 91L11.5 93.2C23 95.3 46 99.7 69 100.3C92 101 115 98 138.2 98.2C161.3 98.3 184.7 101.7 207.8 102.8C231 104 254 103 277 100.2C300 97.3 323 92.7 346 92.2C369 91.7 392 95.3 415.2 93.7C438.3 92 461.7 85 484.8 82C508 79 531 80 554 82.7C577 85.3 600 89.7 623 89C646 88.3 669 82.7 692.2 83.8C715.3 85 738.7 93 761.8 96.2C785 99.3 808 97.7 831 94.8C854 92 877 88 888.5 86L900 84L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
            fill="#ffb162"
          ></path>
          <path
            d="M0 60L11.5 64C23 68 46 76 69 75.8C92 75.7 115 67.3 138.2 66.3C161.3 65.3 184.7 71.7 207.8 75.3C231 79 254 80 277 78.2C300 76.3 323 71.7 346 68.5C369 65.3 392 63.7 415.2 62.7C438.3 61.7 461.7 61.3 484.8 60.5C508 59.7 531 58.3 554 60.7C577 63 600 69 623 73C646 77 669 79 692.2 80.2C715.3 81.3 738.7 81.7 761.8 77.7C785 73.7 808 65.3 831 62.7C854 60 877 63 888.5 64.5L900 66L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
            fill="#ffc995"
          ></path>
          <path
            d="M0 59L11.5 55.7C23 52.3 46 45.7 69 45C92 44.3 115 49.7 138.2 49C161.3 48.3 184.7 41.7 207.8 38.3C231 35 254 35 277 36C300 37 323 39 346 39.3C369 39.7 392 38.3 415.2 38C438.3 37.7 461.7 38.3 484.8 42C508 45.7 531 52.3 554 52.7C577 53 600 47 623 46C646 45 669 49 692.2 50.2C715.3 51.3 738.7 49.7 761.8 49.3C785 49 808 50 831 48.8C854 47.7 877 44.3 888.5 42.7L900 41L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
            fill="#ffe2c8"
          ></path>
          <path
            d="M0 36L11.5 32.7C23 29.3 46 22.7 69 18.7C92 14.7 115 13.3 138.2 16C161.3 18.7 184.7 25.3 207.8 25.8C231 26.3 254 20.7 277 20C300 19.3 323 23.7 346 26.8C369 30 392 32 415.2 31.7C438.3 31.3 461.7 28.7 484.8 25.3C508 22 531 18 554 16.2C577 14.3 600 14.7 623 17.5C646 20.3 669 25.7 692.2 26C715.3 26.3 738.7 21.7 761.8 21C785 20.3 808 23.7 831 25.8C854 28 877 29 888.5 29.5L900 30L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
            fill="#fcfcfc"
          ></path>
        </svg>
      </div>
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
      <div className={`${styles.spacer} ${styles.layer1}`}>
        <svg
          className={styles.spacerBottom}
          id="visual"
          viewBox="0 0 900 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 42L11.5 39C23 36 46 30 69 27.7C92 25.3 115 26.7 138.2 30.2C161.3 33.7 184.7 39.3 207.8 39.8C231 40.3 254 35.7 277 31.8C300 28 323 25 346 26.8C369 28.7 392 35.3 415.2 37.8C438.3 40.3 461.7 38.7 484.8 37.5C508 36.3 531 35.7 554 32.3C577 29 600 23 623 22.3C646 21.7 669 26.3 692.2 30.5C715.3 34.7 738.7 38.3 761.8 38.8C785 39.3 808 36.7 831 35.8C854 35 877 36 888.5 36.5L900 37L900 151L888.5 151C877 151 854 151 831 151C808 151 785 151 761.8 151C738.7 151 715.3 151 692.2 151C669 151 646 151 623 151C600 151 577 151 554 151C531 151 508 151 484.8 151C461.7 151 438.3 151 415.2 151C392 151 369 151 346 151C323 151 300 151 277 151C254 151 231 151 207.8 151C184.7 151 161.3 151 138.2 151C115 151 92 151 69 151C46 151 23 151 11.5 151L0 151Z"
            fill="#ff9729"
          ></path>
          <path
            d="M0 57L11.5 54.8C23 52.7 46 48.3 69 47.7C92 47 115 50 138.2 49.8C161.3 49.7 184.7 46.3 207.8 45.2C231 44 254 45 277 47.8C300 50.7 323 55.3 346 55.8C369 56.3 392 52.7 415.2 54.3C438.3 56 461.7 63 484.8 66C508 69 531 68 554 65.3C577 62.7 600 58.3 623 59C646 59.7 669 65.3 692.2 64.2C715.3 63 738.7 55 761.8 51.8C785 48.7 808 50.3 831 53.2C854 56 877 60 888.5 62L900 64L900 151L888.5 151C877 151 854 151 831 151C808 151 785 151 761.8 151C738.7 151 715.3 151 692.2 151C669 151 646 151 623 151C600 151 577 151 554 151C531 151 508 151 484.8 151C461.7 151 438.3 151 415.2 151C392 151 369 151 346 151C323 151 300 151 277 151C254 151 231 151 207.8 151C184.7 151 161.3 151 138.2 151C115 151 92 151 69 151C46 151 23 151 11.5 151L0 151Z"
            fill="#ffb162"
          ></path>
          <path
            d="M0 88L11.5 84C23 80 46 72 69 72.2C92 72.3 115 80.7 138.2 81.7C161.3 82.7 184.7 76.3 207.8 72.7C231 69 254 68 277 69.8C300 71.7 323 76.3 346 79.5C369 82.7 392 84.3 415.2 85.3C438.3 86.3 461.7 86.7 484.8 87.5C508 88.3 531 89.7 554 87.3C577 85 600 79 623 75C646 71 669 69 692.2 67.8C715.3 66.7 738.7 66.3 761.8 70.3C785 74.3 808 82.7 831 85.3C854 88 877 85 888.5 83.5L900 82L900 151L888.5 151C877 151 854 151 831 151C808 151 785 151 761.8 151C738.7 151 715.3 151 692.2 151C669 151 646 151 623 151C600 151 577 151 554 151C531 151 508 151 484.8 151C461.7 151 438.3 151 415.2 151C392 151 369 151 346 151C323 151 300 151 277 151C254 151 231 151 207.8 151C184.7 151 161.3 151 138.2 151C115 151 92 151 69 151C46 151 23 151 11.5 151L0 151Z"
            fill="#ffc995"
          ></path>
          <path
            d="M0 89L11.5 92.3C23 95.7 46 102.3 69 103C92 103.7 115 98.3 138.2 99C161.3 99.7 184.7 106.3 207.8 109.7C231 113 254 113 277 112C300 111 323 109 346 108.7C369 108.3 392 109.7 415.2 110C438.3 110.3 461.7 109.7 484.8 106C508 102.3 531 95.7 554 95.3C577 95 600 101 623 102C646 103 669 99 692.2 97.8C715.3 96.7 738.7 98.3 761.8 98.7C785 99 808 98 831 99.2C854 100.3 877 103.7 888.5 105.3L900 107L900 151L888.5 151C877 151 854 151 831 151C808 151 785 151 761.8 151C738.7 151 715.3 151 692.2 151C669 151 646 151 623 151C600 151 577 151 554 151C531 151 508 151 484.8 151C461.7 151 438.3 151 415.2 151C392 151 369 151 346 151C323 151 300 151 277 151C254 151 231 151 207.8 151C184.7 151 161.3 151 138.2 151C115 151 92 151 69 151C46 151 23 151 11.5 151L0 151Z"
            fill="#ffe2c8"
          ></path>
          <path
            d="M0 112L11.5 115.3C23 118.7 46 125.3 69 129.3C92 133.3 115 134.7 138.2 132C161.3 129.3 184.7 122.7 207.8 122.2C231 121.7 254 127.3 277 128C300 128.7 323 124.3 346 121.2C369 118 392 116 415.2 116.3C438.3 116.7 461.7 119.3 484.8 122.7C508 126 531 130 554 131.8C577 133.7 600 133.3 623 130.5C646 127.7 669 122.3 692.2 122C715.3 121.7 738.7 126.3 761.8 127C785 127.7 808 124.3 831 122.2C854 120 877 119 888.5 118.5L900 118L900 151L888.5 151C877 151 854 151 831 151C808 151 785 151 761.8 151C738.7 151 715.3 151 692.2 151C669 151 646 151 623 151C600 151 577 151 554 151C531 151 508 151 484.8 151C461.7 151 438.3 151 415.2 151C392 151 369 151 346 151C323 151 300 151 277 151C254 151 231 151 207.8 151C184.7 151 161.3 151 138.2 151C115 151 92 151 69 151C46 151 23 151 11.5 151L0 151Z"
            fill="#fcfcfc"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default MySwiper;
