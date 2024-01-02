import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
export default function BookRating({ rating, total }: any) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center my-2">
      {[...Array(fullStars)].map((_, index) => (
        <p key={index} className="text-lg text-primary dark:text-customBG">
          <IoStar />
        </p>
      ))}
      {hasHalfStar && (
        <p key="half-star" className="text-lg text-primary dark:text-customBG">
          <IoStarHalf />
        </p>
      )}
      <div className="ml-1">({total})</div>
    </div>
  );
}
