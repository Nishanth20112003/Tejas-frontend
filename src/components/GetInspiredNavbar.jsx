import React from "react";

const GetInspiredNavbar = () => {
  return (
    <>
      <div className="navbar bg-primary py-3 px-2 flex gap-3 items-center justify-between text-lg rounded-t-2xl mt-5">
        <p className="w-[fit-content] px-2  border-r-2 font-semibold text-white">
          Bed room
        </p>
        <p className="w-[fit-content] px-2  border-r-2  text-gray-300 cursor-pointer">
          Living room
        </p>
        <p className="w-[fit-content] px-2  border-r-2  text-gray-300 cursor-pointer">
          Dining room
        </p>
        <p className="w-[fit-content] px-2  border-r-2  text-gray-300 cursor-pointer">
          Home Office
        </p>
        <p className="w-[fit-content] px-2  border-r-2  text-gray-300 cursor-pointer">
          Outdoor
        </p>
        <p className="w-[fit-content] px-2  border-r-2  text-gray-300 cursor-pointer">
          Kids room
        </p>
        <p className="w-[fit-content] px-2  text-gray-300 cursor-pointer">
          Storage solution
        </p>
      </div>
    </>
  );
};

export default GetInspiredNavbar;
