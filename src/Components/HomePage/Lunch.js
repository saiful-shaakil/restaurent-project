import React, { useEffect, useState } from "react";

const Lunch = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("lunch.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="grid grid-cols-3 px-40 gap-5 my-[100px]">
      {foods.map((each) => (
        <div className="w-[350px] border font-popins text-center p-[20px] h-[380px] hover:shadow-[0 3px 10px rgb(0 0 0 / 0.2)] hover:transition-[box-shadow 0.2s ease]">
          <div className="flex items-center justify-center">
            <img className="w-[200px]" src={each.img} alt="" />
          </div>
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
  );
};

export default Lunch;
