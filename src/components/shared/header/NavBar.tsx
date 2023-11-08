"use client";

import logo from "../../../assets/logo/logo.png";

import { NavMenuSheet } from "../navSheets/NavMenuSheets";
import NavContent from "./NavContent";
import { SearchSheet } from "../navSheets/SearchSheet";
import { ProfileSheet } from "../navSheets/ProfileSheet";
import { Link } from "react-router-dom";
import { CartSheet } from "@/pages/cart/CartSheet";

export default function NavBar() {
  return (
    <nav className=" w-full sticky top-0  z-50 bg-white m-auto ">
      <div className="h-[60px] lg:w-4/5  mx-auto flex items-center justify-around md:justify-between">
        <div className=" flex items-center w-4/6  md:w-3/4   md:justify-start">
          <div className="md:hidden">
            <NavMenuSheet />
          </div>
          <div className="mx-20 md:mx-0">
            <Link to={"/"}>
              {" "}
              <img className="h-14" src={logo} alt="" />
            </Link>
          </div>
          <div className="hidden md:inline z-2 lg:ml-20">
            <NavContent></NavContent>
          </div>
        </div>

        <div className="flex w-2/6 md:w-1/4  items-center justify-between md:justify-end ">
          <div className="md:mx-5 cursor-pointer">
            <CartSheet></CartSheet>
          </div>
          <div className="md:mr-5 cursor-pointer">
            <SearchSheet></SearchSheet>
          </div>
          <div className="cursor-pointer">
            <ProfileSheet avatar={true}></ProfileSheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
