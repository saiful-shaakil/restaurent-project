import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  faShoppingCart,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import food from "../../assets/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.png";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useOrders from "../../Hooks/useOrders";
import Loading from "../SharedComponents/Loading";

const EachFoodDetails = () => {
  const [user, loading] = useAuthState(auth);
  const [orders] = useOrders(user);
  const navigate = useNavigate();
  const [food, setFood] = useState([]);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [available, setAvailable] = useState();
  //useeffect to get the details of a specific food
  useEffect(() => {
    fetch(`https://red-onion-server-wstf.onrender.com/food/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [food]);
  if (loading) {
    return <Loading></Loading>;
  }
  //adding to the cart
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
    <div>
      <div className="md:flex mt-16 justify-around lg:flex px-10">
        <div className="lg:w-1/2 lg:mt-16">
          <h1 className="text-4xl font-bold mb-5">{food.name}</h1>
          <p className="">{food.desc}</p>
          <div className="flex items-center justify-between my-5 w-56">
            <p className="text-2xl font-bold">${food.price}</p>
          </div>
          <button
            onClick={() => addToCart(food)}
            className="btn btn-primary btn-xl text-white"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Add
          </button>
        </div>
        <div>
          <img className="w-[400px] mt-10" src={food.img} alt="" />
        </div>
      </div>
      <div className="px-48 hidden lg:flex my-16 items-center">
        <img
          className="w-40 h-40"
          src="https://i.ibb.co/YkG21SJ/dinner6.png"
          alt="Food 1"
        />
        <img
          className="w-36 ml-24 h-36"
          src="https://i.ibb.co/Y7k2xfF/lunch6.png"
          alt="Food 2"
        />
        <div className="ml-16 text-2xl cursor-pointer">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
};

export default EachFoodDetails;
