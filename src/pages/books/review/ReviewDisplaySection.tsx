import Rating from "@/components/shared/Rating";
import { IReview } from "@/types/globalTypes";

interface IProps {
  review: IReview;
}

export default function ReviewDisplaySection(props: IProps) {
  const { review } = props;

  const formattedDate = review?.createdAt
    ? new Date(review.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div>
      <div className="flex items-center ">
        <Rating rating={review?.rating}></Rating>
        <p className="font-semibold mx-5 text-lg">{review?.title}</p>
      </div>
      <br />
      <div>
        <span className="my-2">{review?.review}</span>
        <br />
        <br />
        <span className="font-serif">
          By: {review?.user?.name?.lastName} on {formattedDate}
        </span>
      </div>
    </div>
  );
}
