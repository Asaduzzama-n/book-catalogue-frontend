import { IBook } from "@/types/globalTypes";
import BookRating from "../BookRating";

interface IProps {
  book: IBook;
}

export default function RelatedBooksCard(props: IProps) {
  const { book } = props;
  return (
    <div className="mx-auto w-3/5  rounded-md">
      <div className="">
        <img className="h-52 w-fit my-2" src={book.coverImg.url} alt="" />
      </div>
      <div>
        <p>
          {book?.title.length >= 15
            ? book.title.substring(0, 15) + " ..."
            : book?.title}
        </p>
        <p>Author Name</p>
        <p>{book?.author?.author1?.name?.firstName}</p>
        <BookRating rating={3.5} total={23}></BookRating>
        <p>{book?.price}</p>
      </div>
    </div>
  );
}
