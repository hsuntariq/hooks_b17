import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    let text = e.target.innerHTML;

    if (text == "Decrease") {
      setCount(count - 1);
    } else if (text == "Increase") {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <div className="container text-center p-10 mx-auto shadow  lg:w-[35%] md:w-[50%] w-full">
        <h1
          className={`text-3xl ${count < 0 && "animate-bounce text-rose-600"} `}
        >
          Counter
        </h1>
        <h1
          className={`text-7xl my-4 ${
            count > 0 ? "text-green-600" : "text-red-700"
          }
            ${count == 0 && "text-yellow-400"}
          `}
        >
          {count}
        </h1>
        <div className="flex gap-3 items-center justify-center">
          <button
            onClick={handleCount}
            className="p-2 transition-all  px-4 font-semibold outline-0 text-white rounded-md bg-gradient-to-r from-purple-600 cursor-pointer hover:scale-105 hover:shadow-lg to-red-500"
          >
            Decrease
          </button>
          <button
            onClick={handleCount}
            className="p-2 transition-all px-4 font-semibold outline-0 text-white rounded-md bg-gradient-to-r hover:scale-105 hover:shadow-lg from-yellow-600 cursor-pointer to-orange-500"
          >
            Reset
          </button>
          <button
            onClick={handleCount}
            className="p-2 transition-all px-4 font-semibold outline-0 text-white rounded-md bg-gradient-to-r hover:scale-105 hover:shadow-lg from-green-600 cursor-pointer to-indigo-500"
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
