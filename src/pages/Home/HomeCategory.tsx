import { Link } from "react-router-dom";
import historyCat from "../../assets/images/historyCat.png";
import socialScienceCat from "../../assets/images/socialScienceCat.png";
import economicsCat from "../../assets/images/economicsCat.png";
import politicalScienceCat from "../../assets/images/politicalScienceCat.png";
import { Button } from "@/components/ui/button";

export default function HomeCategory() {
  return (
    <div className="grid grid-cols-2 gap-20 p-10">
      <div className="">
        <h2 className="light:text-[#232F3E] font-medium text-4xl">
          CATEGORIES
        </h2>
        <p className="my-10 text-lg font-sans ">
          A pioneer in academic and scholarly publishing in Bangladesh, UPL has
          cultivated the work of some of Bangladesh’s best scholars and literary
          talents. Our catalog includes books on politics, governance, history,
          sociology, development, gender, education, health, environment,
          anthropology, religion, economics, autobiography/biography, and a
          commendable collection of literary titles – in both English and Bangla
          languages. <br /> <br />
          UPL’s scholarly publications are considered some of the best resources
          for research on Bangladesh and are highly sought after by academics
          worldwide. Our literary collection also presents the works of
          brilliant writers in the poetry, fiction and short story genres.
        </p>
        <Button className="light:bg-primary ">DOWNLOAD CATALOGUE</Button>
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
