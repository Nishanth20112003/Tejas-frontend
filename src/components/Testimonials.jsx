import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <div className="main-container mx-[44px] mt-[70px]">
        <div className="heading text-center">
          <h1 className="font-georgia text-[44px] text-center text-primary">
            What Our Customers Are Saying
          </h1>
          <p className="description text-sm">
            Simple and direct, it invites users to read authentic feedback from
            others.
          </p>
          <div className="feedback card">
            
          </div>
        </div>
        
        <TestimonialCard />
      </div>
    </>
  );
};

export default Testimonials;
