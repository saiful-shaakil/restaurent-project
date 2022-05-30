import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import food from "../../assets/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.png";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EachFoodDetails = () => {
  const [food, setFood] = useState([]);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [available, setAvailable] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/food/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex mt-20 justify-around px-20">
      <div>
        <h1 className="text-4xl font-bold mb-5">{food.name}</h1>
        <p className="w-96">{food.desc}</p>
        <div className="flex items-center justify-between my-5 w-56">
          <p className="text-2xl font-bold">${food.price}</p>
          <div className="border rounded-lg px-2 py-1">
            <button onClick={decreaseQuantity} className="text-xl">
              -
            </button>
            <input
              className="text-black  text-center w-12 mx-2"
              value={quantity}
              type="text"
              id="quantityValue"
            />
            <button onClick={increaseQuantity} className="text-xl text-primary">
              +
            </button>
          </div>
        </div>
        <button className="btn btn-primary btn-xl text-white">
          <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Add
        </button>
      </div>
      <div>
        <img className="w-[400px]" src={food.img} alt="" />
      </div>
    </div>
  );
};

export default EachFoodDetails;
