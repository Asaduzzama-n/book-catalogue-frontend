"use client"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Label } from "@radix-ui/react-dropdown-menu"
import {HiMenu} from 'react-icons/hi'
const SHEET_SIDES = ["right"] as const


export function ResponsiveNavSheet({ view }: { view: string }) {
  return (
    <div>
        <Sheet key={view}>
          <SheetTrigger asChild>
          <Avatar>
              <AvatarImage className="h-12 rounded-full" src="https://github.com/shadcn.png" />
              <AvatarFallback ><HiMenu/></AvatarFallback>
          </Avatar>
          </SheetTrigger>
          <SheetContent  side={view as "right" | "top" | "bottom" | "left" | null | undefined}>
            
              <SheetClose asChild>
              </SheetClose>
          </SheetContent>
        </Sheet>
    </div>
  )
}
