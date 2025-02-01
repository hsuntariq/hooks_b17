import React from "react";
import { IoIosLink } from "react-icons/io";

const SingleUser = ({ avatar_url, login, url, bio }) => {
  return (
    <>
      <div className="p-3 shadow-md rounded-3">
        <div className="bg-gray-200 p-4">
          <img src={avatar_url} width={"100%"} alt="" />
        </div>
        <div className="bg-gray-300 p-4 capitalize">
          <h5 className="text-2xl">{login}</h5>
          <a href={url}>
            <IoIosLink size={25} />
          </a>
          <h4 className="text-green-500">Bio: {bio}</h4>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
