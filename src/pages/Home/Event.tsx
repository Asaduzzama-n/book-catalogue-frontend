// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { dummy } from "../../../public/dummyData";
import { Link } from "react-router-dom";

export default function Event() {
  return (
    <div className="my-10">
      <div className="text-center text-3xl font-medium mb-10">
        <h2>EVENTS AND NEWS</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {dummy.map((data) => (
          <div>
            <SwiperSlide className="">
              <Link to={""}>
                <div className=" h-[250px] light:bg-[#ededed] rounded-md flex justify-between p-5 hover:translate-y-2 tra">
                  <div className="w-2/3">
                    <p className="text-lg font-medium">{data?.title}</p>
                    <hr className="h-1 w-4/5 light:bg-[#232F3E] dark:bg-white rounded-md" />
                    <p className="mt-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Enim, hic!
                    </p>
                  </div>
                  <div className="w-2/6">
                    <img
                      className="w-full h-full rounded-md"
                      src={data?.img}
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
