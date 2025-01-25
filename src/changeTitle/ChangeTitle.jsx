import React from "react";

const ChangeTitle = () => {
  const handleClick = (test) => {
    console.log("salam ", test);
  };

  return (
    <>
      <div className="container mx-auto p-10 text-center">
        <h1 className="text-center text-gray-800 text-4xl">This is a title</h1>
        <button
          onClick={() => handleClick("ali")}
          className="bg-rose-500 transition-all cursor-pointer rounded-md text-white p-2 my-3 px-8 hover:bg-rose-800 border-0 outline-0"
        >
          Change title
        </button>
      </div>
    </>
  );
};

export default ChangeTitle;
