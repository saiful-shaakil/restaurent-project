import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useOrders from "../../Hooks/useOrders";
import Loading from "../SharedComponents/Loading";

const Lunch = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  const [orders] = useOrders(user);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://red-onion-server-wstf.onrender.com/dinner")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setIsLoading(false);
      });
  }, []);
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  // adding food to the cart
  const addToCart = (product) => {
    const exist = orders?.filter((ele) => product.name === ele.food);
    const email = user?.email;
    const name = product.name;
    if (user) {
      if (exist[0]) {
        const id = exist[0]._id;
        const quantity = parseFloat(exist[0].quantity);
        const price = parseFloat(exist[0].price);
        const total = (quantity + 1) * price;
        const updateData = {
          quantity: quantity + 1,
          total: total,
        };
        fetch(`https://red-onion-server-wstf.onrender.com/update-order/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateData),
        })
          .then((res) => res.json())
          .then((data) => {
            toast(`${name} added to your cart.`);
          });
      } else {
        let total = parseFloat(product.price);
        const order = {
          OrderMail: email,
          name: user?.displayName || "Unknown",
          food: product.name,
          foodImg: product.img,
          quantity: 1,
          price: parseFloat(product.price),
          total: total,
        };
        fetch("https://red-onion-server-wstf.onrender.com/orders", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json())
          .then((data) => {
            toast(`${name} added to your cart.`);
          });
      }
    }
    if (!user) {
      navigate("/login");
      toast("Please login first to save your cart");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-40 gap-5 my-[100px]">
      {foods.map((each) => (
        <div
          key={each._id}
          className="w-[300px] lg:w-[350px] border font-popins text-center p-[20px] h-[380px] hover:shadow-[0 3px 10px rgb(0 0 0 / 0.2)] hover:transition-[box-shadow 0.2s ease]"
        >
          <Link
            to={`/details/${each._id}`}
            className="flex items-center justify-center"
          >
            <img className="w-[200px]" src={each.img} alt="" />
          </Link>
          <div className="info">
            <p className="font-bold mt-2">{each.name}</p>
            <p>{each.quote}</p>
            <p className="mt-2">
              ${each.price}{" "}
              <button
                onClick={() => addToCart(each)}
                className="border-none text-white bg-primary px-[10px] py-[5px] ml-[100px] cursor-pointer"
                title="Add to Cart"
              >
                +
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lunch;
