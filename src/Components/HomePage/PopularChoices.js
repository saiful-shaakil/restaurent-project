import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularChoices = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/dinner")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const food = foods.slice(0, 3);
  return (
    <div>
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
      <div className="grid grid-cols-3 px-40 gap-5 my-[100px]">
        {food.map((each) => (
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
