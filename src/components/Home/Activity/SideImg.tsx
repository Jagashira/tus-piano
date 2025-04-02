import Image from "next/image";
import styles from "@/styles/Home/HomeActivity.module.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  const images = [
    { img: "/img/slider/1.jpg" },
    { img: "/img/slider/2.jpg" },
    { img: "/img/slider/3.jpg" },
    { img: "/img/slider/4.jpg" },
    { img: "/img/slider/5.jpg" },
  ];

  const slideSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  return (
    <Swiper
      modules={[Autoplay]}
      breakpoints={slideSettings} // slidesPerViewを指定
      slidesPerView={"auto"} // ハイドレーションエラー対策
      centeredSlides={true} // スライドを中央に配置
      loop={true} // スライドをループさせる
      speed={1000} // スライドが切り替わる時の速度
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }} // スライド表示時間
      className={styles.sliderContainer}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.img}
            alt="Slider Image"
            sizes="(min-width: 1024px) 100vw, 60vw"
            className={styles.imgContainer}
            fill
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
