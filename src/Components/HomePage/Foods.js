import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../SharedComponents/CustomLinks";

const Foods = () => {
  return (
    <div className="mt-20 font-popins">
      <div>
        <h1 className="text-5xl mb-10 text-center">
          Menu That Will Always <br /> Make You Fall In Love
        </h1>
        <div className="flex justify-center gap-5 text-2xl">
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
