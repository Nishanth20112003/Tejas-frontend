import React from "react";
import testimonailData from "../testimonailData";
const TestimonialCard = () => {
  return (
    <>
      <div className="testimonail-card-container p-2 rounded-lg flex gap-3 mt-4">
        {testimonailData.map((item, index) => {
          return (
            <div className="testimonail-card w-[380px] p-4 rounded-lg">
              <div className="content-container bg-white w-[300px] h-[240px] rounded-lg mt-[50px] m-auto relative">
                <div className="img-container relative">
                <img
                  src={item.img}
                  className="w-[80px] rounded-full absolute top-[-30px] left-[50%] transform translate-x-[-50%]"
                />
                </div>
                <div className="content absolute bottom-8 text-center p-4">
                  <h1 className="font-semibold font-georgia text-lg">{item.Name}</h1>
                  <p className="text-sm mt-3 text-gray-600">{item.feedBack}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TestimonialCard;
