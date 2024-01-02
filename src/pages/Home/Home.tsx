import HomeCarousel from "./HomeCarousel";
import HomeCategory from "./HomeCategory";
import HomeNewArrival from "./HomeNewArrival";
import HomeBestSeller from "./HomeBestSeller";
import Event from "./Event";
import Subscription from "./Subscription";
import { useGetBooksQuery } from "@/redux/features/books/booksApi";
import Loader from "@/components/shared/Loader";

export default function Home() {
  const { data, isLoading } = useGetBooksQuery(undefined);
  return (
    <div className="">
      <div>
        <HomeCarousel></HomeCarousel>
      </div>

      <div className="hidden md:flex visible md:w-4/5 mx-auto container">
        <HomeCategory></HomeCategory>
      </div>
      <div className=" py-5 container">
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <HomeNewArrival
            books={data?.data}
            isLoading={isLoading}
          ></HomeNewArrival>
        )}
      </div>
      <div className="py-5 ">
        <Subscription></Subscription>
      </div>
      <div className="container">
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <HomeBestSeller books={data?.data}></HomeBestSeller>
        )}
      </div>

      <div className="py-5 container">
        <Event></Event>
      </div>
    </div>
  );
}
