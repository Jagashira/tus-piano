import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "@/styles/Home/HomeActivity.module.css";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "/img/slider/1.jpg",
    },
    {
      url: "/img/slider/2.jpg",
    },
    {
      url: "/img/slider/3.jpg",
    },

    {
      url: "/img/slider/4.jpg",
    },
    {
      url: "/img/slider/5.jpg",
    },
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 10000);
  // });

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className={styles.imgContainer}
      ></div>
      {/* Left Arrow */}
      <div className={styles.leftArrow}>
        <button onClick={prevSlide}>
          <Icon
            icon="material-symbols:arrow-back-ios-rounded"
            className={styles.icon}
          />
        </button>
      </div>
      {/* Right Arrow */}
      <div className={styles.rightArrow}>
        <button onClick={nextSlide}>
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            className={styles.icon}
          />
        </button>
      </div>
    </div>
  );
}

export default Slider;
