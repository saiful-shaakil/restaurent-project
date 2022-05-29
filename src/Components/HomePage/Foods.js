import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../SharedComponents/CustomLinks";

const Foods = () => {
  return (
    <div>
      <div>
        <CustomLink>Breakfast</CustomLink>
        <CustomLink>Lunch</CustomLink>
        <CustomLink>Dinner</CustomLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Foods;
