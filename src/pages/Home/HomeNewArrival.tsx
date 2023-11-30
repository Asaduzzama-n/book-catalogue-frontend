import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/utils/carousel/carousel";
import { Button } from "@/components/ui/button";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { dummy } from "../../../public/dummyData";

interface IProps {
  handleAddToCart: (message: string) => void;
}

export default function HomeNewArrival({ handleAddToCart }: IProps) {
  return (
    <div className="text-center ">
      <div className="text-center ">
        <h1 className="text-4xl font-medium">NEW ARRIVALS</h1>
      </div>

      <div className="my-10">
        <div className="w-11/12 mx-auto">
          <Carousel
            className="z-0"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable={true}
            // infinite={true}
            responsive={responsive}
          >
            {dummy.map((data, index) => (
              <div className="text-center w-3/5  md:w-4/5 mx-auto relative">
                <Link to={`/details/${data.title}`}>
                  <button
                    onClick={() => {
                      // Handle wishlist logic here
                    }}
                    className="absolute top-2 right-2 bg-[#f0f3f7da]  rounded-full  text-[#232F3E] p-1  hover:bg-[#f0f3f79e] "
                  >
                    <AiOutlineHeart
                      className="h-6 w-6 rounded-full"
                      size={20}
                    />
                  </button>
                  <img
                    className="h-[400px] w-full "
                    src={data?.img}
                    alt={data?.title}
                  />
                </Link>

                {/* Book Info Section */}
                <div className="absolute w-full  bottom-0 left-0 right-0 bg-[#232f3eca] text-white md:pt-5 h-[150px] md:h-[175px] opacity-0 transition-all duration-300 hover:opacity-100">
                  <h3 className="text-xl font-bold">{data?.title}</h3>
                  <p className="text-lg">Price: ${data?.price}</p>
                  <Button
                    onClick={() => {
                      handleAddToCart(data?.title);
                    }}
                    className="bg-[#F0F3F7] text-[#232F3E] hover:bg-[#232F3E] hover:text-[#F0F3F7] mt-5"
                  >
                    <AiOutlineShoppingCart className="mr-2" size={20} />
                    ADD TO CART
                  </Button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="mt-10 border-b-2 border-yellow-600 w-60 mx-auto">
          <Link
            className="text-[#232F3E] hover:text-yellow-600 text-lg font-medium "
            to={"/"}
          >
            VIEW ALL NEW ARRIVALS
          </Link>
        </div>
      </div>
    </div>
  );
}
