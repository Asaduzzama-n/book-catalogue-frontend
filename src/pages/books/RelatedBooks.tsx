import BookCard from "@/components/shared/cards/BookCard";
import { dummy } from "../../../public/dummyData";

export default function RelatedBooks() {
  return (
    <div className="min-h-screen">
      <div className="my-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
        {dummy.map((data, index) => (
          <BookCard data={data} key={index}></BookCard>
        ))}
      </div>
    </div>
  );
}
