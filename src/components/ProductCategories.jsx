import React from "react";
import categoriesData from "../categoriesData";
import Dining from "../assets/bookCase.svg";
const ProductCategories = () => {
  return (
    <>
      <div className="main-container mx-[40px]">
        <div className="heading text-center w-[fit-content] m-auto">
          <h1 className="font-semibold font-georgia text-[44px] w-[fit-content] mt-[50px] text-primary">
            Product Categories
          </h1>
          <p className="description w-[300px] m-auto">
            Discover funiture designed to elevate every room in your home.
          </p>
        </div>
        <div className="w-[85%] m-auto flex gap-6 flex-wrap items-center  justify-evenly mt-10">
          {categoriesData.map((item, index) => {
            return (
              <div className="categories-card w-[130px] p-2 border text-center rounded-lg">
                <img src={item.img} className="w-[50px] m-auto" />
                <p className="categories-title mt-2 font-manrope ">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
