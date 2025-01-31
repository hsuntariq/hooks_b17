import React from "react";

const SingleBday = ({ id, name, image, age, rem }) => {
  return (
    <>
      <div className="flex my-3 shadow-md p-3 rounded-md items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            src={image}
            className=" object-cover w-[50px] h-[50px] rounded-full"
            alt=""
          />
          <div className="flex flex-col">
            <h4> {name} </h4>
            <p className="text-gray-500">{age} years</p>
          </div>
        </div>
        <button
          onClick={() => rem(id)}
          className="bg-gradient-to-r from-red-600 to-orange-400 cursor-pointer hover:bg-gradient-to-l px-4 py-2 rounded-md text-white font-semibold"
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default SingleBday;
