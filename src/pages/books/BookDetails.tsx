import Breadcrumb from "@/components/shared/Breadcrumb";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

import BookMetaData from "./BookMetaData";
import BookInfo from "./BookInfo";
import RelatedBooks from "./RelatedBooks";
import { ReaderSheet } from "@/components/shared/reader/ReaderSheet";
import { useGetSingleBookQuery } from "@/redux/features/books/booksApi";
import { IBook } from "@/types/globalTypes";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import DisplayRating from "./DisplayRating";
import DisplayReview from "./DisplayReview";
// import { useState } from "react";
export default function BookDetails() {
  // const [rating, setRating] = useState(0);

  // const handleRatingChange = (newRating: number) => {
  //   setRating(newRating);
  // };

  const breadcrumbPaths = [
    { label: "Shop", url: "/shop" },
    { label: "Details", url: "/details" },
  ];

  const dispatch = useAppDispatch();

  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
  const book: IBook = data?.data;

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
              <h2 className="bg-green-400 w-32 px-2 transform my-2">
                new Arrival
              </h2>
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
              <button className="flex items-center my-2 text-primary dark:text-white hover:opacity-80 text-lg">
                <AiOutlineHeart className="mr-2"></AiOutlineHeart>
                Add To Wishlist
              </button>
              <div className="my-2">Share Icon will be there</div>
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
        <h1 className="text-3xl font-semibold">Related Books</h1>
        <RelatedBooks book={book}></RelatedBooks>
      </div>

      {/* Rating Section */}
      <hr />
      <div className="my-5">
        <h2 className="text-lg font-semibold my-5">
          Rating & Book Reviews (8)
        </h2>
        <DisplayRating></DisplayRating>
      </div>
      <hr className="mb-5" />

      {/* Review  Section */}
      <div className="my-5">
        <h2 className="text-lg font-semibold my-5">All Book Review</h2>
        <DisplayReview></DisplayReview>
      </div>
      <hr className="mb-5" />
    </div>
  );
}

{
  /* <div className="flex space-x-2">
{[1, 2, 3, 4, 5].map((star) => (
  <button
    key={star}
    onClick={() => handleRatingChange(star)}
    className={`text-3xl ${
      star <= rating
        ? "text-primary"
        : "text-gray-200 hover:text-primary"
    } focus:outline-none`}
  >
    ★
  </button>
))}
</div> */
}
