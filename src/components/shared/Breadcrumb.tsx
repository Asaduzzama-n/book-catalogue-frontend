import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";

interface BreadcrumbProps {
  paths: { label: string | null; url: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <nav className="flex items-center   dark:text-white text-primary">
      <Link to="/" className="flex items-center hover:opacity-90">
        <AiOutlineHome className="mr-1" />
        Home
      </Link>
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {/* <AiOutlineRight className="mx-1" /> */}
          <p className="mx-1">/</p>
          <Link className="hover:opacity-90 " to={path.url}>
            {path.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
