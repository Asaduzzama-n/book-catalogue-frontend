"use client";

import { useForm } from "react-hook-form";
import { FaTelegramPlane } from "react-icons/fa";

type NewsLetter = {
  gmail: string | null;
};

export default function NewsLetter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsLetter>();

  const onSubmit = (data: NewsLetter) => {
    console.log(data.gmail);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="relative mb-5">
        <div className="relative flex md:w-1/4 mx-auto">
          <input
            {...register("gmail")}
            type="text"
            className="w-full py-2 pl-3 pr-10  outline-none focus:outline-none"
            placeholder="Email..."
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center text-white bg-primary dark:bg-secondary px-4"
          >
            <FaTelegramPlane className="h-5 w-5 " />
          </button>
        </div>
      </form>
    </div>
  );
}
