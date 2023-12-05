import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";

type CommonSearchFormInput = {
  search: string;
  sortBy: string;
};

export default function CommonSearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommonSearchFormInput>();
  const onSubmit: SubmitHandler<CommonSearchFormInput> = (data) =>
    console.log(data);
  return (
    <div>
      {" "}
      <form className="md:flex " onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="mx-2 p-1 d mb-2 md:mb-0  md:w-60"
          placeholder="Search by name.."
          {...register("search")}
        />

        <select
          className="text-white bg-primary mx-2 p-2 outline-none mt-2 md:mt-0 w-full md:w-fit"
          {...register("sortBy")}
        >
          <option value="name">Sort By Name</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <button
          className="bg-primary p-2 ml-2 text-white cursor-pointer mt-2 md:mt-0 w-full md:w-fit"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
