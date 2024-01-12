"use client";

import { setSearchTerm } from "@/redux/features/books/bookSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

type SearchInput = {
  searchKey: string | null;
};

export default function NavSearchForm() {
  const {
    register,
    formState: { errors },
  } = useForm<SearchInput>();

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div>
      <form className="relative mb-5">
        <div className="relative flex md:w-2/4 mx-auto">
          <label htmlFor="searchKey" className="sr-only">
            Search
          </label>
          <input
            {...register("searchKey", { required: "Search key is required" })}
            type="text"
            id="searchKey"
            onChange={handleChange} // Add onChange handler
            className={`w-full py-2 pl-3 pr-10 border text-primary ${
              errors.searchKey ? "border-red-500" : ""
            }  outline-none focus:outline-none`}
            placeholder="Search..."
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center border  bg-primary px-4 text-white"
            aria-label="Search"
          >
            <FiSearch className="h-5 w-5" />
          </button>
        </div>
        {errors.searchKey && (
          <span className="text-red-500 text-sm mt-1">
            {errors.searchKey.message}
          </span>
        )}
      </form>

      <hr />
    </div>
  );
}
