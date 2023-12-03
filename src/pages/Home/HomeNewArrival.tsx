import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/utils/carousel/carousel";
import { Link } from "react-router-dom";
import { dummy } from "../../../public/dummyData";
import BookCard from "@/components/shared/cards/BookCard";
import { FaArrowRight } from "react-icons/fa";

interface IProps {
  handleAddToCart: (message: string) => void;
}

export default function HomeNewArrival({ handleAddToCart }: IProps) {
  return (
    <div className="my-10">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between mx-10 my-5">
        <h2 className="scroll-m-20 my-4   text-3xl  font-semibold tracking-tight first:mt-0">
          NEW ARRIVAL
        </h2>
        <div className="flex bg-primary px-2 w-32 h-10 rounded-lg items-center">
          <Link className="mx-2 text-sm font-medium text-white" to={`/shop`}>
            VIEW MORE
          </Link>
          <FaArrowRight className="text-white" />
        </div>
      </div>
      <div className=" ">
        <Carousel
          className="z-0"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          swipeable={true}
          // infinite={true}
          responsive={responsive}
        >
          {dummy.map((data, index) => (
            <BookCard data={data} key={index}></BookCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
