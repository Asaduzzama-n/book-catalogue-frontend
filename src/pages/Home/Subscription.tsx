import backgroundSvg from "../../assets/svgs/undraw_reading_time_re_phf7 (1).svg";
import backgroundSvg2 from "../../assets/svgs/undraw_mathematics_-4-otb.svg";

export default function Subscription() {
  return (
    <div className="flex justify-between min-h-[300px] bg-customBG dark:bg-primary  items-center relative p-4">
      <div className="w-1/3 hidden md:inline-block">
        <img
          className="h-60  absolute -bottom-0 left-6"
          src={backgroundSvg}
          alt=""
        />
      </div>
      <div className="w-1/2 md:w-1/3 text-center mx-auto">
        <h1 className="scroll-m-20 mt-2 text-3xl font-bold tracking-tight font-serif lg:text-4xl">
          Read anywhere. Anytime.
        </h1>
        <h3 className="scroll-m-20 mt-2 text-xl font-medium font-serif tracking-tight">
          Discover the best reads on various topics of interest. <br /> Cancel
          anytime.
        </h3>
        <button className="p-2 mt-2 bg-primary hover:opacity-80 text-white rounded-md dark:bg-customBG dark:text-primary font-semibold font-serif">
          SUBSCRIBE NOW
        </button>
      </div>
      <div className="w-1/2 md:w-1/3 hidden md:inline-block">
        <img
          className="h-52 md:h-60 absolute -bottom-6 right-6"
          src={backgroundSvg2}
          alt=""
        />
      </div>
    </div>
  );
}
