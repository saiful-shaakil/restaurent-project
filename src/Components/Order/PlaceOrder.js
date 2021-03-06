import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import EachOrder from "./EachOrder";
import useOrders from "../../Hooks/useOrders";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/images/empty-cart-1.webp";
import Loading from "../SharedComponents/Loading";

const PlaceOrder = () => {
  const [user, loading] = useAuthState(auth);
  const [total, setTotal] = useState(0);
  const [orders, isLoading] = useOrders(user);
  useEffect(() => {
    let total = 0;
    orders?.map((ele) => {
      total = ele.total + total;
      return total;
    });
    setTotal(total);
  }, [orders]);

  return (
    <div className="flex justify-around  mt-16 w-full">
      {orders.length >= 1 && (
        <div>
          <div className="flex font-popins flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-3xl mt-0 font-bold font-popins">Your cart:</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
              {orders?.map((order) => (
                <EachOrder each={order} key={order._id}></EachOrder>
              ))}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Price:&nbsp;
                <span className="font-semibold">${total.toFixed(2)}</span>
              </p>
              <p>
                Shipping Cost: &nbsp;
                <span className="font-semibold">${20}</span>
              </p>
              <p>
                Total :&nbsp;
                <span className="font-semibold">
                  ${parseFloat(total + 20).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <Link
                to="/"
                type="button"
                className="px-6 py-2 border rounded-md dark:border-violet-400"
              >
                Back &nbsp;
                <span className="sr-only sm:not-sr-only">to shop</span>
              </Link>
              <Link
                to="proceed-to-checkout"
                type="button"
                className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
              >
                <span className="sr-only sm:not-sr-only">
                  Continue to &nbsp;
                </span>
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
      {!orders ||
        (orders.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            {" "}
            <img src={emptyCart} alt="" />{" "}
            <Link className="btn btn-primary text-white" to="/">
              Back to Shop
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PlaceOrder;
