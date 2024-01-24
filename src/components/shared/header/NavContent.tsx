import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { useGetCategoryQuery } from "@/redux/features/shop/shopApi";
import { useAppDispatch } from "@/redux/hooks";
import { setCategory } from "@/redux/features/shop/shopSlice";

interface ICategory {
  category: string;
  key: string;
  parentCategory: String;
}
export default function NavContent() {
  const { data } = useGetCategoryQuery(undefined) || {};
  const categories = data?.data;
  const dispatch = useAppDispatch();

  const handleOnclick = (key: string) => {
    dispatch(setCategory(key));
  };

  return (
    <div>
      <NavigationMenu className="false md:flex items-center justify-between list-none ">
        <NavigationMenuItem className="my-5 md:mx-5 hover:bg-customBG dark:hover:bg-secondary  p-2 rounded-md">
          <NavigationMenuTrigger className="text-md">
            Books
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 w-full bg-customBG dark:bg-primary mt-6 md:mt-4   shadow-md p-4 z-10">
            <div className="md:flex justify-between lg:w-4/5 mx-auto max-h-80 overflow-y-auto">
              <div className="">
                <h2 className="font-bold mb-2 border-b-2 border-primary dark:border-white">
                  ACADEMIC & NON FICTION
                </h2>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                  {categories &&
                    categories
                      .filter(
                        (category: ICategory) =>
                          category.parentCategory === "ACADEMIC & NON FICTION"
                      )
                      .map((category: ICategory) => (
                        <li key={category.category}>
                          <Link
                            onClick={() => dispatch(setCategory(category.key))}
                            className="hover:border-b-2 border-primary dark:border-white "
                            to={`/shop?category=${category.key}`}
                          >
                            {category.category}
                          </Link>
                        </li>
                      ))}
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2 border-b-2 border-primary dark:border-white">
                  LANGUAGE, LOVE & LITERATURE
                </h2>
                <ul>
                  {categories &&
                    categories
                      .filter(
                        (category: ICategory) =>
                          category.parentCategory ===
                          "LANGUAGE, LOVE & LITERATURE"
                      )
                      .map((category: ICategory) => (
                        <li key={category.category}>
                          <Link
                            onClick={() => handleOnclick(category.key)}
                            className="hover:border-b-2 border-primary dark:border-white"
                            to={`/shop?category=${category.key}`}
                          >
                            {category.category}
                          </Link>
                        </li>
                      ))}
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2 border-b-2 border-primary dark:border-white">
                  CHILDREN'S BOOKS
                </h2>
                <ul>
                  {categories &&
                    categories
                      .filter(
                        (category: ICategory) =>
                          category.parentCategory === "CHILDREN'S BOOKS"
                      )
                      .map((category: ICategory) => (
                        <li key={category.category}>
                          <Link
                            className="hover:border-b-2 border-primary dark:border-white"
                            to={`/shop?category=${category.key}`}
                          >
                            {category.category}
                          </Link>
                        </li>
                      ))}
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2 border-b-2 border-primary dark:border-white">
                  UPL SERIES
                </h2>
                <ul>
                  {categories &&
                    categories
                      .filter(
                        (category: ICategory) =>
                          category.parentCategory === "UPL SERIES"
                      )
                      .map((category: ICategory) => (
                        <li key={category.category}>
                          <Link
                            className="hover:border-b-2 border-primary dark:border-white"
                            to={`/shop?category=${category.key}`}
                          >
                            {category.category}
                          </Link>
                        </li>
                      ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-5 md:mx-5 hover:bg-customBG dark:hover:bg-secondary  p-2 rounded-md">
          <Link className="text-md" to="/welcome">
            Authors
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-5 inline-block md:hidden lg:inline-block md:mx-5 hover:bg-customBG dark:hover:bg-secondary p-2 rounded-md">
          <Link className="text-md" to="/best-sellers">
            Best sellers
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="my-5 md:mx-5 hover:bg-customBG dark:hover:bg-secondary p-2 rounded-md">
          <NavigationMenuTrigger className="text-md ">
            Conversations
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute  mt-4 dark:bg-primary bg-white shadow-md px-4 z-10">
            <ul className="">
              <li className="my-2 hover:border-b-2 border-primary dark:border-white">
                <Link to="/event">Event</Link>
              </li>

              <li className="hover:border-b-2 border-primary dark:border-white">
                <Link to="/blog">Blog</Link>
              </li>

              <li className="my-2 hover:border-b-2 border-primary dark:border-white">
                <Link to="/contact-us">Contact us</Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
}
