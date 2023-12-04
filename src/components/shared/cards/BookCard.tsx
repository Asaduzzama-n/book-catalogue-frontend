import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function BookCard(props: any) {
  const { data } = props;
  return (
    <div className="mx-auto max-w-fit relative group">
      <div className="relative">
        <Link to={`/details/:${data.title}`}>
          {" "}
          <img
            className="w-full h-80 rounded-md cursor-pointer group-hover:opacity-80"
            src={data.img}
            alt="book"
          />
          <button className="absolute bottom-0 left-0 right-0 md:opacity-0 transition-all duration-300 group-hover:opacity-100 bg-primary p-2 w-full text-white  font-medium hover:bg-secondary ">
            Read Now
          </button>
        </Link>
        <button className="absolute top-2 right-2 md:opacity-0 rounded-full transition-all duration-300 group-hover:opacity-100 bg-primary p-2 text-white  font-medium hover:bg-secondary ">
          <IoEyeOutline />
        </button>
      </div>
      <div className="mt-1">
        <div className="text-start">
          <p className="font-medium">{data.title}</p>
          <div className="flex">
            <span>4.4</span>
            <span className="ml-5">{data.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
