import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

import { category } from "../../../public/navBarBooksCategory";

export default function NavContent() {
  return (
    <div>
      <NavigationMenu className="false md:flex items-center justify-between list-none ">
        <NavigationMenuItem className="my-5 md:mx-5 hover:bg-[#ededed] p-2 rounded-md">
          <NavigationMenuTrigger className="text-lg">
            Books
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 w-full bg-white mt-6 md:mt-4  text-black shadow-md p-4 z-10">
            <div className="md:flex justify-between lg:w-4/5 mx-auto max-h-80 overflow-y-auto">
              <div className="">
                <h2 className="font-bold mb-2 border-b-2 border-black">
                  ACADEMIC & NON FICTION
                </h2>
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                  {category
                    .filter((item) => item.group === "ACADEMIC & NON FICTION")
                    .map((component) => (
                      <li key={component.title}>
                        <Link to={component.href}>{component.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2 border-b-2 border-black">
                  LANGUAGE, LOVE & LITERATURE
                </h2>
                <ul>
                  {category
                    .filter(
                      (item) => item.group === "LANGUAGE, LOVE & LITERATURE"
                    )
                    .map((component) => (
                      <li key={component.title}>
                        <Link to={component.href}>{component.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2 border-b-2 border-black">
                  CHILDREN'S BOOKS
                </h2>
                <ul>
                  {category
                    .filter((item) => item.group === "CHILDREN'S BOOKS")
                    .map((component) => (
                      <li key={component.title}>
                        <Link to={component.href}>{component.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2 border-b-2 border-black">
                  UPL SERIES
                </h2>
                <ul>
                  {category
                    .filter((item) => item.group === "CHILDREN'S BOOKS")
                    .map((component) => (
                      <li key={component.title}>
                        <Link to={component.href}>{component.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-5 md:mx-5 hover:bg-[#ededed] p-2 rounded-md">
          <Link className="text-lg" to="/authors">
            Authors
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-5 md:mx-5 hover:bg-[#ededed] p-2 rounded-md">
          <Link className="text-lg" to="/best-sellers">
            Best sellers
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-5 md:mx-5 hover:bg-[#ededed] p-2 rounded-md">
          <NavigationMenuTrigger className="text-lg">
            Conversations
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute  mt-2 bg-white shadow-md p-4 ">
            <ul className="">
              <li>
                <Link to="/event">Event</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>

              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
}
