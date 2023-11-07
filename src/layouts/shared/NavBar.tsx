"use client"

import { Link } from "react-router-dom";
import logo from '../../assets/logo/logo.png'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { ResponsiveNavSheet } from "../ResponsiveNavSheet";
import { ProfileSheet } from "./navSheet/ProfileSheet";
import { SearchSheet } from "./navSheet/SearchSheet";


export default function NavBar() {

  const components: { title: string; href: string; }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
     
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
    
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
     
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
     
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      
    },    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      
    },    {
      title: "Tooltipeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      href: "/docs/primitives/tooltip",
      
    },
  ]
   


  return (
    <nav className="h-[60px] w-full fixed-top  md:w-4/5 m-auto flex items-center justify-between">

      <div className="md:hidden">
        <ResponsiveNavSheet view="left" /> 
      </div>
      
      <div>
        <img className="h-14" src={logo} alt="" />
      </div>
      <div>

      <NavigationMenu className="md:flex items-center justify-between list-none hidden">
        <NavigationMenuItem className="mx-5">
          <NavigationMenuTrigger>Books</NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 w-full mt-5  text-black shadow-md p-4 ">
            <ul className="grid gap-2 md:grid-cols-4 md:w-4/5 m-auto">
              {components.map((component) => (
                <li key={component.title}>
                  <Link to={component.href}>{component.title}</Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="mx-5">
          <Link to='/'>Authors</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="mx-5">
          <Link to='/'>Best sellers</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="mx-5">
          <NavigationMenuTrigger>Conversations</NavigationMenuTrigger> 
          <NavigationMenuContent className="absolute   bg-white shadow-md p-4 ">
            <ul className="">
                <li>
                  <Link to=''>Event</Link>
                </li>
                      
                <li>
                  <Link to=''>Blog</Link>
                </li>
                             
                <li>
                  <Link to=''>Contact us</Link>
                </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
      </div>

      <div>
        <SearchSheet></SearchSheet>
      </div>
      <div>
        <ProfileSheet></ProfileSheet> 
      </div>
      
    </nav>

    
  );
  
}
