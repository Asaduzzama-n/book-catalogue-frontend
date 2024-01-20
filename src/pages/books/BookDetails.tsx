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
import { ReaderSheet } from "@/components/shared/reader/ReaderSheet";
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

export default function BookDetails() {
  const breadcrumbPaths = [
    { label: "Shop", url: "/shop" },
    { label: "Details", url: "/details" },
  ];

  const dispatch = useAppDispatch();

  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
  const { user } = useAppSelector((state) => state.user);
  const book: IBook = data?.data;

  const [addToWishList] = useAddToWishListMutation();
  const [removeFromWishList] = useRemoveFromWishListMutation();
  const { data: wishlist } = useGetWishListQuery(user?.id as string);

  // const handleAddToWishList = async (bookId: string) => {
  //   const options = {
  //     data: {
  //       book: bookId,
  //       user: user?.id,
  //     },
  //   };
  //   try {
  //     const res = await addToWishList(options).unwrap();
  //     toast.success(res?.message);
  //   } catch (error) {
  //     toast.error(error?.message);
  //   }
  // };

  const handleAddAndRemoveFromWishlist = async (operation: string) => {
    const options = {
      data: {
        book: id,
        user: user?.id,
      },
    };

    try {
      let res;
      if (operation === "add") {
        res = await addToWishList(options).unwrap();
      } else if (operation === "remove") {
        res = await removeFromWishList(options).unwrap();
      }
      toast.success(res?.message);
    } catch (error) {
      //@ts-ignore
      toast.error(error?.message);
    }
  };

  // const handleRemoveFromWishList = async (bookId: string) => {
  //   const options = {
  //     data: {
  //       book: bookId,
  //       user: user?.id,
  //     },
  //   };
  //   try {
  //     const res = await removeFromWishList(options).unwrap();
  //     console.log(res);
  //     toast.success(res?.message);
  //   } catch (error) {
  //     toast.error(error?.message);
  //   }
  // };

  return (
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
                <Link to={"/author/:id"}>
                  By: {book?.author?.author1?.name.firstName}
                </Link>
              </p>
              <p> Category: {book?.category}</p>
              <div className="my-5">
                <p>Description: {book?.bookDescription}</p>
              </div>
              <div className="my-5">
                <p>Rating</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Price: {book?.price}</h3>
              </div>
            </div>
            {/* Button Section */}
            <div className="flex justify-start items-center ">
              <div className="mr-5">
                <Link to={"/checkout"}>
                  <button
                    onClick={() => dispatch(addToCart(book))}
                    className="bg-primary dark:bg-customBG text-white dark:text-primary  font-medium p-1 md:p-2 hover:opacity-80 w-32  h-10 border  flex items-center justify-center"
                  >
                    <AiOutlineShoppingCart className="mr-2"></AiOutlineShoppingCart>
                    Buy Now
                  </button>
                </Link>
              </div>

              <div>
                <ReaderSheet book={book}></ReaderSheet>
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
        <DisplayReviewAndRating></DisplayReviewAndRating>
      </div>
    </div>
  );
}
