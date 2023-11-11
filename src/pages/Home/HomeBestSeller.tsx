import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/utils/carousel/carousel";
import { Button } from "@/components/ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { dummy } from "../../../public/dummyData";
import { showToast } from "@/utils/carousel/customToast/CustomToast";

export default function HomeBestSeller() {
  const handleAddToCart = (message: string) => {
    showToast(message.slice(0, 15) + "...");
  };

  return (
    <div className="text-center ">
      <div className="text-center p-5">
        <h1 className="text-4xl font-medium">BEST SELLERS</h1>
      </div>

      <div className="my-10">
        <div className="w-11/12 md:w-3/4 mx-auto">
          <Carousel
            className="z-0"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable={true}
            // infinite={true}
            responsive={responsive}
          >
            {dummy.map((data, index) => (
              <div key={index} className="text-center  ">
                <img
                  className="h-[400px] mx-auto"
                  src={data?.img}
                  alt={data?.title}
                />
                <Button
                  onClick={() => {
                    handleAddToCart("This is book");
                  }}
                  className="bg-[#232F3E] text-[#C89949] hover:bg-[#C89949] hover:text-[#232F3E] mt-5"
                >
                  <AiOutlineShoppingCart className="mr-2" size={20} />
                  ADD TO CART
                </Button>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="mt-10 border-b-2 border-yellow-600 w-60 mx-auto">
          <Link
            className="text-[#232F3E] hover:text-yellow-600 text-lg font-medium "
            to={"/"}
          >
            VIEW ALL BESTSELLERS
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}
