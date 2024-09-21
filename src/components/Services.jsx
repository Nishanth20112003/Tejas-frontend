import React from "react";
import serviceData from "../serviceData";
const Services = () => {
  return (
    <>
      <div className="main-container mx-[44px] mt-[40px]">
        <div className="icon-container flex gap-2 justify-evenly max-sm:flex-wrap">
          {serviceData.map((item, index) => {
            return (
              <div className="card w-[300px] text-center p-2">
                <div className="img-container w-[110px] m-auto p-7 service-icon-bg rounded-full">
                  <img src={item.img} alt="" />
                </div>
                <h1 className="mt-2 font-georgia text-primary font-semibold">
                  {item.title}
                </h1>
                <p className="mt-2 text-sm font-manrope text-primary">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
