import HomeCarousel from "./HomeCarousel";
import { BiArrowToTop } from "react-icons/bi";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <HomeCarousel></HomeCarousel>
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
