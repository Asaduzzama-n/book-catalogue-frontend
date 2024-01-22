import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IBook } from "@/types/globalTypes";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import BookRating from "../BookRating";
import { useGetReviewsQuery } from "@/redux/features/review/reviewsApi";
import {
  useAddToWishListMutation,
  useGetWishListQuery,
  useRemoveFromWishListMutation,
} from "@/redux/features/user/userApi";
import { toast } from "react-toastify";
import { isWishListed } from "@/helpers/wishlist-helper";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ReaderSheet } from "../reader/ReaderSheet";

interface IProps {
  book: IBook;
}

export default function BookCard(props: IProps) {
  const { book } = props;
  const { user } = useAppSelector((state) => state.user);
  const { data } = useGetReviewsQuery(book?.id);
  const { avgRating, total } = data?.data || 0;
  const dispatch = useAppDispatch();

  const [addToWishList] = useAddToWishListMutation();
  const [removeFromWishList] = useRemoveFromWishListMutation();
  const { data: wishlist } = useGetWishListQuery(user?.id as string);

  const handleAddAndRemoveFromWishlist = async (operation: string) => {
    const options = {
      data: {
        book: book?.id,
        user: user?.id,
      },
    };

    try {
      let res;
      let message;
      if (operation === "add") {
        res = await addToWishList(options).unwrap();
        message = `${book?.title} added to wishlist`;
      } else if (operation === "remove") {
        res = await removeFromWishList(options).unwrap();
        message = `${book?.title} removed from wishlist`;
      }
      toast.success(message || res?.message);
      console.log(res?.data);
    } catch (error) {
      //@ts-ignore
      toast.error(message || res?.message);
    }
  };

  return (
    <div className="relative mx-5  group  h-[550px] md:h-[460px] rounded-lg   ">
      <div className="h-[450px] md:h-[350px] relative">
        <Link to={`/details/${book.id}`}>
          {" "}
          <img
            className="w-full h-full rounded-t-md cursor-pointer "
            src={book.coverImg.url}
            alt="book"
          />
        </Link>
        {user?.userBooks?.includes(book?.id) ? (
          <Link to={"/library/books"}>
            <button className="absolute bottom-0 left-0 right-0 md:opacity-0 transition-all duration-300 group-hover:opacity-100 bg-primary p-2 w-full text-white  font-medium hover:bg-secondary">
              View in my books
            </button>
          </Link>
        ) : (
          <button
            onClick={() => dispatch(addToCart(book))}
            className="absolute bottom-0 left-0 right-0 md:opacity-0 transition-all duration-300 group-hover:opacity-100 bg-primary p-2 w-full text-white  font-medium hover:bg-secondary"
          >
            Add to Cart
          </button>
        )}

        <ReaderSheet
          book={book}
          triggerButton={
            <button className="absolute top-2 right-2 md:opacity-0 rounded-full transition-all duration-300 group-hover:opacity-100 bg-white p-2 text-primary  font-medium  ">
              <IoEyeOutline size={20} />
            </button>
          }
        ></ReaderSheet>

        {isWishListed(wishlist?.data, book?.id) ? (
          <button
            onClick={() => handleAddAndRemoveFromWishlist("remove")}
            className="absolute top-14 right-2 md:opacity-0 rounded-full transition-all duration-300 group-hover:opacity-100 bg-customBG p-2 text-primary  "
          >
            <AiFillHeart size={20} />
          </button>
        ) : (
          <button
            onClick={() => handleAddAndRemoveFromWishlist("add")}
            className="absolute top-14 right-2 md:opacity-0 rounded-full transition-all duration-300 group-hover:opacity-100 bg-customBG p-2  text-primary  "
          >
            <AiOutlineHeart size={20} />
          </button>
        )}
      </div>
      <div className=" p-2 ">
        <p className="font-medium text-sm">{book.title.split("(")[0]}</p>
        <div className="absolute bottom-8">
          <BookRating rating={avgRating} total={total}></BookRating>
        </div>
        <div className="absolute bottom-2">
          <span className="font-medium ">{book.price}</span>
        </div>
      </div>
    </div>
  );
}
