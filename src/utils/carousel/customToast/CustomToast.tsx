// CustomToast.js

import { toast } from "react-toastify";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const CustomToast = ({ message }: any) => {
  return (
    <div className="flex justify-between items-center border pl-2 rounded-md">
      <div className="flex items-center justify-around ">
        <AiOutlineShoppingCart className=" text-primary h-6 w-6  rounded-full"></AiOutlineShoppingCart>
      </div>
      <div>
        <p className="text-md text-primary font-semibold">{message}</p>
        <p className="text-sm font-semibold">Added to your cart.</p>
      </div>
      <div className="border-l p-3 rounded-md hover:bg-customBG">
        <div className="">
          <Link
            className="font-semibold text-sm text-primary "
            to={"/checkout"}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export const showToast = (message: any) => {
  toast.success(<CustomToast message={message} />, {
    icon: false,
    autoClose: 3000, // 3 seconds
  });
};

// export const showToast = (message: any) => {
//   toast.success(<CustomToast message={message} />, { icon: false });
// };
