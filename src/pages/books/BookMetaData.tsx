import { IBook } from "@/types/globalTypes";

interface IProps {
  book: IBook;
}
export default function BookMetaData(props: IProps) {
  const { book } = props;
  return (
    <div className=" grid grid-cols-3 gap-y-5 md:grid-cols-5  text-center">
      <div className="">
        <p className="text-primary dark:text-white font-medium">Language</p>
        <p className="mt-2">{book?.language}</p>
      </div>
      <div className="">
        <p className="text-primary dark:text-white font-medium">Publisher(s)</p>
        <p className="mt-2">{book?.publisher.name}</p>
      </div>
      <div className="">
        <p className="text-primary dark:text-white font-medium">
          Published Date
        </p>
        <p className="mt-2">{book?.publicationYear}</p>
      </div>
      <div className="">
        <p className="text-primary dark:text-white font-medium">Page length</p>
        <p className="mt-2">English</p>
      </div>
      <div className="">
        <p className="text-primary dark:text-white font-medium">ISBN</p>
        <p className="mt-2">{book?.isbn}</p>
      </div>
    </div>
  );
}
