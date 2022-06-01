import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useOrders from "../../Hooks/useOrders";
import Loading from "../SharedComponents/Loading";

const Lunch = () => {
  //to navigate the user
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [foods, setFoods] = useState([]);
  const [orders] = useOrders(user);
  useEffect(() => {
    fetch("http://localhost:5000/lunch")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  //to add food in cart
  const addToCart = (product) => {
    const exist = orders?.filter((ele) => product.name === ele.food);
    const email = user?.email;
    if (user) {
      if (exist[0]) {
        const id = exist[0]._id;
        const quantity = exist[0].quantity;
        const price = exist[0].price;
        const updateData = {
          quantity: quantity + 1,
          price: price,
          total: ((quantity + 1) * price).toFixed(2),
        };
        fetch(`http://localhost:5000/update-order/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      } else {
        const order = {
          OrderMail: email,
          name: user?.displayName || "Unknown",
          food: product.name,
          foodImg: product.img,
          quantity: 1,
          price: parseFloat(product.price),
          total: parseFloat(product.price).toFixed(2),
        };
        fetch("http://localhost:5000/orders", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      }
    }
    if (!user) {
      navigate("/login");
      toast("Please login first to save your cart");
    }
  };
  return (
    <div className="grid grid-cols-3 px-40 gap-5 my-[100px]">
      {foods.map((each) => (
        <div
          key={each._id}
          className="w-[350px] border font-popins text-center p-[20px] h-[380px] hover:shadow-[0 3px 10px rgb(0 0 0 / 0.2)] hover:transition-[box-shadow 0.2s ease]"
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
