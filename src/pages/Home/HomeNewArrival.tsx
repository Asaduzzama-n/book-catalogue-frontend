import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/utils/carousel/carousel";
import { Button } from "@/components/ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function HomeNewArrival() {
  const dummyData = [
    {
      img: "https://www.uplbooks.com/web/image/product.template/8438/image_512?unique=1ffca3e",
      title: "Book-1",
    },
    {
      img: "https://www.uplbooks.com/web/image/product.template/8436/image_512?unique=1ffca3e",
      title: "Book-2",
    },
    {
      img: "https://www.uplbooks.com/web/image/product.template/11902/image_512?unique=1ffca3e",
      title: "Book-3",
    },
    {
      img: "https://www.uplbooks.com/web/image/product.template/8426/image_512?unique=1ffca3e",
      title: "Book-4",
    },
    {
      img: "https://www.uplbooks.com/web/image/product.template/11693/image_512?unique=16eaa7b",
      title: "Book-5",
    },
    {
      img: "https://www.uplbooks.com/web/image/product.template/11903/image_512?unique=1ffca3e",
      title: "Book-6",
    },
    {
      img: "https://www.uplbooks.com/web/image/product.template/12096/image_512?unique=1ffca3e",
      title: "Book-7",
    },
  ];

  return (
    <div className="my-5 text-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-medium">NEW ARRIVALS</h1>
      </div>

      <div className="my-5">
        <div className="w-11/12 mx-auto">
          <Carousel
            className="z-1"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable={true}
            // infinite={true}
            responsive={responsive}
          >
            {dummyData.map((data, index) => (
              <div key={index} className="text-center  ">
                <img
                  className="h-[400px] mx-auto"
                  src={data?.img}
                  alt={data?.title}
                />
                <Button className="bg-[#232F3E] text-[#C89949] hover:bg-[#C89949] hover:text-[#232F3E] mt-5">
                  <AiOutlineShoppingCart className="mr-2" size={20} />
                  ADD TO CART
                </Button>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="mb-5 border-b-2 border-yellow-600 w-60 mx-auto">
        <Link
          className="text-[#232F3E] hover:text-yellow-600 text-lg font-medium "
          to={"/"}
        >
          VIEW ALL NEW ARRIVALS
        </Link>
      </div>
      <hr />
    </div>
  );
}
