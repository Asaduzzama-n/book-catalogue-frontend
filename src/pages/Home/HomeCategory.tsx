import { Link } from "react-router-dom";
import historyCat from "../../assets/images/historyCat.png";
import socialScienceCat from "../../assets/images/socialScienceCat.png";
import economicsCat from "../../assets/images/economicsCat.png";
import politicalScienceCat from "../../assets/images/politicalScienceCat.png";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";


export default function HomeCategory() {
const {t} = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-20 mt-10">
      <div className="">
        <h2 className="light:text-[#232F3E] font-medium text-4xl">
          CATEGORIES
        </h2>
        <p className="my-10 text-lg font-sans ">
          {t("categories_description")}
          
        </p>
        <Button className="bg-primary  text-white">DOWNLOAD CATALOGUE</Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="block w-full h-full overflow-hidden">
          <Link className="block w-full h-full" to={"/category/history"}>
            <img
              className="w-full  h-full object-cover transition-all duration-300 ease-in-out transform scale-100 hover:scale-110"
              src={historyCat}
              alt=""
            />
          </Link>
        </div>
        <div className="block w-full h-full overflow-hidden">
          <Link className="block w-full h-full" to={"/category/social-science"}>
            <img
              className="w-full  h-full object-cover transition-all duration-300 ease-in-out transform scale-100 hover:scale-110"
              src={socialScienceCat}
              alt=""
            />
          </Link>
        </div>
        <div className="block w-full h-full overflow-hidden">
          <Link
            className="block w-full h-full"
            to={"/category/business-and-economics"}
          >
            <img
              className="w-full  h-full object-cover transition-all duration-300 ease-in-out transform scale-100 hover:scale-110"
              src={economicsCat}
              alt=""
            />
          </Link>
        </div>
        <div className="block w-full h-full overflow-hidden">
          <Link
            className="block w-full h-full"
            to={"/category/political-science"}
          >
            <img
              className="w-full  h-full object-cover transition-all duration-300 ease-in-out transform scale-100 hover:scale-110"
              src={politicalScienceCat}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
