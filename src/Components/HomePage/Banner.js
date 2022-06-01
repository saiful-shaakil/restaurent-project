import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import background from "../../assets/images/bannerbackground.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse text-center">
        <div>
          <h1 className="text-5xl font-bold font-popins">
            We're Always Serious About <br /> Food &amp; Delivery
          </h1>
          <p className="py-6 font-popins text-xl">
            Best cooks and best delivery guys is always at your service. Hot
            tasty food will reach you in 60 minutes.
            {/* search fiels */}
            <div className="flex items-center justify-center">
              <fieldset className="w-[400px] mt-2 space-y-1 border-2 rounded-lg  dark:text-gray-100">
                <div className="flex">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search your favourite food"
                    className="flex bg-transparent text-black flex-1 py-2 px-2  text-left sm:text-sm rounded-lg focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400"
                  />
                  <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  </span>
                </div>
              </fieldset>
            </div>
          </p>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
