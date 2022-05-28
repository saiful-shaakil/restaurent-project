import React from "react";
import Banner from "../HomePage/Banner";
import PopularChoices from "../HomePage/PopularChoices";
import Navbar from "../SharedComponents/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <PopularChoices></PopularChoices>
    </div>
  );
};

export default LandingPage;
