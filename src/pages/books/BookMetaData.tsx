export default function BookMetaData() {
  return (
    <div className=" grid grid-cols-3 gap-y-5 md:grid-cols-5  text-center">
      <div className="">
        <p className="text-primary dark:text-white font-medium">Language</p>
        <p className="mt-2">English</p>
      </div>
      <div className="">
        <p className="text-primary dark:text-white font-medium">Publisher(s)</p>
        <p className="mt-2">English</p>
      </div>
      <div className="">
        <p className="text-primary dark:text-white font-medium">
          Published Date
        </p>
        <p className="mt-2">English</p>
      </div>
      <div className="">
        <p className="text-primary dark:text-white font-medium">Page length</p>
        <p className="mt-2">English</p>
      </div>
      <div className="">
        <p className="text-primary dark:text-white font-medium">ISBN</p>
        <p className="mt-2">English</p>
      </div>
    </div>
  );
}
