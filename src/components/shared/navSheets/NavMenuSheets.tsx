"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";

import NavContent from "../header/NavContent";

export function NavMenuSheet() {
  return (
    <div>
      <Sheet key={"left"}>
        <SheetTrigger asChild>
          <HiMenu className="ml-2" size={25} />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <div className="my-10">
            <NavContent></NavContent>
          </div>
          <hr />
          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
