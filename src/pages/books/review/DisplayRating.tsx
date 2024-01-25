import { ReviewForm } from "@/components/forms/ReviewForm";
import BookRating from "@/components/shared/BookRating";
import { IBook, IReviewResponse } from "@/types/globalTypes";

interface IProps {
  data: IReviewResponse;
  book: IBook;
}

export default function DisplayRating(props: IProps) {
  const { data, book } = props;

  return (
    <div className="min-h-44">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="">
          <h3 className="font-semibold text-lg">Overall rating</h3>
          <p className="font-semibold my-4">{data?.avgRating} out of 5</p>
          <BookRating rating={data?.avgRating} total={data?.total}></BookRating>
        </div>
        <div className="h-auto w-[2px] bg-customBG mx-5 hidden md:inline-block"></div>
        <hr className="my-2 md:hidden" />
        <div className="my-5">
          {[5, 4, 3, 2, 1].map((key) => {
            const count = data?.ratingCounts[key]?.count ?? 0;
            let percentage = data?.ratingCounts[key]?.percentage ?? 0;

            // Ensure percentage is a valid number
            percentage = Number.isNaN(percentage)
              ? 0
              : Math.min(Math.max(percentage, 0), 100);

            return (
              <div className="flex items-center text-sm mb-2" key={key}>
                <p>{key} STARS</p>
                <div className="relative">
                  <div className="h-5 w-[200px] bg-customBG dark:bg-primary mx-5 relative overflow-hidden">
                    <div
                      className="h-full bg-primary dark:bg-customBG absolute"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
                <span>{count}</span>
              </div>
            );
          })}
        </div>
        <div className="h-auto w-[2px] bg-customBG mx-5 hidden md:inline-block"></div>
        <hr className="my-2 md:hidden" />
        <div>
          <h2 className="text-lg mb-4">Share your thoughts</h2>
          <ReviewForm book={book}></ReviewForm>
        </div>
      </div>
    </div>
  );
}
