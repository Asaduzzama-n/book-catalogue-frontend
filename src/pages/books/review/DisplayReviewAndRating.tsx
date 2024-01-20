import DisplayRating from "./DisplayRating";
import DisplayReview from "./DisplayReview";
import {
  useGetReviewsQuery,
  useGetReviewsWithPaginationQuery,
} from "@/redux/features/review/reviewsApi";
import Loader from "@/components/shared/Loader";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changePageNumber } from "@/redux/features/review/reviewSlice";

export default function DisplayReviewAndRating() {
  const { id } = useParams();

  const { data } = useGetReviewsQuery(id) || {};

  const { pageNumber, limit, sortBy, rating, sortOrder } = useAppSelector(
    (state) => state.review
  );
  const { data: review } = useGetReviewsWithPaginationQuery({
    id,
    rating,
    pageNumber,
    limit,
    sortBy,
    sortOrder,
  });

  const dispatch = useAppDispatch();

  const { currentPage, numberOfPages } = review?.meta || {};

  const incrementPageNumber = (currentPage: number) => {
    if (currentPage < numberOfPages) {
      dispatch(changePageNumber(currentPage + 1));
    }
  };
  const decrementPageNumber = (currentPage: number) => {
    if (currentPage === 1) {
      return;
    }
    dispatch(changePageNumber(currentPage - 1));
  };

  return (
    <div>
      {/* Rating Section */}
      <hr />
      <div className="my-5">
        <h2 className="text-xl font-semibold my-5">
          Rating & Book Reviews ({data?.data?.total})
        </h2>
        {!data || !data.data ? (
          <Loader></Loader>
        ) : (
          <DisplayRating data={data?.data}></DisplayRating>
        )}
      </div>
      <hr className="mb-5" />

      {/* Review  Section */}
      <div className="my-5">
        {!review || !review.data ? (
          <Loader></Loader>
        ) : (
          <DisplayReview data={review?.data}></DisplayReview>
        )}
      </div>

      <div className="flex justify-end items-center font-medium">
        <div>
          <button
            onClick={() => decrementPageNumber(currentPage)}
            className="mr-5 px-2 py-1 bg-customBG "
          >
            Prev
          </button>
        </div>
        <div>
          <p>
            {currentPage} of {numberOfPages}
          </p>
        </div>
        <div>
          <button
            onClick={() => incrementPageNumber(currentPage)}
            className="ml-5 p-2 px-2 py-1 bg-customBG"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
