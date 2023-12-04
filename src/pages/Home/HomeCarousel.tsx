import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HomeCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-60  md:h-[400px] "
      >
        <SwiperSlide>
          <img
            className="w-full"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
