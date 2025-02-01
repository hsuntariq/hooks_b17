import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleClick = (e) => {
    setCount(count + 1);
  };
  const handleClick2 = (e) => {
    setCount2(count2 + 1);
  };

  useEffect(() => {
    document.title = `(${count}),(${count2}) new Messages`;
  }, [count2, count]);

  return (
    <>
      <h1 className="text-7xl text-center text-indigo-500">
        Use Effect Basics
      </h1>

      <div className="container mx-auto text-center">
        <h1 className="text-7xl text-gray-700">{count}</h1>
        <div className="flex gap-3 justify-center my-2">
          <button
            onClick={handleClick}
            className="bg-green-500 py-2 px-4 rounded-full hover:bg-green-600 cursor-pointer text-white font-semibold"
          >
            Increase
          </button>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <h1 className="text-7xl text-gray-700">{count2}</h1>
        <div className="flex gap-3 justify-center my-2">
          <button
            onClick={handleClick2}
            className="bg-green-500 py-2 px-4 rounded-full hover:bg-green-600 cursor-pointer text-white font-semibold"
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
};

export default UseEffectBasics;
