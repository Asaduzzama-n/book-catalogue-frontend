import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReviewDisplaySection from "./ReviewDisplaySection";
import ReviewReportSection from "./ReviewReportSection";
import { IReviewResponse } from "@/types/globalTypes";
import { useAppDispatch } from "@/redux/hooks";
import { setRating, setSortBy } from "@/redux/features/review/reviewSlice";

interface IProps {
  data: IReviewResponse;
}

export default function DisplayReview(props: IProps) {
  const { data } = props;

  const dispatch = useAppDispatch();

  const handleRatingChange = (value: string) => {
    dispatch(setRating(Number(value)));
  };

  const handleSortByChange = (value: string) => {
    // Split the value into sortBy and sortOrder
    const [sortBy, sortOrder] = value.split("-");
    dispatch(setSortBy({ sortBy, sortOrder }));
  };

  return (
    <div className="">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center ">
        <div className="mb-4 md:mb-0 ">
          <h2 className="text-xl font-semibold">All Books Review</h2>
        </div>
        <div className="flex justify-between">
          <div>
            <Select onChange={handleRatingChange}>
              <SelectTrigger className="w-[150px] focus:outline-none">
                <SelectValue placeholder="Filter by: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Star</SelectItem>
                <SelectItem value="4">4 Star</SelectItem>
                <SelectItem value="3">3 Star</SelectItem>
                <SelectItem value="2">2 Star</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="ml-5">
            <Select onChange={handleSortByChange}>
              <SelectTrigger className="w-[150px] focus:outline-none">
                <SelectValue placeholder="Filter by: Newest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="isHelpful-desc">Most Helpful</SelectItem>
                <SelectItem value="createdAt-desc">Newest</SelectItem>
                <SelectItem value="createdAt-asc">Oldest</SelectItem>
                <SelectItem value="rating-desc">Highest Rated</SelectItem>
                <SelectItem value="rating-asc">Lowest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <hr className="my-5" />

      {data.reviews &&
        data?.reviews?.map(
          (review, index) =>
            review?.inappropriateCount <= 10 && (
              <div className="flex flex-col md:flex-row md:items-top min-h-32 border my-2 p-2">
                <div className="w-full md:w-2/3  lg:w-3/4   py-2 md:py-0">
                  <ReviewDisplaySection
                    key={index}
                    review={review}
                  ></ReviewDisplaySection>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 py-2 md:py-0">
                  <ReviewReportSection
                    key={index}
                    review={review}
                  ></ReviewReportSection>
                </div>
              </div>
            )
        )}
    </div>
  );
}
