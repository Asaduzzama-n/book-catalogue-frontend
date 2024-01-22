import HomeCarousel from "./HomeCarousel";
import HomeCategory from "./HomeCategory";
import HomeNewArrival from "./HomeNewArrival";
import HomeBestSeller from "./HomeBestSeller";

import { useGetBooksQuery } from "@/redux/features/books/booksApi";
import Loader from "@/components/shared/Loader";
import TrendingBooks from "./TrendingBooks";
import EditorsPickBooks from "./EditorsPick";

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
      <div className="  container">
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <HomeNewArrival
            books={data?.data}
            isLoading={isLoading}
          ></HomeNewArrival>
        )}
      </div>

      <div className="container  md:h-[450px] ">
        <h3 className="scroll-m-20 text-2xl my-4 font-semibold tracking-tight first:mt-0 mb-5">
          TRENDING
        </h3>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <TrendingBooks books={data?.data}></TrendingBooks>
        )}
      </div>
      <br />
      <br />
      <div className="container ">
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <HomeBestSeller books={data?.data}></HomeBestSeller>
        )}
      </div>
      <div className="container  md:h-[450px] ">
        <h3 className="scroll-m-20 text-2xl my-4 font-semibold tracking-tight first:mt-0 ">
          EDITORS PICK
        </h3>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <EditorsPickBooks books={data?.data}></EditorsPickBooks>
        )}
      </div>
      {/* 
      <div className="py-5 container">
        <Event></Event>
      </div> */}
    </div>
  );
}
