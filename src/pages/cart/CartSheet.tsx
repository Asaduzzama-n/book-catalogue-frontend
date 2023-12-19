"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MdCancel } from "react-icons/md";
import { removeFromCart } from "@/redux/features/cart/cartSlice";

export function CartSheet() {
  const { books, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Sheet key={"bottom"}>
        <SheetTrigger asChild>
          <div className=" p-2 bg-customBG dark:bg-secondary rounded-full">
            <AiOutlineShoppingCart size={20}></AiOutlineShoppingCart>
          </div>
        </SheetTrigger>
        <SheetContent
          className="w-full md:w-3/4 mx-auto max-h-[500px] overflow-y-scroll"
          side={"bottom"}
        >
          <div className=" my-5">
            <div className="flex flex-col lg:flex-row">
              <Table>
                <TableCaption>A list of your recent cart items.</TableCaption>
                <TableHeader className="bg-customBG dark:bg-primary ">
                  <TableRow>
                    <TableHead className="">Book</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {books?.map((book) => (
                    <TableRow className="">
                      <TableCell className="font-medium">
                        <div className="flex flex-col md:flex-row  md:items-center justify-start">
                          <div>
                            <img
                              className="w-14 h-16"
                              src={book?.coverImg.url}
                              alt="Book Image"
                            />
                          </div>
                          <div className="mt-2 md:mx-5">{book?.title}</div>
                        </div>
                      </TableCell>

                      <TableCell>
                        <button onClick={() => dispatch(removeFromCart(book))}>
                          <MdCancel
                            className="text-primary dark:text-customBG"
                            size={24}
                          />
                        </button>
                      </TableCell>
                      <TableCell className="text-right">
                        {book?.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter className="bg-customBG dark:bg-primary ">
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Sub Total</TableCell>
                    <TableCell className="text-right">{total}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell className="text-right">{total}</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
            <div className="flex justify-end  ">
              <SheetClose asChild>
                <Link
                  className="bg-primary hover:bg-secondary p-2 text-white rounded-md  flex items-center justify-center md:w-1/4 mt-5 md:mt-0"
                  to={"/checkout"}
                >
                  Proceed to Checkout
                  <MdShoppingCartCheckout size={18} className="ml-2" />
                </Link>
              </SheetClose>
            </div>
          </div>

          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
