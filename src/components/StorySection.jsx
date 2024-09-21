import React from "react";
import StorySectionImg from "../assets/StroySectionImg.png";
const StorySection = () => {
  return (
    <>
      <div className="main-container mx-[44px] mt-10 relative">
        <img src={StorySectionImg} alt="" />
        <div className="tint-1 absolute top-0 left-0 right-0 bottom-0 rounded-lg"></div>
        <div className="content text-white absolute top-[40%] left-[50%] transform translate-x-[-50%] text-center">
          <h1 className="font-georgia text-2xl font-semibold">
            TEJAS Furniture stands as a beacon of excellence in Coimbatore's
            furniture industry.
          </h1>
          <p className=" text-white mt-2">Curious About Who We Are?</p>
          <button className="btn text-white px-4 flex gap-1 items-center rounded-lg py-1 m-auto mt-8">
            Discover Our Story{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="mt-1"
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
      </div>
    </>
  );
};

export default StorySection;
