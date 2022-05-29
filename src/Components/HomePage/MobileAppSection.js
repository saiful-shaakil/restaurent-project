import React from "react";
import dGoogle from "../../assets/images/Google-Play-Store-Button.png";
import dappstore from "../../assets/images/App-Store-Button-transparent.png";

const MobileAppSection = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/q9J7ydd/young-chef-with-mobile.jpg"
          className="max-w-sm lg:max-w-lg rounded-lg"
          alt="chef-with-mobile"
        />
        <div>
          <h1 className="text-5xl font-bold">
            It’s Now More Easy to Order by Our Mobile App
          </h1>
          <p className="py-6 lg:pr-16">
            All you need to do is download one of the best delivery apps, make a
            and most companies are opting for mobile app devlopment for food
            delivery
          </p>
          <div className="flex">
            <img className="w-36 mr-2 cursor-pointer" src={dGoogle} alt="" />
            <img className="w-36 cursor-pointer" src={dappstore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
