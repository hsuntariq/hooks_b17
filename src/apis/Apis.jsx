import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const Apis = () => {
  const api = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto p-5">
        <h1 className="text-4xl text-center text-blue-700">Github users</h1>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 place-content-center xl:grid-cols-4">
          {users?.map((item, index) => {
            return <SingleUser key={index} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Apis;
