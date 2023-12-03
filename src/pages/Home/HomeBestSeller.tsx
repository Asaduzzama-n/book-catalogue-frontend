import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/utils/carousel/carousel";
import { Link } from "react-router-dom";
import { dummy } from "../../../public/dummyData";
import BookCard from "@/components/shared/cards/BookCard";
interface IProps {
  handleAddToCart: (message: string) => void;
}

export default function HomeBestSeller({ handleAddToCart }: IProps) {
  return (
    <div className="text-center ">
      <div className="text-center p-5">
        <h1 className="text-4xl font-medium">BEST SELLERS</h1>
      </div>

      <div className="my-10">
        <div className="w-11/12 md:w-3/4 mx-auto">
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
        <div className="mt-10 border-b-2 border-yellow-600 w-60 mx-auto">
          <Link
            className="text-[#232F3E] hover:text-yellow-600 text-lg font-medium "
            to={"/"}
          >
            VIEW ALL BESTSELLERS
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}
