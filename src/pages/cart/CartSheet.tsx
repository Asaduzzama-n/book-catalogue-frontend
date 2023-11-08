"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AiOutlineShoppingCart } from "react-icons/ai";

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
        <SheetContent className="md:w-2/4 mx-auto" side={"bottom"}>
          <div></div>
          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
