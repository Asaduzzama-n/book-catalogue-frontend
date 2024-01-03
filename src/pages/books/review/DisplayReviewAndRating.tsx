import DisplayRating from "./DisplayRating";
import DisplayReview from "./DisplayReview";
import { useGetReviewsQuery } from "@/redux/features/review/reviewsApi";
import Loader from "@/components/shared/Loader";
import { useParams } from "react-router-dom";

export default function DisplayReviewAndRating() {
  const { id } = useParams();
  console.log(id);
  const { data } = useGetReviewsQuery(id);

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
        {!data || !data.data ? (
          <Loader></Loader>
        ) : (
          <DisplayReview data={data?.data}></DisplayReview>
        )}
      </div>
    </div>
  );
}
