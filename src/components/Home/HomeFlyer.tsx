import Image from "next/image";
import { TypingText } from "../other/TypingText";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeFlyer = () => {
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

  const images = [
    { img: "/img/flyer/20250401.jpg", publishedAt: "2025/04/01" },
    { img: "/img/flyer/20250215.jpeg", publishedAt: "2024/02/01" },
    { img: "/img/flyer/20241222.jpeg", publishedAt: "2024/12/22" },
    { img: "/img/flyer/20241117flyer.jpeg", publishedAt: "2024/11/17" },
    { img: "/img/flyer/20241112flyer.jpeg", publishedAt: "2024/11/12" },
    { img: "/img/flyer/20241005flyer.jpeg", publishedAt: "2024/10/05" },
  ];

  return (
    <div className="mt-20">
      <TypingText title={"Flyer"} textStyles="text-center text-[36px]" />
      <TypingText
        title={"新入生に向けて"}
        textStyles="text-center text-[13px] "
      />

      <div className="w-100 mt-10 mr-2 ml-2 pb-20 text-center">
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={slideSettings} // slidesPerViewを指定
          slidesPerView={"auto"} // ハイドレーションエラー対策
          centeredSlides={true} // スライドを中央に配置
          loop={true} // スライドをループさせる
          speed={1000} // スライドが切り替わる時の速度
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }} // スライド表示時間
          navigation // ナビゲーション（左右の矢印）
          pagination={{
            clickable: true,
          }} // ページネーション, クリックで対象のスライドに切り替わる
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="pb-7">
              <Image
                src={image.img}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className=" m-auto oobject-cover"
                alt="Picture of the author"
              />
              <p className="text-center">{image.publishedAt}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeFlyer;
