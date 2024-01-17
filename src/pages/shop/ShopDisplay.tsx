import BookCard from "@/components/shared/cards/BookCard";

import { IBook } from "@/types/globalTypes";
import Loader from "@/components/shared/Loader";
import { useGetFilteredBooksQuery } from "@/redux/features/shop/shopApi";
import { useAppSelector } from "@/redux/hooks";

export default function ShopDisplay() {
  // const { data, isLoading } = useGetBooksQuery(undefined);
  const { language, category, minPrice, maxPrice } = useAppSelector(
    (state) => state.shop
  );

  const { data, isLoading } = useGetFilteredBooksQuery({
    language,
    category,
    minPrice,
    maxPrice,
  });
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
