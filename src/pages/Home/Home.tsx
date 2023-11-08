import HomeCarousel from "./HomeCarousel";
import { BiArrowToTop } from "react-icons/bi";
import HomeCategory from "./HomeCategory";
import HomeNewArrival from "./HomeNewArrival";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Home() {
  return (
    <div>
      <div>
        <HomeCarousel></HomeCarousel>
      </div>
      <div className="hidden md:flex visible md:w-4/5 mx-auto ">
        <HomeCategory></HomeCategory>
      </div>
      <div className="md:w-4/5 mx-auto">
        <HomeNewArrival></HomeNewArrival>
      </div>

      <div className="fixed bottom-4 right-4 z-10">
        <button
          onClick={scrollToTop}
          className="h-10 w-10 bg-[#C89949] rounded-full flex items-center justify-center text-white"
        >
          <BiArrowToTop size={30} />
        </button>
      </div>
    </div>
  );
}
