import Rating from "@/components/shared/Rating";
import { IReview } from "@/types/globalTypes";

interface IProps {
  review: IReview;
}

export default function ReviewDisplaySection(props: IProps) {
  const { review } = props;
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
          By: {review.user.name.lastName}on 02 January, 2023
        </span>
      </div>
    </div>
  );
}
