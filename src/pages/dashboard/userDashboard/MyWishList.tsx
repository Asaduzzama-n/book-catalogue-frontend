import NoDataFound from "@/components/shared/NoDataFound";
import {
  useGetWishListQuery,
  useRemoveFromWishListMutation,
} from "@/redux/features/user/userApi";
import { useAppSelector } from "@/redux/hooks";
import { AiFillHeart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function MyWishList() {
  const { user } = useAppSelector((state) => state.user);
  const { data } = useGetWishListQuery(user?.id as string);

  const wishlists = data?.data;
  const [removeFromWishList] = useRemoveFromWishListMutation();

  const handleAddAndRemoveFromWishlist = async (book: any) => {
    const options = {
      data: {
        book: book?.id,
        user: user?.id,
      },
    };

    try {
      const res = await removeFromWishList(options).unwrap();
      const message = `${book?.title} removed from wishlist`;
      toast.success(message || res?.message);
    } catch (error) {
      //@ts-ignore
      toast.error(message || res?.message);
    }
  };

  return wishlists?.length == 0 ? (
    <NoDataFound message="Sorry no wishlist found!"></NoDataFound>
  ) : (
    <div className="min-h-screen md:container p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {wishlists &&
          wishlists.map((wishlist: any) => (
            <div className="bg-customBG dark:bg-primary p-5 rounded-md md:flex">
              <div className="w-full md:w-1/4 md:mx-auto ">
                <img
                  className="max-h-60 mx-auto rounded-md"
                  src={wishlist?.book?.coverImg?.url}
                  alt="Book Image"
                />
              </div>
              <div className="w-full md:w-3/4">
                <div className="mx-4">
                  <div className="space-y-1">
                    <h1 className="text-xl font-semibold">
                      {wishlist?.book?.title}
                    </h1>
                    <p className="">
                      <span className="font-medium ">By: </span>
                      {wishlist?.book?.author?.author1?.name?.firstName}
                    </p>
                    <p>
                      <span className="font-medium">Category: </span>
                      {wishlist?.book?.categoryName}
                    </p>
                    <div className=" ">
                      <span className="font-medium">Description: </span>
                      {wishlist?.book?.bookDescription}
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">
                        Price: {wishlist?.book?.price}
                      </h3>
                    </div>
                  </div>
                  <div className="text-start lg:flex justify-between items-center">
                    <Link
                      className=" p-1 text-primary  rounded-md flex items-center "
                      to={`/details/${wishlist?.book?.id}`}
                    >
                      View Details
                      <IoIosArrowForward className="ml-2" />
                    </Link>
                    <hr className="my-2 md:hidden" />
                    <button
                      onClick={() =>
                        handleAddAndRemoveFromWishlist(wishlist?.book)
                      }
                      className="flex items-center my-2 text-primary dark:text-white  "
                    >
                      <AiFillHeart className="mr-2 " size={20} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
