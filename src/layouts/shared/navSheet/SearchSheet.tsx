"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavSearchForm from "@/components/NavSearchForm";
import { HiOutlineSearch } from "react-icons/hi";

export function SearchSheet() {
  return (
    <div>
      <Sheet key={"top"}>
        <SheetTrigger asChild>
          <div className=" p-2 bg-blue-200 rounded-full">
            <HiOutlineSearch size={26}></HiOutlineSearch>
          </div>
        </SheetTrigger>
        <SheetContent className="md:w-2/4 mx-auto" side={"top"}>
          <div>
            <NavSearchForm></NavSearchForm>
          </div>
          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
