import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import background from "../../assets/images/bannerbackground.png";
const stripePromise = loadStripe(
  "pk_test_51L3GjVAjo3Oz9HwztP0K4uT8wQgUycRVbtITED5jXTYZC9fd4ry3uaCfssebrXqM9JRABtehNLQqXmSa1yyjbQ8Q00RkyHdNNa"
);
const Payment = () => {
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
      <Elements stripe={stripePromise}>
        <PaymentForm></PaymentForm>
      </Elements>
    </div>
  );
};

export default Payment;
