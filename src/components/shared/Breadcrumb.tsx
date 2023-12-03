import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";

interface BreadcrumbProps {
  paths: { label: string; url: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <nav className="flex items-center text-lg  light:text-[#232F3E]">
      <Link to="/" className="flex items-center hover:text-secondary">
        <AiOutlineHome className="mr-1" />
        Home
      </Link>
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {/* <AiOutlineRight className="mx-1" /> */}
          <p className="mx-1">/</p>
          <Link className="hover:text-secondary " to={path.url}>
            {path.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
