import Footer from "@/components/shared/footer/Footer";
import NavBar from "@/components/shared/header/NavBar";
import { Outlet } from "react-router-dom";
import { BiArrowToTop } from "react-icons/bi";

export default function Main() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <div className="fixed bottom-4 right-4 z-10">
        <button
          onClick={scrollToTop}
          className="h-10 w-10 bg-primary dark:bg-customBG rounded-full flex items-center justify-center text-white dark:text-primary"
        >
          <BiArrowToTop size={30} />
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}
