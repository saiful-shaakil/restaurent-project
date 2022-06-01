import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import background from "../../assets/images/bannerbackground.png";
import logo from "../../assets/images/logo2.png";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../SharedComponents/Loading";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, userofEmail, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userofGoogle, loadingg, errorr] =
    useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      const email = data.email;
      const pass = data.password;
      signInWithEmailAndPassword(email, pass);
    }
  };
  if (loading || loadingg) {
    return <Loading></Loading>;
  }
  if (userofEmail || userofGoogle) {
    navigate(from, { replace: true });
  }
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex items-center justify-center pt-20"
    >
      <div className="w-full max-w-md p-4 mb-20 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold flex justify-center">
          <img className="w-60" src={logo} alt="" />
        </h2>

        <div className="my-6 space-y-4">
          <button
            onClick={() => signInWithGoogle()}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>

          <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
            <p>Login with Twitter</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-2 ng-untouched ng-pristine ng-valid"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            {...register("email", {
              required: {
                value: true,
                message: "Email must be valid",
              },
            })}
            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
          <label htmlFor="email">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-800">
                {errors.email.message}
              </span>
            )}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
            })}
            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
          <label htmlFor="email">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-800">
                {errors.password.message}
              </span>
            )}
          </label>
          <input
            value="Sign In"
            type="submit"
            className="w-full btn btn-primary text-white px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
          ></input>
        </form>
        <p className="text-sm text-center mt-3 dark:text-gray-400">
          Don't have account? &nbsp;
          <Link
            to="/registration"
            href="#"
            rel="noopener noreferrer"
            className="focus:underline underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
