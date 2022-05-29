import React from "react";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-[50px]">
      <div className="px-20">
        <div className="flex">
          <div className="flex-1">
            <img className="logo w-[200px]" src={Logo} alt="" />
            <div className="copy">&copy; Red Onion Restaurent</div>
          </div>
          <div className="flex">
            <div className=" mr-20">
              <p>About Us</p>
              <p>Read Our Blog</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
            <div className="">
              <p>Get Help</p>
              <p>Read FAQs</p>
              <p>Pricing</p>
              <p>Restaurent Near Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
