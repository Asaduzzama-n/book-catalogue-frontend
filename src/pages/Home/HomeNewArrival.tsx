import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/utils/carousel/carousel";
import { Link } from "react-router-dom";
import BookCard from "@/components/shared/cards/BookCard";
import { FaArrowRight } from "react-icons/fa";
import { IBook } from "@/types/globalTypes";
import Loader from "@/components/shared/Loader";
import { useTranslation } from "react-i18next";


interface IProps {
  books: IBook[];
  isLoading: boolean;
}

export default function HomeNewArrival(props: IProps) {

  const {t} = useTranslation();

  const { books, isLoading } = props;
  if (isLoading) {
    <Loader></Loader>;
  }
  return (
    <div className="my-10">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between my-5">
        <h2 className="scroll-m-20 my-4   text-2xl  font-semibold tracking-tight first:mt-0">
         {t("new_arrival")}
        </h2>
        <div className="flex px-2 w-32 h-10 rounded-lg items-center hover:opacity-90">
          <Link
            className="mx-2 text-sm  font-medium text-primary dark:text-white"
            to={`/shop`}
          >
            {t("view_more")}
          </Link>
          <FaArrowRight size={12} className="text-primary dark:text-white" />
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
          {books?.map((book, index) => (
            <BookCard book={book} key={index}></BookCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
