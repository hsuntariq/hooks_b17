import React, { useState } from "react";
import SingleBday from "./SingleBday";
import { bdays } from "./data";

const Birthday = () => {
  const [myData, setMyData] = useState(bdays);

  const removeData = () => {
    if (myData.length > 0) {
      setMyData([]);
    } else {
      setMyData(bdays);
    }
  };

  const removeBday = (id) => {
    const newData = myData.filter((item, index) => {
      return item.id !== id;
    });

    setMyData(newData);
  };

  return (
    <>
      <div className="container mx-auto shadow-lg w-full md:w-[75%] lg:w-[45%] p-3 md:p-10">
        <h1 className="text-center text-purple-500  text-3xl uppercase">
          {myData.length} Birthdays today
        </h1>
        {myData?.map((person, index) => {
          return <SingleBday {...person} key={person?.id} rem={removeBday} />;
        })}

        <button
          onClick={removeData}
          className={`w-full bg-gradient-to-r ${
            myData.length > 0
              ? "from-red-600 to-orange-400"
              : "from-green-400 to-green-800"
          } cursor-pointer hover:bg-gradient-to-l px-4 py-2 rounded-md text-white font-semibold`}
        >
          {myData.length > 0 ? "Remove All" : "Refresh All"}
        </button>
      </div>
    </>
  );
};

export default Birthday;
