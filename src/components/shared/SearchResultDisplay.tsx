import { useGetBooksForSearchQuery } from "@/redux/features/books/booksApi";
import { useAppSelector } from "@/redux/hooks";
import { IBook } from "@/types/globalTypes";
import noResult from "@/assets/images/no-result.svg";

export default function SearchResultDisplay() {
  const { searchKey } = useAppSelector((state) => state.book);
  const { data } = useGetBooksForSearchQuery(searchKey) || {};

  return (
    <div className="max-h-[600px] overflow-y-scroll ">
      <h3 className="mt-2 font-medium mx-4">
        Your Search Result (
        <span className="text-green-500">{data?.data?.length}</span>)
      </h3>
      {data?.data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mx-4">
          {data?.data &&
            data?.data?.map((book: IBook) => (
              <a href={`/details/${book?.id}`}>
                <div className="flex  md:flex-row bg-customBG dark:bg-primary p-2 hover:shadow-md rounded-md">
                  <div className="">
                    <img
                      className="max-w-[150px] max-h-[150px]"
                      src={book?.coverImg?.url}
                      alt="book Image"
                    />
                  </div>
                  <div className="px-5 md:px-2 font-serif ">
                    <p className="mb-1">{book?.title}</p>
                    <p className="mb-1">
                      {" "}
                      By: {book?.author?.author1?.name?.firstName}
                    </p>
                    {/* <p>{book?.tags}</p> */}
                    <p>
                      Category: <span>{book?.category}</span>
                    </p>
                    <p className="mt-5">Price: {book?.price}</p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      ) : (
        <div className="  font-serif">
          <img className="h-48 md:h-60 mx-auto" src={noResult} alt="" />
          <p className="text-lg font-medium mx-auto text-center my-2">
            No result Found
          </p>
          <div className="text-center">
            <a
              className=" mx-auto bg-primary text-white px-5 py-1 font-medium"
              href="/shop"
            >
              See all books
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
