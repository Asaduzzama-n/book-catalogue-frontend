import NewsLetter from "@/components/forms/NewsLetter";
import logo from "../../../assets/logo/logo-2.png";

import { Link } from "react-router-dom";
import { TfiFacebook } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin, BiPhone } from "react-icons/bi";

export default function Footer() {
  return (
    <div className=" bg-customBG text-primary dark:bg-primary dark:text-white p-5 mt-20">
      <div className="text-center my-5">
        <div className="mb-5 text-primary dark:text-white">
          <h2 className="text-xl font-bold ">GET THE LATEST NEWS FROM US!</h2>
          <p className="text-md">We Never Spam Your Inbox!</p>
        </div>
        <NewsLetter></NewsLetter>
      </div>

      <div className="grid lg:grid-cols-3 md:gap-20 my-5 md:w-3/4 mx-auto ">
        <div className="">
          <img className="h-20 mb-4" src={logo} alt="" />
          <div className="md:w-1/2  text-md">
            <p className="my-2">
              The University Press Limited 74/B/1 Green Road, RH Home Center 2nd
              Floor, Suit# 232-239, Farmgate Dhaka 1215
            </p>
            <p className="my-2">Trade License No. TRAD/DNCC/075880/2022</p>
            <ul className="text-md">
              <li className="flex items-center md:justify-around">
                <BiPhone></BiPhone> (+8802) 44815288
              </li>
              <li className="flex items-center md:justify-around">
                <BiPhone></BiPhone>(+8802) 44815289
              </li>
              <li className="flex items-center md:justify-around">
                <BiPhone></BiPhone>(+8802) 57160710
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:gap-20 my-5 md:my-0 ">
          <div className="md:mt-20">
            <h2 className="text-xl font-bold text-primary dark:text-white w-14 ">
              MENU
            </h2>
            <ul className=" my-2 text-md">
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/authors">Authors</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy & Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="md:mt-20 text-primary dark:text-white">
            <h2 className="text-xl font-bold  w-14 ">CATEGORIES</h2>
            <ul className=" my-2 text-md">
              <li>
                <Link to="/road-to-bangladesh">Road to Bangladesh</Link>
              </li>
              <li>
                <Link to="/authors">Anthropology</Link>
              </li>
              <li>
                <Link to="/events">Social Science</Link>
              </li>
              <li>
                <Link to="/blogs">Political Science</Link>
              </li>
              <li>
                <Link to="/about-us">History</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Gender & Women Studies</Link>
              </li>
              <li>
                <Link to="/terms-of-service">International Relations</Link>
              </li>
              <li>
                <Link to="/faqs">Fiction</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:ml-60">
          <div className="md:mt-20 text-primary dark:text-white ">
            <h2 className="text-xl font-bold">OTHERS</h2>
            <ul className=" my-2 text-md">
              <li>
                <Link to="/catalog-download">Download Catalogs</Link>
              </li>
              <li>
                <Link to="/upl-authors">UPL Authors</Link>
              </li>
              <li>
                <Link to="/outlets">UPL Outlets</Link>
              </li>
              <li>
                <Link to="/how-to-order">How to order</Link>
              </li>
              <li className="flex items-center my-10">
                <Link to={"/"}>
                  <TfiFacebook className="mr-4" size={25}></TfiFacebook>
                </Link>
                <Link to={""}>
                  <FaXTwitter className="mr-4" size={25}></FaXTwitter>
                </Link>
                <Link to={""}>
                  <BiLogoLinkedin className="mr-4" size={25}></BiLogoLinkedin>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="" />

      <div className="mt-5">
        <p className="text-primary dark:text-white text-center  font-bold">
          © 2023 Asaduzzaman All Rights Reserved
        </p>
      </div>
    </div>
  );
}
