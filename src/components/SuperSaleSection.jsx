import React from "react";
import SaleImg from "../assets/SaleImg.png";
import OfferImg1 from "../assets/OfferImg1.png";
import OfferImg2 from "../assets/offerImg2.png";
import OfferImg3 from "../assets/offerImg3.png";
const SuperSaleSection = () => {
  return (
    <>
      <div className="main-container mx-[44px] mt-10">
        <img src={SaleImg} alt="" />
        <div className="offer-section mt-5 flex gap-5">
          <div className="img-container rounded-lg relative ">
            <img src={OfferImg1} className="rounded-lg " />
            <div className="tint-1 absolute top-0 left-0 right-0 bottom-0 rounded-lg"></div>
            <div className="content absolute top-[40%] left-[50%] transform translate-x-[-50%] text-white text-center w-[fit-content]">
              <div className="m-auto">
                <h1 className="text-lg w-[200px] m-auto">NEW ARRIVAL</h1>
                <h1 className="text-2xl w-[250px] mt-1 font-semibold text-gray-200">
                  ULTIMATE COMFORT{" "}
                </h1>
                <h1 className="text-2xl w-[250px] mt-1 font-semibold">
                  30% OFF
                </h1>
              </div>
              <button className="btn px-4 py-2 mt-2 rounded-lg hover:bg-orange-600">
                See Inside
              </button>
            </div>
          </div>
          <div className="img-container rounded-lg relative">
            <img src={OfferImg2} className="rounded-lg  " />
            <div className="tint-1 absolute top-0 left-0 right-0 bottom-0 rounded-lg"></div>
            <div className="content absolute top-[40%] left-[50%] transform translate-x-[-50%] text-white text-center w-[fit-content]">
              <div className="m-auto">
                <h1 className="text-lg w-[200px] m-auto">NEW ARRIVAL</h1>
                <h1 className="text-2xl w-[250px] mt-1 m-auto font-semibold text-gray-200">
                  ELEGANT FURNITURE,{" "}
                </h1>
                <h1 className="text-2xl w-[280px] mt-1  m-auto font-bold">
                  UNMATCHED SAVINGS !
                </h1>
              </div>
              <button className="btn px-4 py-2 mt-2 rounded-lg hover:bg-orange-600">
                See Inside
              </button>
            </div>
          </div>
          <div className="img-container rounded-lg relative">
            <img src={OfferImg3} className="rounded-lg  " />
            <div className="tint-1 absolute top-0 left-0 right-0 bottom-0 rounded-lg"></div>
            <div className="content absolute top-[40%] left-[50%] transform translate-x-[-50%] text-white text-center w-[fit-content]">
              <div className="m-auto">
                <h1 className="text-lg w-[200px] m-auto">NEW ARRIVAL</h1>
                <h1 className="text-2xl w-[250px] mt-1 m-auto font-semibold text-gray-200">
                  TIMELESS ELEGANCE{" "}
                </h1>
                <h1 className="text-2xl w-[280px] mt-1  m-auto font-bold">
                  30% OFF
                </h1>
              </div>
              <button className="btn px-4 py-2 mt-2 rounded-lg hover:bg-orange-600">
                See Inside
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperSaleSection;
