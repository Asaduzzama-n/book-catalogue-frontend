import HomeCarousel from "./HomeCarousel";
import HomeCategory from "./HomeCategory";
import HomeNewArrival from "./HomeNewArrival";
import HomeBestSeller from "./HomeBestSeller";
import Event from "./Event";
import { showToast } from "@/utils/carousel/customToast/CustomToast";

export default function Home() {
  const handleAddToCart = (message: string) => {
    showToast(message.slice(0, 15) + "...");
  };
  return (
    <div>
      <div>
        <HomeCarousel></HomeCarousel>
      </div>

      <div className="hidden md:flex visible md:w-4/5 mx-auto my-10">
        <HomeCategory></HomeCategory>
      </div>
      <div className="md:w-4/5 mx-auto my-10">
        <HomeNewArrival handleAddToCart={handleAddToCart}></HomeNewArrival>
      </div>
      <div className="mx-auto my-10 bg-[#ededed]">
        <HomeBestSeller handleAddToCart={handleAddToCart}></HomeBestSeller>
      </div>

      <div>
        <Event></Event>
      </div>
    </div>
  );
}
