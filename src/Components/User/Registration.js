import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import background from "../../assets/images/bannerbackground.png";
import logo from "../../assets/images/logo2.png";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../SharedComponents/Loading";

const Registration = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorofUpdate] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (data) {
      const name = data.name;
      const email = data.email;
      const password = data.password;
      const confirmPassword = data.confpass;
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
      } else {
        toast.error("Password must be matched.");
      }
    }
  };
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
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
    >
      <div className="bg-grey-lightershadow min-h-screen flex flex-col">
        <div className="container max-w-sm  mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className=" px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl flex justify-center">
              <img className="w-60" src={logo} alt="" />
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded"
                name="fullname"
                id="name"
                placeholder="Full Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name must be included",
                  },
                })}
              />
              <label htmlFor="name">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-800">
                    {errors.name.message}
                  </span>
                )}
              </label>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mt-4"
                name="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email must be valid",
                  },
                })}
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
                className="block border border-grey-light w-full p-3 rounded mt-4"
                name="password"
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password must be included",
                  },
                })}
              />
              <label htmlFor="password">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-800">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mt-4 mb-4"
                name="confirm_password"
                id="confpass"
                placeholder="Confirm Password"
                {...register("confpass", {
                  required: {
                    value: true,
                    message: "Confirm password must be matched",
                  },
                })}
              />
              <label htmlFor="email">
                {errors.confpass?.type === "required" && (
                  <span className="label-text-alt text-red-800">
                    {errors.confpass.message}
                  </span>
                )}
              </label>

              <input
                type="submit"
                value="Create account"
                className="w-full btn btn-primary text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              ></input>
            </form>
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

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the &nbsp;
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              &nbsp; and &nbsp;
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
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
