import React, { useState } from "react";

const Circuits = () => {
  const [text, setText] = useState("");

  return (
    <>
      <h1 className="text-center text-5xl">
        {text ? "Salam" : "wa laikum salam"}
      </h1>
    </>
  );
};

export default Circuits;
