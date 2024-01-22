import { IBook } from "@/types/globalTypes";
import BookRating from "../BookRating";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}

export default function RelatedBooksCard(props: IProps) {
  const { book } = props;
  return (
    <Link to={`/details/${book.id}`}>
      <div className="mx-auto w-3/5 h-[350px]   rounded-md relative">
        <div className="">
          <img className="h-52  my-2" src={book.coverImg.url} alt="" />
        </div>
        <div className="px-2 text-sm  break-normal ">
          <p className="">
            {book?.title.length >= 15 ? book.title.split("(")[0] : book?.title}
          </p>
          <div className="absolute bottom-10 md:bottom-8">
            <BookRating rating={3.5} total={23}></BookRating>
          </div>

          <p className="absolute bottom-4 md:bottom-2">{book?.price}</p>
        </div>
      </div>
    </Link>
  );
}
