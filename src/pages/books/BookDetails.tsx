import Breadcrumb from "@/components/shared/Breadcrumb";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { MdElectricBolt } from "react-icons/md";
import { Link } from "react-router-dom";

import BookMetaData from "./BookMetaData";
import BookInfo from "./BookInfo";
import RelatedBooks from "./RelatedBooks";
import { ReaderSheet } from "@/components/shared/reader/ReaderSheet";
export default function BookDetails() {
  const breadcrumbPaths = [
    { label: "Shop", url: "/shop" },
    { label: "Details", url: "/details" },
  ];

  return (
    <div className="w-full mx-auto md:w-4/5">
      <div className="grid grid-cols-1 md:grid-cols-2 p-5">
        <div className="flex justify-center items-center">
          <img
            className="min-h-80"
            src="https://www.uplbooks.com/web/image/product.template/8436/image_512?unique=1ffca3e"
            alt=""
          />
        </div>
        <div className="flex justify-center my-10 md:justify-start ">
          <div>
            <div className="my-4">
              <Breadcrumb paths={breadcrumbPaths} />
              <h2 className="bg-green-400 w-32 px-2 transform my-2">
                new Arrival
              </h2>
            </div>
            {/* Book info Section */}
            <div className="my-5">
              <h1 className="text-3xl font-semibold">
                Book Name....................
              </h1>
              <p className="my-2">
                <Link to={"/author/:id"}>Author Name</Link>
              </p>
              <p>Category</p>
              <div className="my-5">
                <p>Rating and Review</p>
              </div>
              <h3 className="text-lg font-medium">Price</h3>
            </div>
            <hr />
            {/* Button Section */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-4 md:grid-cols-3 justify-start mt-5 ">
              <div>
                <Link to={"/checkout"}>
                  <button className="bg-primary dark:bg-customBG text-white dark:text-primary  font-medium p-1 md:p-2 hover:opacity-80 w-32  h-10 border  flex items-center justify-center">
                    <MdElectricBolt className="mr-2"></MdElectricBolt>
                    Buy Now
                  </button>
                </Link>
              </div>

              <div>
                <ReaderSheet></ReaderSheet>
              </div>
            </div>
            <hr className="mt-5" />
            <div className="flex justify-between ">
              <button className="flex items-center my-2 text-primary dark:text-white hover:opacity-80 text-lg">
                <AiOutlineHeart className="mr-2"></AiOutlineHeart>
                Add To Wishlist
              </button>
              <div className="my-2">Share Icon will be there</div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Description and Author Description Section */}

      <div className="my-10 bg-customBG dark:bg-primary p-5 rounded-md">
        <BookMetaData></BookMetaData>
      </div>
      <div>
        <BookInfo></BookInfo>
      </div>
      <div className="my-10">
        <h1 className="text-3xl font-semibold">Related Books</h1>
        <RelatedBooks></RelatedBooks>
      </div>
    </div>
  );
}
