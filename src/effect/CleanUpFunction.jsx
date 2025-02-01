import React, { useEffect, useState } from "react";

const CleanUpFunction = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    console.log("use effect ran");

    return () => {
      window.removeEventListener("resize", handleSize);
      console.log("cleanup ran");
    };
  });

  return (
    <>
      <h1 className="text-5xl text-orange-600 text-center">
        Window Size: {size} px
      </h1>
    </>
  );
};

export default CleanUpFunction;
