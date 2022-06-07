import React, { useEffect, useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import Loading from "../SharedComponents/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useOrders from "../../Hooks/useOrders";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [user, loading] = useAuthState(auth);
  const [orders] = useOrders(user);
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const name = "Hello Boy";
  const email = "abac@gmail.com";
  useEffect(() => {
    // const totalPrice = 100;
    // fetch("http://localhost:5000/create-payment-intent", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ totalPrice }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setIsLoading(false);
    //     setClientSecret(data.clientSecret);
    //   });
  }, []);
  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: errorOfIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (errorOfIntent) {
      setIsLoading(false);
      setCardError(errorOfIntent?.message);
    }
  };

  return (
    <div className="w-80 md:w-1/2 mx-auto my-10">
      <form className="border-lg" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                backgroundColor: "#ffff",
                fontSize: "16px",
                color: "black",
                "::placeholder": {
                  color: "black",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-3 btn-sm btn-success mx-auto"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {paymentSuccess && (
        <p className="text-green-600">
          {paymentSuccess}. Your transaction Id is{" "}
          <span className="text-primary">{transactionId}</span>
        </p>
      )}
    </div>
  );
};

export default PaymentForm;
