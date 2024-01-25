import Breadcrumb from "@/components/shared/Breadcrumb";
import ShopDisplay from "./ShopDisplay";
import ShopFilter from "./ShopFilter";
import { useGetFilteredBooksQuery } from "@/redux/features/shop/shopApi";
import { useEffect } from "react";
import { IBook } from "@/types/globalTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

export default function Shop() {
  const queryString = window.location.search;

  const { data, refetch } = useGetFilteredBooksQuery(queryString);
  const books: IBook[] = data?.data;

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const language = searchParams.get("language");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const limit = searchParams.get("limit");
  const sortBy = searchParams.get("sortBy");
  const sortOrder = searchParams.get("sortBy");

  const breadcrumbPaths = [
    { label: "Books", url: "/shop" },
    { label: category, url: `/shop?category=${category}` },
  ];

  useEffect(() => {
    refetch();
  }, [queryString, language, category, minPrice, maxPrice]);

  const handleLimitChange = (value: string) => {
    setSearchParams((prevParams: string) => {
      const updatedParams = new URLSearchParams(prevParams);
      updatedParams.set("limit", value);
      return updatedParams;
    });
  };

  const handleSortByChange = (value: string) => {
    // Split the value into sortBy and sortOrder
    const [sortBy, sortOrder] = value.split("-");

    setSearchParams((prevParams: string) => {
      const updatedParams = new URLSearchParams(prevParams);
      updatedParams.set("sortBy", sortBy);
      updatedParams.set("sortOrder", sortOrder);
      return updatedParams;
    });
  };

  return (
    <div className="container my-5">
      <div className="md:flex items-center my-10 justify-between">
        <div className="md:flex">
          <Breadcrumb paths={breadcrumbPaths}></Breadcrumb>
          <p className=" ml-2">
            -
            <span className="text-primary dark:text-white font-medium mx-2">
              {books && books.length}
            </span>
            items
          </p>
        </div>
        <div className="md:w-1/2 flex md:justify-end mt-5 md:mt-0">
          {/* Book search ,filter, sort and limit option */}

          <div className="">
            <Select onChange={handleSortByChange}>
              <SelectTrigger className="w-[150px] focus:outline-none">
                <SelectValue placeholder="Sort by: Newest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="createdAt-desc">Newest Arrivals</SelectItem>
                <SelectItem value="createdAt-asc">Name (A-Z)</SelectItem>
                <SelectItem value="price-asc">Price low to High</SelectItem>
                <SelectItem value="price-desc">Price high to low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mx-5">
            <Select onChange={handleLimitChange}>
              <SelectTrigger className="w-[150px] focus:outline-none">
                <SelectValue placeholder="Limit: 10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
                <SelectItem value="200">200</SelectItem>
                <SelectItem value="300">300</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="md:flex min-h-screen my-5 justify-between ">
        <div className=" p-5 md:p-0 w-full md:w-1/5">
          <ShopFilter
            setSearchParams={setSearchParams}
            category={category}
            language={language}
            minPrice={minPrice}
            maxPrice={maxPrice}
          ></ShopFilter>
        </div>
        <div className="md:w-3/4">
          <ShopDisplay books={books}></ShopDisplay>
        </div>
      </div>
    </div>
  );
}
