import HomeCarousel from "./HomeCarousel";
import HomeCategory from "./HomeCategory";
import HomeNewArrival from "./HomeNewArrival";
import HomeBestSeller from "./HomeBestSeller";
import Event from "./Event";
import { showToast } from "@/utils/carousel/customToast/CustomToast";
import Subscription from "./Subscription";

export default function Home() {
  const handleAddToCart = (message: string) => {
    showToast(message.slice(0, 15) + "...");
  };
  return (
    <div className="">
      <div>
        <HomeCarousel></HomeCarousel>
      </div>

      <div className="hidden md:flex visible md:w-4/5 mx-auto container">
        <HomeCategory></HomeCategory>
      </div>
      <div className=" py-5 container">
        <HomeNewArrival handleAddToCart={handleAddToCart}></HomeNewArrival>
      </div>
      <div className="py-5 ">
        <Subscription></Subscription>
      </div>
      <div className="container">
        <HomeBestSeller handleAddToCart={handleAddToCart}></HomeBestSeller>
      </div>

      <div className="py-5 container">
        <Event></Event>
      </div>
    </div>
  );
}
