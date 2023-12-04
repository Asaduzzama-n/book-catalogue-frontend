import BookCard from "@/components/shared/cards/BookCard";
import { dummy } from "../../../public/dummyData";

export default function ShopDisplay() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {dummy.map((data, index) => (
          <BookCard data={data} key={index}></BookCard>
        ))}
      </div>
    </div>
  );
}
