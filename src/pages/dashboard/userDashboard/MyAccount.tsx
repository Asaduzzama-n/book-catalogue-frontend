import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { useAppSelector } from "@/redux/hooks";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";

import { MdArrowForwardIos } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
export default function MyAccount() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="container h-screen flex flex-col md:flex-row bg-white dark:bg-inherit justify-between mb-20">
      <section className="md:w-1/2  p-5 ">
        <div className=" bg-customBG dark:bg-primary p-4 shadow-sm">
          <div className="flex items-center border-b dark:border-primary ">
            <h1 className="text-xl text-primary dark:text-white mr-2">
              Details
            </h1>{" "}
            <div className="flex items-center">
              {" "}
              <CiEdit />
              <Link
                className="text-sm mx-1 text-primary dark:text-white hover:text-black"
                to="/profile"
              >
                Edit
              </Link>
            </div>
          </div>
          <div className="my-5">
            {/* <div>
              <img src={user?.image} alt="UA" />
            </div> */}
            <p>{user?.displayName}</p>
            <div className="flex items-center">
              {" "}
              <MdOutlineMarkEmailRead />
              <p className="m-2">{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-customBG dark:bg-primary p-4 shadow-sm ">
          <div className="flex items-center border-b dark:border-primary ">
            <h1 className="text-xl text-primary dark:text-white mr-2">
              Account Setting
            </h1>{" "}
          </div>
          <div className="flex items-center mt-2 ">
            <CiEdit />
            <Link
              className="text-sm mx-1 text-primary dark:text-white hover:text-black "
              to="/profile"
            >
              Edit Security Settings
            </Link>
          </div>
        </div>
      </section>
      <section className="md:w-1/2  p-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Link to="/library/books">
            <div className="p-2 bg-customBG dark:bg-primary rounded-md relative border">
              <div className="flex items-center">
                <div className="p-5 bg-primary dark:bg-customBG first-line: rounded-md">
                  <GiBookshelf
                    className="text-white dark:text-primary"
                    size={20}
                  />
                </div>
                <div className="p-4 text-primary dark:text-white ">
                  <p className="text-xl font-bold">12</p>

                  <p className="text-sm font-medium">Purchased Books</p>
                </div>
              </div>
              <MdArrowForwardIos className="absolute right-2 inset-y-2/4 text-sm " />
            </div>
          </Link>
          <Link to="/library/books">
            <div className="p-2 bg-customBG dark:bg-primary rounded-md relative border">
              <div className="flex items-center">
                <div className="p-5 bg-primary dark:bg-customBG first-line: rounded-md">
                  <FaRegHeart
                    className="text-white dark:text-primary"
                    size={20}
                  />
                </div>
                <div className="p-4 text-primary dark:text-white ">
                  <p className="text-xl font-bold">0</p>

                  <p className="text-sm font-medium">Wishlist Books</p>
                </div>
              </div>
              <MdArrowForwardIos className="absolute right-2 inset-y-2/4 text-sm " />
            </div>
          </Link>
          <Link to="/library/books">
            <div className="p-2 bg-customBG dark:bg-primary rounded-md relative border">
              <div className="flex items-center">
                <div className="p-5 bg-primary dark:bg-customBG first-line: rounded-md">
                  <BiPurchaseTagAlt
                    className="text-white dark:text-primary"
                    size={20}
                  />
                </div>
                <div className="p-4 text-primary dark:text-white ">
                  <p className="text-xl font-bold">0</p>
                  <p className="text-sm font-medium">Purchase History</p>
                </div>
              </div>
              <MdArrowForwardIos className="absolute right-2 inset-y-2/4 text-sm " />
            </div>
          </Link>
          <Link to="/library/books">
            <div className="p-2 bg-customBG dark:bg-primary rounded-md relative border">
              <div className="flex items-center">
                <div className="p-5 bg-primary dark:bg-customBG first-line: rounded-md">
                  <LiaFileInvoiceDollarSolid
                    className="text-white dark:text-primary"
                    size={20}
                  />
                </div>
                <div className="p-4 text-primary dark:text-white ">
                  <p className="text-xl font-bold">0</p>

                  <p className="text-sm font-medium">Invoice</p>
                </div>
              </div>
              <MdArrowForwardIos className="absolute right-2 inset-y-2/4 text-sm " />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
