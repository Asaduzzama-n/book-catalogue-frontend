import { IBook } from "@/types/globalTypes";
import { useGetBooksQuery } from "@/redux/features/books/booksApi";
import Carousel from "react-multi-carousel";
import { relatedBookResponsive } from "@/utils/carousel/carousel";
import Loader from "@/components/shared/Loader";
import RelatedBooksCard from "@/components/shared/cards/RelatedBooksCard";

interface IProps {
  book: IBook;
}

export default function RelatedBooks(props: IProps) {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books: IBook[] = data?.data.filter(
    (data: IBook) =>
      data?.category === props?.book?.category ||
      data?.author?.author1?.name?.firstName ===
        props?.book?.author?.author1?.name
  );

  return (
    <div className=" my-5">
      <Carousel
        className="z-0"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        swipeable={true}
        responsive={relatedBookResponsive}
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-20">
            <Loader></Loader>
          </div>
        ) : (
          books?.map((book, index) => (
            <RelatedBooksCard book={book} key={index}></RelatedBooksCard>
          ))
        )}
      </Carousel>
    </div>
  );
}
