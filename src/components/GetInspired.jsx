import React from "react";
import BedroomBg from "../assets/BedroomBg.png";
import GetInspiredNavbar from "./GetInspiredNavbar";
const GetInspired = () => {
  return (
    <>
      <div className="getInspired main-container px-[44px]  mt-10 py-5 text-center">
        <h1 className="font-georgia text-[44px] text-primary">Get Inspired</h1>
        <p className="description text-gray-400">
          Discover how thoughtful design can transform your home
        </p>
        <GetInspiredNavbar />
        <img
          src={BedroomBg}
          className="mt-1 h-[350px] w-[100%] object-cover rounded-b-3xl"
        />
        <button className="btn text-white px-4 py-2 flex gap-2 items-center rounded-lg m-auto mt-3 mb-[20px]">
          Explore Our Products{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default GetInspired;
