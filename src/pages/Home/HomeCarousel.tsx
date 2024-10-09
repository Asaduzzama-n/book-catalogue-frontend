import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bookC1 from "../../assets/images/book1.jpg";
import bookC2 from "../../assets/images/book2.jpg";
import bookC3 from "../../assets/images/book3.jpg";

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
          <img className="w-full" src={bookC1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={bookC2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={bookC3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
