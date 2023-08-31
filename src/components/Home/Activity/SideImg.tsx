import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

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
    <div className=" h-[80vh] w-[60vw] m-auto py-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <button onClick={prevSlide}>
          <Icon icon="material-symbols:arrow-back-ios-rounded" />
        </button>
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <button onClick={nextSlide}>
          <Icon
            icon="material-symbols:arrow-forward-ios-rounded"
            style={{ fontSize: 30 }}
          />
        </button>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
