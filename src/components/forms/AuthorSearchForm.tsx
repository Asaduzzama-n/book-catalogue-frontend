import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";

type AuthorSearchFormInput = {
  search: string;
  sortBy: string;
};

export default function AuthorSearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorSearchFormInput>();
  const onSubmit: SubmitHandler<AuthorSearchFormInput> = (data) =>
    console.log(data);
  return (
    <div>
      {" "}
      <form className="flex" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="mx-2 p-1 d  md:w-60"
          placeholder="Search by name.."
          {...register("search")}
        />

        <select
          className="text-white bg-primary mx-2 p-2 outline-none  "
          {...register("sortBy")}
        >
          <option value="name">Sort By Name</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <button
          className="bg-primary p-2 ml-2 text-white cursor-pointer"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
