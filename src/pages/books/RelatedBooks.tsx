import BookCard from "@/components/shared/cards/BookCard";
import { books } from "../../../public/dummyData";
import { useAppDispatch } from "@/redux/hooks";
import { IBook } from "@/types/globalTypes";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { showToast } from "@/utils/carousel/customToast/CustomToast";

export default function RelatedBooks() {
  const dispatch = useAppDispatch();

  const handleAddToCart = (book: IBook) => {
    dispatch(addToCart(book));
    showToast(book.title.slice(0, 15) + "...");
  };
  return (
    <div className="min-h-screen">
      <div className="my-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
        {books.map((book, index) => (
          <BookCard
            handleAddToCart={handleAddToCart}
            book={book}
            key={index}
          ></BookCard>
        ))}
      </div>
    </div>
  );
}
