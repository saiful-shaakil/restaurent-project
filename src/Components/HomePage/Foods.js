import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../SharedComponents/CustomLinks";

const Foods = () => {
  return (
    <div className="mt-20 font-popins">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-10 text-center">
          <span className="text-primary">Menu</span> That Will Always <br />{" "}
          Make You Fall In <span className="text-primary">Love</span>
        </h1>
        <div className="flex justify-center gap-5 text-xl md:text-2xl">
          <CustomLink to="/breakfast">Breakfast</CustomLink>
          <CustomLink to="/">Lunch</CustomLink>
          <CustomLink to="/dinner">Dinner</CustomLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Foods;
