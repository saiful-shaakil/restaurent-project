import React from "react";
import Banner from "../HomePage/Banner";
import MultipleServices from "../HomePage/MultipleServices";
import PopularChoices from "../HomePage/PopularChoices";
import Navbar from "../SharedComponents/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <PopularChoices></PopularChoices>
      <MultipleServices></MultipleServices>
    </div>
  );
};

export default LandingPage;
