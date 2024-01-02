import BookRating from "@/components/shared/BookRating";

export default function DisplayRating() {
  return (
    <div className="min-h-44">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="">
          <h3 className="font-semibold text-lg">Overall rating</h3>
          <p className="font-semibold">4.5 out of 5</p>
          <BookRating rating={4.5} total={10}></BookRating>
        </div>
        <div className="h-auto w-[2px] bg-customBG mx-5 hidden md:inline-block"></div>
        <hr className="my-2 md:hidden" />
        <div className="my-5">
          {[5, 4, 3, 2, 1].map((key) => (
            <div className="flex items-center text-sm mb-2">
              <p>{key} STARS</p>
              <div className="relative">
                <div className="h-5 w-[200px] bg-customBG dark:bg-primary mx-5 relative overflow-hidden">
                  <div
                    className="h-full bg-primary dark:bg-customBG absolute"
                    style={{ width: `${40}%` }}
                  ></div>
                </div>
              </div>
              <span>14</span>
            </div>
          ))}
        </div>
        <div className="h-auto w-[2px] bg-customBG mx-5 hidden md:inline-block"></div>
        <hr className="my-2 md:hidden" />
        <div>
          <h2 className="text-lg mb-4">Share your thoughts</h2>
          <button className="bg-primary px-3 py-1 font-semibold text-white">
            Write your review
          </button>
        </div>
      </div>
    </div>
  );
}
