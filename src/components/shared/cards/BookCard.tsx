import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IBook } from "@/types/globalTypes";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}

export default function BookCard(props: IProps) {
  const { book } = props;
  const dispatch = useAppDispatch();
  return (
    <div className="relative mx-auto w-3/5 md:w-4/5 group bg-customBG dark:bg-primary rounded-md ">
      <div className="relative  h-[400px] md:h-[350px] ">
        <Link to={`/details/:${book.title}`}>
          {" "}
          <img
            className="w-full h-full rounded-t-md cursor-pointer group-hover:opacity-80"
            src={book.coverImg.url}
            alt="book"
          />
        </Link>
        <button
          onClick={() => dispatch(addToCart(book))}
          className="absolute bottom-0 left-0 right-0 md:opacity-0 transition-all duration-300 group-hover:opacity-100 bg-primary p-2 w-full text-white  font-medium hover:bg-secondary"
        >
          Add to Cart
        </button>
        <button className="absolute top-2 right-2 md:opacity-0 rounded-full transition-all duration-300 group-hover:opacity-100 bg-primary p-2 text-white  font-medium hover:bg-secondary ">
          <IoEyeOutline />
        </button>
      </div>
      <div className="mt-1 p-2">
        <div className="text-start">
          <p className="font-medium">{book.title}</p>
          <div className="flex">
            <span>4.4</span>
            <span className="ml-5">{book.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
