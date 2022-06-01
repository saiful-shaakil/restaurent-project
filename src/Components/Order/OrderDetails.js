import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const OrderDetails = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {};
  return (
    <div className="w-96">
      <h1 className="text-3xl mt-8 font-popins  font-semibold mb-10">
        Edit your details
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
          type="text"
          className="block border border-grey-light w-full p-3 rounded mt-4 mb-4"
          name="mobile"
          id="mobile"
          placeholder="Enter your mobile number"
          {...register("mobile", {
            required: {
              value: true,
              message: "Mobile Number must be matched",
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
          value="Save"
          className="w-full btn btn-primary text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
        ></input>
      </form>
    </div>
  );
};

export default OrderDetails;
