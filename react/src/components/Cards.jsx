import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Cards = () => {
  const [view, setView] = useState([]);

  const addToCartHandler = () => {
    toast.success("Item Added in Cart", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  useEffect(() => {
    axios
      .get("https://ecommerce-backend-xp0v.onrender.com/api/v1/product/all")
      .then((data) => {
        console.log(data);
        setView(data.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-white p-4">
      <h1 className="flex justify-center font-bold text-2xl">
        List of Products
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-4 rounded-md">
          {view.map(({ _id, title, description, productImage, price }) => (
            <div key={_id} className="p-4">
              <div>
                <img
                  className="rounded-md"
                  src={productImage}
                  alt="productImage"
                />
                <div className="pt-8">
                  <strong>Product Name :- </strong> {title}
                </div>
                <div>
                  <strong>Description :- </strong>
                  {description}
                </div>
                <div className="pb-8">
                  <strong>Price :- </strong> {price}
                </div>
              </div>
              <button
                className=" bg-[#038a5f] hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                onClick={(e) => addToCartHandler()}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
