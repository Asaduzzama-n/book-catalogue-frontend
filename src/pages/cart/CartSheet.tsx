"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import economicsCat from "../../assets/images/economicsCat.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  HiMinus,
  HiOutlinePlus,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from "react-icons/hi";
import { MdShoppingCartCheckout } from "react-icons/md";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export function CartSheet() {
  return (
    <div>
      <Sheet key={"bottom"}>
        <SheetTrigger asChild>
          <div className=" p-2 bg-[#ededed] rounded-full">
            <AiOutlineShoppingCart
              size={26}
              color="#232F3E"
            ></AiOutlineShoppingCart>
          </div>
        </SheetTrigger>
        <SheetContent className="md:w-3/4 mx-auto " side={"bottom"}>
          <div className="mb-20 mt-5">
            <div className="flex flex-col lg:flex-row">
              {/* Left Section - Product Information */}
              <div className="lg:w-3/4 ">
                <div>
                  <h2 className="text-2xl font-semibold ">Cart</h2>
                </div>
                {/* Table displaying added products */}
                <table className="w-full border  mt-5">
                  {/* Table headers */}
                  <thead className="border">
                    <tr className="">
                      <th>Book</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {/* Table body - Product details */}
                  <tbody>
                    {/* Map through your products and display rows */}
                    <tr className="border-b-2 border-[#232F3E] ">
                      <td>
                        <div className="md:flex items-center justify-around">
                          <img
                            src={economicsCat} // Replace with actual image source
                            alt="Book"
                            className=" w-20 h-20 object-cover"
                          />
                          <p className="font-medium">Product Name</p>
                        </div>
                      </td>
                      <td>
                        {/* Quantity with plus and minus buttons */}
                        <div className="flex flex-col md:flex-row  items-center justify-between md:border lg:w-1/2 mx-auto">
                          <button className="bg-[#c8994933] p-1 md:p-2 hover:bg-[#232F3E] hover:text-[#C89949]">
                            <HiMinus className="" size={25}></HiMinus>
                          </button>
                          <div>
                            <span className="mx-4 text-lg font-medium">1</span>
                          </div>
                          <button className="bg-[#c8994933] p-1 md:p-2 hover:bg-[#232F3E] hover:text-[#C89949]">
                            <HiOutlinePlus
                              className=" "
                              size={25}
                            ></HiOutlinePlus>
                          </button>
                        </div>
                      </td>
                      <td className="text-center">$5000.00</td>
                      <td className="text-center">
                        <button>
                          <AiOutlineClose className="text-red-500 h-5 w-5 mx-auto"></AiOutlineClose>
                        </button>
                      </td>
                    </tr>

                    {/* Add more rows for additional products */}
                  </tbody>
                </table>
                <div className="  mt-10 text-white hover:text-[#232F3E] ">
                  <SheetClose asChild>
                    <Link
                      className="bg-[#c89949] p-2 rounded-md  flex items-center font-semibold justify-center md:w-1/4"
                      to={"/"}
                    >
                      <AiOutlineArrowLeft size={18} className="mr-2 h-5 w-5" />
                      Continue
                    </Link>
                  </SheetClose>
                </div>
              </div>

              {/* Right Section - Order Total */}
              <div className="lg:w-1/4 lg:ml-4 mt-8 lg:mt-0">
                <h2 className="text-2xl font-semibold ">Order Total</h2>
                {/* Order total details */}
                <div className="border p-4 mt-5">
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium">Subtotal:</span>
                    <span className="text-lg font-medium">$50.00</span>
                  </div>
                  <hr />
                  <div className="flex justify-between my-2">
                    <span className="text-lg font-medium">Tax:</span>
                    <span className="text-lg font-medium">$5.00</span>
                  </div>
                  <hr />
                  <div className="flex justify-between my-2">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-lg font-bold">$45.00</span>
                  </div>
                  <div className="flex items-center justify-center  mt-5 text-white hover:text-[#C89949]  w-full">
                    <SheetClose asChild>
                      <Link
                        className="bg-[#232F3E] p-2 rounded-md  flex items-center justify-center w-full"
                        to={"/checkout"}
                      >
                        Proceed to Checkout
                        <MdShoppingCartCheckout size={18} className="ml-2" />
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
