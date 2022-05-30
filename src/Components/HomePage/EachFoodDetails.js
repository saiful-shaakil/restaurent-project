import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import food from "../../assets/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.png";
import { toast } from "react-toastify";

const EachFoodDetails = () => {
  const [quantity, setQuantity] = useState();
  const [available, setAvailable] = useState();
  const increaseQuantity = () => {
    const nQuantity = parseInt(quantity);
    if (nQuantity < available) {
      setQuantity(nQuantity + 1);
    } else {
      toast("You are reaching more than available quantity.");
    }
  };
  const decreaseQuantity = () => {
    const nQuantity = parseInt(quantity);
    if (nQuantity > available) {
      setQuantity(nQuantity - 1);
    } else {
      toast(`You have to order at least ${nQuantity} `);
    }
  };
  return (
    <div className="flex mt-20 justify-around px-20">
      <div>
        <h1 className="text-4xl font-bold">Mutton Biryani</h1>
        <p className="w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos itaque
          hic doloribus amet quae eius Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil autem, illo, quia eligendi harum neque ducimus
          ut quisquam omnis beatae ipsa iure iste? Est itaque rem maiores
          tenetur accusamus modi ipsa tempora odit repudiandae quisquam,
          architecto ea voluptatem sint reprehenderit eaque molestiae labore
          culpa quaerat! Fuga voluptatem omnis architecto nisi! minima rem
          explicabo qui, ullam voluptas ut illum exercitationem odio, nihil
          officia? Eum, repudiandae.
        </p>
        <div className="flex items-center justify-between my-5 w-40">
          <p className="text-2xl font-bold">$55</p>
          <div className="border rounded-lg px-2 py-1">
            <button onClick={decreaseQuantity} className="text-xl">
              -
            </button>
            <input
              className="text-black  text-center w-12 mx-2"
              value={1}
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
        <img src={food} alt="" />
      </div>
    </div>
  );
};

export default EachFoodDetails;
