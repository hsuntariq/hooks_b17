import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const api = "https://dummyjson.com/products";

  const fetchProducts = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setProducts(data?.products);
    console.log(data?.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container mx-auto grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 place-content-center ">
        {products?.map((item, index) => {
          return <SingleProduct key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default Products;
