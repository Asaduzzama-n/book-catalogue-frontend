"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {HiMenu} from 'react-icons/hi'
import NavContent from "../navContent"
import {FiUser} from 'react-icons/fi'
import { Link } from "react-router-dom"
import { ProfileSheet } from "./ProfileSheet"


export function NavMenuSheet() {
  return (
    <div>
        <Sheet key={"left"}>
          <SheetTrigger asChild>
          <HiMenu className="ml-2" size={25}/>
          </SheetTrigger>
          <SheetContent  side={"left"}>
                <div className="w-full  h-30 my-5 p-4">
                    <FiUser className="w-16 h-16  bg-[#ededed] p-2 " ></FiUser>
                    <div className="mt-5">
                    <ProfileSheet avatar={false}></ProfileSheet>
                    </div>
                    <div className="mt-5 flex">
                    <Link className="text-lg" to='/login'>Login</Link>
                    <div className="border-r-2 border-black h-8 mx-4"></div>
                    <Link className="text-lg" to='/register'>Register</Link>
                    </div>
                </div>
                <hr />  
                <div className="my-10">
                <NavContent></NavContent>
                </div>
                <hr />
              <SheetClose asChild>
              </SheetClose>
          </SheetContent>
        </Sheet>
    </div>
  )
}
