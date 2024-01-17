"use client";

import logo from "../../../assets/logo/logo-2.png";

import { NavMenuSheet } from "../navSheets/NavMenuSheets";
import NavContent from "./NavContent";
import { SearchSheet } from "../navSheets/SearchSheet";
import { ProfileSheet } from "../navSheets/ProfileSheet";
import { Link } from "react-router-dom";
import { CartSheet } from "@/pages/cart/CartSheet";
import { Moon, Sun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme/theme-provider";

export default function NavBar() {
  const { setTheme } = useTheme();
  return (
    <nav className=" w-full sticky top-0  z-50 dark:bg-primary bg-customBG md:px-5 ">
      <div className="h-[60px]  flex items-center justify-between md:container">
        <div className=" flex items-center">
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
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full w-10 h-10 flex items-center bg-customBG dark:bg-secondary justify-center">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
