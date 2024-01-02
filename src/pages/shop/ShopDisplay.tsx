import BookCard from "@/components/shared/cards/BookCard";
import { useGetBooksQuery } from "@/redux/features/books/booksApi";
import { IBook } from "@/types/globalTypes";
import Loader from "@/components/shared/Loader";

export default function ShopDisplay() {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books: IBook[] = data?.data;
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader></Loader>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {books?.map((book, index) => (
            <BookCard book={book} key={index}></BookCard>
          ))}
        </div>
      )}
    </div>
  );
}
