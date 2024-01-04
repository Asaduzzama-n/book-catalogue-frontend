// import { changePageNumber } from "@/redux/features/review/reviewSlice";
// import { useGetReviewsWithPaginationQuery } from "@/redux/features/review/reviewsApi";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// export default function ReviewPagination({
//   id,
//   currentPage,
//   numberOfPages,
// }: {
//   id: string | undefined;
//   currentPage: number;
//   numberOfPages: number;
// }) {
//   const { pageNumber, limit, sortBy } = useAppSelector((state) => state.review);
//   const { data } = useGetReviewsWithPaginationQuery({
//     id,
//     pageNumber,
//     limit,
//     sortBy,
//   });

//   const dispatch = useAppDispatch();

//   const { currentPage, numberOfPages } = data?.meta;

//   const incrementPageNumber = (currentPage: number) => {
//     if (currentPage < numberOfPages) {
//       dispatch(changePageNumber(currentPage + 1));
//     }
//   };
//   const decrementPageNumber = (currentPage: number) => {
//     if (currentPage === 1) {
//       return;
//     }
//     dispatch(changePageNumber(currentPage - 1));
//   };

//   return (
//     <div className="flex">
//       <div>
//         <button
//           onClick={() => decrementPageNumber(currentPage)}
//           className="mr-5 p-2 bg-blue-500"
//         >
//           Prev
//         </button>
//       </div>
//       <div>
//         <button
//           onClick={() => incrementPageNumber(currentPage)}
//           className="ml-5 p-2 bg-green-500"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
