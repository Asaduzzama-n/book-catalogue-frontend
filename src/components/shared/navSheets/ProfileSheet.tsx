"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { HiMenu } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { GoStack } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { BsShieldExclamation } from "react-icons/bs";
import { MdLogout, MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

import { IoLibraryOutline } from "react-icons/io5";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/features/user/userSlice";
import { CartSheet } from "@/pages/cart/CartSheet";

type ProfileSheetProps = {
  avatar: boolean;
};

export function ProfileSheet({ avatar }: ProfileSheetProps) {
  // const dispatch = useAppDispatch();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    removeUserInfo("accessToken");
    dispatch(setUser({}));
    // dispatch(setLoading(true));

    // signOut(auth).then(() => {
    //   removeUserInfo("accessToken");
    //   dispatch(setUser({}));
    // });
  };

  const { books } = useAppSelector((state) => state.cart);
  console.log(books);
  return (
    <div>
      <Sheet key={"right"}>
        <SheetTrigger asChild>
          {avatar ? (
            <Avatar>
              <AvatarImage
                className="h-8 rounded-full mt-2"
                src={user?.image?.url}
              />
              <AvatarFallback>
                <HiMenu />
              </AvatarFallback>
            </Avatar>
          ) : (
            <h3 className="text-sm font-medium cursor-pointer">
              {user?.email ? user?.email : "User"}
            </h3>
          )}
        </SheetTrigger>
        <SheetContent className="" side={"right"}>
          <div className="py-4">
            <div className="text-center bg-customBG dark:bg-primary rounded-md  md:flex items-center    p-4 mb-10">
              <div className="flex justify-center mb-2 md:mb-0 md:mr-5 ">
                <Avatar>
                  <AvatarImage
                    className="h-12  rounded-full mr-2  hover:animate-bounce"
                    src={user?.image?.url}
                  />
                  <AvatarFallback>
                    <HiMenu />
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="text-sm">{user.email ? user.email : "User"}</p>
              </div>
            </div>

            <div className="">
              {!isLoggedIn() && (
                <div className="my-5 rounded-t-lg rounded-b-lg  ">
                  <Link
                    className="flex items-center px-2   hover:opacity-80   h-12 "
                    to="/login"
                  >
                    <MdLogin className="mr-2" size={18} />
                    Login
                  </Link>

                  <a
                    className="flex items-center px-2      h-12 "
                    href="/signup"
                  >
                    {" "}
                    <FiUserPlus className="mr-2" size={18} />
                    Register
                  </a>
                </div>
              )}

              <div className=" my-5 rounded-t-lg rounded-b-lg  ">
                <CartSheet
                  triggerButton={
                    <div className="flex items-center px-2 border-b  dark:border-white cursor-pointer  h-12 ">
                      <AiOutlineShoppingCart
                        className=" "
                        size={18}
                      ></AiOutlineShoppingCart>
                      <p className="mx-2">My Cart ({books?.length})</p>
                    </div>
                  }
                ></CartSheet>

                <Link
                  className="flex items-center px-2 border-b  dark:border-white   h-12"
                  to="/my-wishlist"
                >
                  {" "}
                  <AiOutlineHeart className="mr-2" size={18} />
                  My Wishlist
                </Link>
                {/*  */}
              </div>

              <div className="my-5 rounded-t-lg rounded-b-lg  ">
                <Link
                  className="flex items-center px-2  border-b  dark:border-white    h-12  "
                  to="/account"
                >
                  <FiUser className="mr-2" size={18} />
                  My Account
                </Link>
                <Link
                  className="flex items-center px-2  border-b  dark:border-white    h-12  "
                  to="/library/books"
                >
                  <IoLibraryOutline className="mr-2" size={18} />
                  My Books
                </Link>

                <Link
                  className="flex items-center px-2  border-b  dark:border-white    h-12 "
                  to="/purchase-history"
                >
                  {" "}
                  <GoStack className="mr-2" size={18} />
                  Purchase History
                </Link>

                <Link
                  className="flex items-center px-2  border-b  dark:border-white    h-12  "
                  to="/profile"
                >
                  <FaRegEdit className="mr-2" size={18} />
                  Edit Profile
                </Link>

                <Link
                  className="flex items-center px-2 border-b  dark:border-white     h-12 "
                  to="/account/settings"
                >
                  {" "}
                  <BsShieldExclamation className="mr-2" size={18} />
                  Account Settings
                </Link>
              </div>
              <div className="my-5  rounded-lg">
                {isLoggedIn() && (
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-2 w-full     h-12  text-red-500 "
                  >
                    {" "}
                    <MdLogout className="mr-2" size={18} />
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
          <SheetClose asChild></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
