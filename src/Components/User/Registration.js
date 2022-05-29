import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/bannerbackground.png";
import logo from "../../assets/images/logo2.png";

const Registration = () => {
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="bg-grey-lightershadow min-h-screen flex flex-col">
        <div class="container max-w-sm  mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class=" px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl flex justify-center">
              <img className="w-60" src={logo} alt="" />
            </h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              class="w-full btn btn-primary text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
            <p className="text-sm text-center mt-3 dark:text-gray-400">
              Already have an account? &nbsp;
              <Link
                to="/login"
                href="#"
                rel="noopener noreferrer"
                className="focus:underline underline"
              >
                Sign in
              </Link>
            </p>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the &nbsp;
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              &nbsp; and &nbsp;
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
