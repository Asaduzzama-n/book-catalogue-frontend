import { TiStar } from "react-icons/ti";
import { TiStarHalf } from "react-icons/ti";
//@ts-ignore
export default function BookRating({ rating, total }: any) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center my-2">
      {[...Array(5)].map((_, index) => (
        <p key={index} className="text-lg text-primary dark:text-customBG">
          {index < fullStars ? (
            <TiStar />
          ) : index === fullStars && hasHalfStar ? (
            <TiStarHalf />
          ) : (
            <TiStar key={index} style={{ opacity: 0.4 }} />
          )}
        </p>
      ))}
      {/* <div className="ml-1">({total})</div> */}
    </div>
  );
}
