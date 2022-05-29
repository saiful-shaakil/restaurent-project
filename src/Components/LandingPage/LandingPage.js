import React from "react";
import Banner from "../HomePage/Banner";
import Foods from "../HomePage/Foods";
import Footer from "../HomePage/Footer";
import MobileAppSection from "../HomePage/MobileAppSection";
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
      <Foods></Foods>
      <MobileAppSection></MobileAppSection>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
