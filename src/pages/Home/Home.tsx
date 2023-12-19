import HomeCarousel from "./HomeCarousel";
import HomeCategory from "./HomeCategory";
import HomeNewArrival from "./HomeNewArrival";
import HomeBestSeller from "./HomeBestSeller";
import Event from "./Event";
import Subscription from "./Subscription";
import { books } from "../../../public/dummyData";

export default function Home() {
  return (
    <div className="">
      <div>
        <HomeCarousel></HomeCarousel>
      </div>

      <div className="hidden md:flex visible md:w-4/5 mx-auto container">
        <HomeCategory></HomeCategory>
      </div>
      <div className=" py-5 container">
        <HomeNewArrival books={books}></HomeNewArrival>
      </div>
      <div className="py-5 ">
        <Subscription></Subscription>
      </div>
      <div className="container">
        <HomeBestSeller books={books}></HomeBestSeller>
      </div>

      <div className="py-5 container">
        <Event></Event>
      </div>
    </div>
  );
}
