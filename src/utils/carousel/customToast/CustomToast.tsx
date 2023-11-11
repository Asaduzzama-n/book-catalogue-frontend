// CustomToast.js

import { toast } from "react-toastify";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CustomToast = ({ message }: any) => {
  return (
    <div className="flex justify-between items-center border pl-2 rounded-md">
      <div className="flex items-center justify-around ">
        <AiOutlineShoppingCart className="bg-[#183150] text-[#C89949] h-8 w-8 p-1 rounded-full"></AiOutlineShoppingCart>
      </div>
      <div>
        <p className="text-md ">{message}</p>
        <p className="text-sm font-semibold">Added to your cart.</p>
      </div>
      <div className="border">
        <div className="p-1 hover:bg-[#232F3E]">
          <Link className="font-semibold text-sm text-[#C89949] " to={"/cart"}>
            View Cart
          </Link>
        </div>
        <hr />
        <div className="p-1 hover:bg-[#C89949]">
          <Link
            className="font-semibold text-sm text-[#232F3E] "
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
