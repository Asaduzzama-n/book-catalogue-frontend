"use client";

import logo from "../../assets/logo/logo.png";
import { ProfileSheet } from "./navSheet/ProfileSheet";
import { SearchSheet } from "./navSheet/SearchSheet";
import NavContent from "./navContent";
import { NavMenuSheet } from "./navSheet/NavMenuSheet";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav className="h-[60px] w-full fixed-top  md:w-4/5 m-auto flex items-center justify-between">
      <div className=" flex items-center w-2/5 md:w-1/2 justify-between">
        <div className="md:hidden">
          <NavMenuSheet />
        </div>
        <div>
          <img className="h-14" src={logo} alt="" />
        </div>
        <div className="hidden md:inline z-2">
          <NavContent></NavContent>
        </div>
      </div>

      <div className="flex w-2/5 md:w-1/6 items-center justify-between ">
        <div>
          <SearchSheet></SearchSheet>
        </div>
        <div className="bg-blue-200 p-3 rounded-full">
          <AiOutlineShoppingCart size={20} />
        </div>
        <div>
          <ProfileSheet avatar={true}></ProfileSheet>
        </div>
      </div>
    </nav>
  );
}
