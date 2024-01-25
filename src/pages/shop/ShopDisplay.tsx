import BookCard from "@/components/shared/cards/BookCard";

import { IBook } from "@/types/globalTypes";
import Loader from "@/components/shared/Loader";

export default function ShopDisplay(props: any) {
  const books: IBook[] = props.books;

  return (
    <div>
      {!books ? (
        <div className="flex justify-center items-center h-screen">
          <Loader></Loader>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-y-2 ">
          {books?.map((book, index) => (
            <BookCard book={book} key={index}></BookCard>
          ))}
        </div>
      )}
    </div>
  );
}
