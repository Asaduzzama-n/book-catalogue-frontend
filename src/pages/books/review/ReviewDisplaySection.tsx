import BookRating from "@/components/shared/BookRating";

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
        <BookRating rating={review?.rating}></BookRating>
        <p className="font-semibold mx-5 text-lg">{review?.title}</p>
      </div>
      <br />
      <article className=" text-pretty ">
        <p className="my-2 ">{review?.review}</p>
        <br />

        <span className="font-serif">
          By: {review?.user?.name?.lastName} on {formattedDate}
        </span>
      </article>
    </div>
  );
}
