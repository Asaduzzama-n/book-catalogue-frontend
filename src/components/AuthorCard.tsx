import { Link } from "react-router-dom";

export default function AuthorCard({ data }: any) {
  return (
    <div className="h-[330px] bg-customBG dark:bg-primary w-[170px] rounded-lg mx-auto">
      <div className="hover:opacity-90 ">
        <Link to={`/authors/${data.title}`}>
          {" "}
          <img className="w-full rounded-t-md" src={data.img} alt="" />
          <div className="">
            <h2 className="text-lg font-medium p-2">{data.title}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
