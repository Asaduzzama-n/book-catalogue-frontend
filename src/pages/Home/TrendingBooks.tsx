import { filterBooksByTag } from "@/helpers/getBookByTag-helper";
import { Link } from "react-router-dom";

export default function TrendingBooks(props: any) {
  const { books } = props;
  const trendingBooks = filterBooksByTag(books, "Trending");
  console.log(trendingBooks);
  const randomIndex = Math.floor(Math.random() * trendingBooks.length);

  return (
    <div className="bg-customBG dark:bg-primary rounded-md h-full w-full p-5 ">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className=" md:w-4/12">
          <img
            className="h-[260px] mx-auto rounded-md md:h-[410px] "
            src={trendingBooks[randomIndex].coverImg.url}
            alt=""
          />
        </div>
        <div className="md:w-2/3">
          <div className="my-5">
            <h1 className="text-2xl font-semibold">
              {trendingBooks[randomIndex]?.title}
            </h1>
            <p className="my-2">
              <span className="font-medium">By: </span>
              {trendingBooks[randomIndex]?.author?.author1?.name.firstName}
            </p>
            <p>
              <span className="font-medium">Category: </span>
              {trendingBooks[randomIndex]?.categoryName}
            </p>
            <div className="my-5 ">
              <span className="font-medium">Description: </span>
              {trendingBooks[1]?.bookDescription}
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Price: {trendingBooks[randomIndex]?.price}
              </h3>
            </div>
          </div>
          <div className="text-end ">
            <Link
              className="bg-primary dark:bg-customBG dark:text-primary px-4 py-2 text-white font-medium rounded-md"
              to={`/details/${trendingBooks[randomIndex].id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
