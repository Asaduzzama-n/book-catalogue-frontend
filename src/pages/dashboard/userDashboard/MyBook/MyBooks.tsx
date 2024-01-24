import NoDataFound from "@/components/shared/NoDataFound";
import { ReaderSheet } from "@/components/shared/reader/ReaderSheet";
import { useGetMyBooksQuery } from "@/redux/features/user/userApi";

export default function MyBooks() {
  const { data } = useGetMyBooksQuery(undefined);
  const books = data?.data;
  console.log(books);
  return books?.userBooks?.length == 0 ? (
    <NoDataFound message="Sorry no books found!"></NoDataFound>
  ) : (
    <div className="min-h-screen md:container p-5 ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 ">
        {books &&
          books?.userBooks?.map((book: any) => (
            <div className=" relative max-w-[200px]  rounded-md mb-10 ">
              <img
                className=" md:h-[300px] rounded-md  my-2"
                src={book.coverImg.url}
                alt=""
              />
              <div className="px-2 text-sm font-medium  break-normal ">
                <p className="">{book?.title}</p>
                <p className="absolute bottom-4 md:bottom-2">{book?.price}</p>
              </div>
              <div className="">
                <ReaderSheet
                  book={book}
                  triggerButton={
                    <button className="absolute -bottom-10 bg-customBG py-1 w-full font-medium text-center">
                      Read Now
                    </button>
                  }
                ></ReaderSheet>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
