import React, { useState } from "react";

const ChangeTitle = () => {
  const [title, setTitle] = useState("This is a title");

  const change = () => {
    if (title == "This is a title") {
      setTitle("This is a new Title");
    } else {
      setTitle("This is a title");
    }
  };
  return (
    <>
      <div className="container mx-auto p-10 text-center">
        <h1 className="text-center text-gray-800 text-4xl">{title}</h1>
        <button
          onClick={change}
          className="bg-rose-500 transition-all cursor-pointer rounded-md text-white p-2 my-3 px-8 hover:bg-rose-800 border-0 outline-0"
        >
          Change title
        </button>
      </div>
    </>
  );
};

export default ChangeTitle;
