import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import background from "../../assets/images/bannerbackground.png";
import auth from "../../firebase.init";
import Loading from "../SharedComponents/Loading";

const OrderDetails = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userAddress = {
      city: data.city,
      mobile: data.mobile,
      address: data.adress,
      email: user?.email,
    };
    setIsLoading(true);
    fetch(`https://floating-thicket-52980.herokuapp.com/customer-details`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userAddress),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(
          `https://floating-thicket-52980.herokuapp.com/remove-cart/${user.email}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(false);
            navigate("/");
            toast.success("Your order is placed.");
          });
      });
  };
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen flex items-center"
    >
      <div className="w-96 mx-auto">
        <h1 className="text-3xl mt-8 font-popins  font-semibold mb-10">
          Your address:
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="block border font-popins border-grey-light w-full p-3 rounded"
            name="fullname"
            id="name"
            value={user?.displayName}
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
            name="city"
            id="city"
            placeholder="Enter your city"
            {...register("city", {
              required: {
                value: true,
                message: "city must be valid",
              },
            })}
          />
          <label htmlFor="city">
            {errors.city?.type === "required" && (
              <span className="label-text-alt text-red-800">
                {errors.city.message}
              </span>
            )}
          </label>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mt-4"
            name="adress"
            id="adress"
            placeholder="Enter your full address"
            {...register("adress", {
              required: {
                value: true,
                message: "address must be included",
              },
            })}
          />
          <label htmlFor="adress">
            {errors.adress?.type === "required" && (
              <span className="label-text-alt text-red-800">
                {errors.adress.message}
              </span>
            )}
          </label>
          <input
            type="tel"
            className="block border border-grey-light w-full p-3 rounded mt-4 mb-4"
            name="mobile"
            id="mobile"
            placeholder="Enter your mobile number"
            {...register("mobile", {
              required: {
                value: true,
                message: "Mobile Number must be included",
              },
            })}
          />
          <label htmlFor="mobile">
            {errors.mobile?.type === "required" && (
              <span className="label-text-alt text-red-800">
                {errors.mobile.message}
              </span>
            )}
          </label>

          <input
            type="submit"
            value="Continue"
            className="w-full btn btn-primary text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default OrderDetails;
