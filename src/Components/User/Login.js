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
      className="flex items-center h-screen justify-center pt-20"
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
