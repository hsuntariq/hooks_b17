import React, { useState } from "react";
import { TbCategoryFilled, TbDimensions } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";

const SingleProduct = ({
  images,
  brand,
  category,
  description,
  dimensions,
  price,
  discountPercentage,
  rating,
}) => {
  const { depth, width, height } = dimensions;
  let actualPrice = ((price * 100) / (100 - discountPercentage)).toFixed(2);
  const [show, setShow] = useState(false);

  const showRating = () => {
    let stars = "";
    for (let i = 0; i < Math.round(rating); i++) {
      stars += "⭐";
    }
    return stars;
  };

  return (
    <>
      <div className="shadow-lg">
        <img
          className="w-100 d-block mx-auto h-[300px] object-contain"
          src={images[0]}
          alt=""
        />
        <div className="p-3 bg-gray-200">
          <h3 className="text-xl">{brand}</h3>
          <p className="text-gray-400 flex items-center gap-2">
            <TbCategoryFilled /> {category}
          </p>

          {/* dimensions */}

          <p className="text-gray-400 flex gap-2 items-center">
            <TbDimensions /> {depth} x {width} x {height}
          </p>
          {/* price */}
          <p className="text-gray-400 flex gap-2 items-center">
            <FaSackDollar /> ${price}{" "}
            <span className="text-gray-400 line-through">${actualPrice}</span>
          </p>

          {/* rating */}

          {/* {Array.from({ length: Math.round(rating) }).map((_, index) => {
            return "⭐";
          })} */}

          {showRating()}

          <p className="text-gray-600 ">
            {show
              ? description?.substr(0, description?.length)
              : description?.substr(0, 25)}
            <button
              onClick={() => setShow(!show)}
              className={`${
                show ? "text-red-500" : "text-blue-400"
              } cursor-pointer`}
            >
              {show ? "Read Less" : "Read More..."}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
