import Breadcrumb from "@/components/shared/Breadcrumb";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

import BookMetaData from "./BookMetaData";
import BookInfo from "./BookInfo";
import RelatedBooks from "./RelatedBooks";
import { useGetSingleBookQuery } from "@/redux/features/books/booksApi";
import { IBook } from "@/types/globalTypes";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import DisplayReviewAndRating from "./review/DisplayReviewAndRating";
import {
  useAddToWishListMutation,
  useGetWishListQuery,
  useRemoveFromWishListMutation,
} from "@/redux/features/user/userApi";
import { toast } from "react-toastify";
import { isWishListed } from "@/helpers/wishlist-helper";

import BookRating from "@/components/shared/BookRating";
import { useGetReviewsQuery } from "@/redux/features/review/reviewsApi";
import { isBookBought } from "@/helpers/isBookBuy-helper";
import { LiaReadme } from "react-icons/lia";
import Loader from "@/components/shared/Loader";

export default function BookDetails() {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
  const { user } = useAppSelector((state) => state.user);
  const book: IBook = data?.data;

  const breadcrumbPaths = [
    { label: "Details", url: `/details/${book?.id}` },
    { label: `${book?.title.split("(")[0]}`, url: `/details/${book?.id}` },
  ];

  const [addToWishList] = useAddToWishListMutation();
  const [removeFromWishList] = useRemoveFromWishListMutation();
  const { data: wishlist } = useGetWishListQuery(user?.id as string);

  const { data: review } = useGetReviewsQuery(book?.id);
  const { avgRating, total } = review?.data || 0;

  const handleAddAndRemoveFromWishlist = async (operation: string) => {
    const options = {
      data: {
        book: id,
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
    } catch (error) {
      //@ts-ignore
      toast.error(message || res?.message);
    }
  };

  return !book ? (
    <Loader></Loader>
  ) : (
    <div className="w-full container">
      <div className="grid grid-cols-1 md:grid-cols-2 p-5">
        <div className="flex justify-center items-center">
          <img className="min-h-80" src={book?.coverImg?.url} alt="" />
        </div>
        <div className="flex justify-center my-10 md:justify-start ">
          <div>
            <div className="my-4">
              <Breadcrumb paths={breadcrumbPaths} />
              <h2 className=" w-32 px-2  my-2">new Arrival</h2>
            </div>
            {/* Book info Section */}
            <div className="my-5">
              <h1 className="text-3xl font-semibold">{book?.title}</h1>
              <p className="my-2">
                <span className="font-medium">By: </span>
                {book?.author?.author1?.name.firstName}
              </p>
              <p>
                <span className="font-medium">Category: </span>
                {book?.categoryName}
              </p>
              <div className="my-5 ">
                <span className="font-medium">Description: </span>
                {book?.bookDescription}
              </div>
              <div className="my-5 flex items-center ">
                <BookRating rating={avgRating}></BookRating>{" "}
                <span className="mx-2">({total})</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">Price: {book?.price}</h3>
              </div>
            </div>
            {/* Button Section */}
            <div className="flex justify-start items-center ">
              <div className="mr-5">
                {isBookBought(user?.userBooks, book?.id) ? (
                  <Link to={"/library/books"}>
                    <button className="bg-primary dark:bg-customBG text-white dark:text-primary  font-medium p-1 md:p-2 hover:opacity-80   h-10 border  flex items-center justify-center">
                      <LiaReadme size={20} className="mr-2" />
                      Read from library
                    </button>
                  </Link>
                ) : (
                  <Link to={"/checkout"}>
                    <button
                      onClick={() => dispatch(addToCart(book))}
                      className="bg-primary dark:bg-customBG text-white dark:text-primary  font-medium p-1 md:p-2 hover:opacity-80 w-32  h-10 border  flex items-center justify-center"
                    >
                      <AiOutlineShoppingCart className="mr-2"></AiOutlineShoppingCart>
                      Buy Now
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-between ">
              {isWishListed(wishlist?.data, id!) ? (
                <button
                  onClick={() => handleAddAndRemoveFromWishlist("remove")}
                  className="flex items-center my-2 text-primary dark:text-white  text-lg"
                >
                  <AiFillHeart className="mr-2 " size={20} />
                  Remove From Wishlist
                </button>
              ) : (
                <button
                  onClick={() => handleAddAndRemoveFromWishlist("add")}
                  className="flex items-center my-2 text-primary dark:text-white  text-lg"
                >
                  <AiOutlineHeart className="mr-2 " size={20} />
                  Add To Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Book Description and Author Description Section */}

      <div className="my-10 bg-customBG dark:bg-primary p-5 rounded-md">
        <BookMetaData book={book}></BookMetaData>
      </div>
      <div>
        <BookInfo book={book}></BookInfo>
      </div>
      <div className="my-10">
        <h1 className="text-xl font-semibold">Related Books</h1>
        <RelatedBooks book={book}></RelatedBooks>
      </div>

      {/* Review and Rating Section */}
      <div className="mb-5">
        <DisplayReviewAndRating book={book}></DisplayReviewAndRating>
      </div>
    </div>
  );
}
