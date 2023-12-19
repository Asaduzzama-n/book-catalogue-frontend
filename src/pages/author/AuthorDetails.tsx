import { useParams } from "react-router-dom";
import p from "../../assets/images/politicalScienceCat.png";
import { books } from "../../../public/dummyData";
export default function AuthorDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen container">
      <div className="flex flex-col md:flex-row items-center justify-center border-y-4 dark:border-primary  my-10 p-10">
        <img className="h-[200px] mr-5" src={p} alt="" />
        <div>
          <h2 className="text-2xl font-medium  my-2">{id}</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            corporis laudantium soluta voluptatem quo, autem hic quis laborum
            error possimus fuga enim veniam sapiente explicabo vitae ratione,
            praesentium id aliquid! Quos at dolorem, beatae repellendus commodi
            nisi ipsa amet dignissimos maxime eius sed pariatur error! Delectus
            aut et quis accusamus.
          </p>
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
        {books.map((book, index) => (
          // <BookCard book={book} key={index}></BookCard>
          <div>
            {book.title}
            <div>{index}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
