"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { HiMenu } from "react-icons/hi";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { GoStack } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { BsShieldExclamation } from "react-icons/bs";
import { MdLogout, MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

type ProfileSheetProps = {
  avatar: boolean;
};

export function ProfileSheet({ avatar }: ProfileSheetProps) {
  return (
    <div>
      <Sheet key={"right"}>
        <SheetTrigger asChild>
          {avatar ? (
            <Avatar>
              <AvatarImage
                className="h-10 rounded-full mr-2"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>
                <HiMenu />
              </AvatarFallback>
            </Avatar>
          ) : (
            <h3 className="text-lg font-medium cursor-pointer">Asaduzzaman</h3>
          )}
        </SheetTrigger>
        <SheetContent className="" side={"right"}>
          <div>
            <div className="text-center   md:flex items-center p-2  rounded-sm mb-5">
              <div className="flex justify-center mb-2 md:mb-0 md:mr-5">
                <Avatar>
                  <AvatarImage
                    className="h-12  rounded-full mr-2 md:mr-5"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>
                    <HiMenu />
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h2 className="font-medium">Asaduzzaman</h2>
                <p>asaduzzaman@gmail.com</p>
              </div>
            </div>
            <hr />
            <div className="rounded-md">
              <div className=" my-5 rounded-md">
                <Link
                  className="text-lg flex items-center p-3 hover:bg-[#ededed] rounded-md "
                  to=""
                >
                  <MdLogin className="mr-2" size={18} />
                  Login
                </Link>
                <Link
                  className="flex items-center p-3 hover:bg-[#ededed] rounded-md"
                  to=""
                >
                  {" "}
                  <FiUserPlus className="mr-2" size={18} />
                  Register
                </Link>
              </div>
              <hr />
              <div className=" my-5 rounded-md">
                <Link
                  className="text-lg flex items-center p-3 hover:bg-[#ededed] rounded-md "
                  to=""
                >
                  <AiOutlineShoppingCart className="mr-2" size={18} />
                  My Cart (0)
                </Link>
                <Link
                  className="flex items-center p-3 hover:bg-[#ededed] rounded-md"
                  to=""
                >
                  {" "}
                  <AiOutlineHeart className="mr-2" size={18} />
                  My Wishlist (2)
                </Link>
              </div>
              <hr />
              <div className="my-5 rounded-md">
                <Link
                  className="text-lg flex items-center p-3 hover:bg-[#ededed] rounded-md "
                  to=""
                >
                  <FiUser className="mr-2" size={18} />
                  My Account
                </Link>
                <Link
                  className="flex items-center p-3 hover:bg-[#ededed] rounded-md"
                  to=""
                >
                  {" "}
                  <GoStack className="mr-2" size={18} />
                  My Order
                </Link>
                <Link
                  className="text-lg flex items-center p-3 hover:bg-[#ededed] rounded-md "
                  to=""
                >
                  <FaRegEdit className="mr-2" size={18} />
                  Edit Profile
                </Link>
                <Link
                  className="flex items-center p-3 hover:bg-[#ededed] rounded-md"
                  to=""
                >
                  {" "}
                  <BsShieldExclamation className="mr-2" size={18} />
                  Change Password
                </Link>
              </div>
              <hr />
              <div className="my-5 rounded-md">
                <Link
                  className="flex items-center p-3 hover:bg-[#ededed] rounded-md text-red-500"
                  to=""
                >
                  {" "}
                  <MdLogout className="mr-2" size={18} />
                  Logout
                </Link>
              </div>
            </div>
          </div>
          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
