"use client"

import { useForm } from "react-hook-form"
import {FiSearch} from 'react-icons/fi'
 
type SearchInput = {
    searchKey : string | null;
}



export default function NavSearchForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<SearchInput>()

      const onSubmit = (data:SearchInput) => {
        console.log(data.searchKey);
      };


  return (
    <div>

     <form onSubmit={handleSubmit(onSubmit)} className="relative mb-5">
        <div className="relative flex w-2/4 mx-auto">
          <input
            {...register('searchKey')}
            type="text"
            className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-l-lg outline-none focus:outline-none"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center border border-gray-300 bg-[#ededed] px-4 text-gray-500"
          >
            <FiSearch className="h-5 w-5 " />
          </button>
        </div>
      </form>

        <hr />


  </div>
  

  
  )
}
