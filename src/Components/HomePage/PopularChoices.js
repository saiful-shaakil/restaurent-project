import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useOrders from "../../Hooks/useOrders";

const PopularChoices = () => {
  const [user, loading] = useAuthState(auth);
  const [orders] = useOrders(user);
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://floating-thicket-52980.herokuapp.com/dinner")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const food = foods.slice(0, 3);

  //adding food to the cart
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
        fetch(
          `https://floating-thicket-52980.herokuapp.com/update-order/${id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateData),
          }
        )
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
        fetch("https://floating-thicket-52980.herokuapp.com/orders", {
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
    <div id="popular">
      <div className="mt-10 text-center">
        <h1 className="text-5xl font-popins">
          Popular Choices{" "}
          <FontAwesomeIcon
            className="text-yellow-500"
            icon={faFire}
          ></FontAwesomeIcon>{" "}
        </h1>
        <p className="py-5 font-popins">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
          repudiandae, <br /> similique aut repellat exercitationem ex aliquid
          reprehenderit eos accusantium asperiores.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-40 gap-5 my-[100px]">
        {food.map((each) => (
          <div
            key={each._id}
            className="w-[300px] lg:w-[350px] border font-popins text-center p-[20px] h-[380px] ease]"
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
    </div>
  );
};

export default PopularChoices;
