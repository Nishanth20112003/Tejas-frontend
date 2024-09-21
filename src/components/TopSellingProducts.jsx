import React from "react";
import topSellingProducts from "../topSellingProductsData";

const TopSellingProducts = () => {
  return (
    <>
      <div className="main-container mx-[40px] mt-10 text-center ">
        <div className="heading text-center">
          <h1 className="font-georgia text-[44px] text-primary">
            Top Selling Products
          </h1>
          <p className="description">
            "Explore the Latest in Comfort & Style."
          </p>
        </div>
        <div className=" card-container flex  flex-wrap gap-5 mt-3 justify-center ">
          {topSellingProducts.map((item, index) => {
            return (
              <div
                key={index}
                className="top-selling-card group w-[46%]  p-2 rounded-lg"
              >
                <div className="img-container relative">
                  <img
                    src={item.img}
                    className="w-[100%] object-cover h-[200px] rounded-lg"
                    alt={item.title}
                  />

                  {/* <div className="Card-img-tint transition-all duration-700 group-hover:hidden absolute top-0 left-0 right-0 bottom-0 rounded-lg"></div> */}
                  {/* <div className="Card-img-tint absolute top-0 left-0 right-0 h-0 group-hover:h-full bg-black opacity-50 transition-all duration-700 rounded-lg"></div> */}
                  <div className="Card-img-tint absolute  top-0 left-0 right-0 h-full bg-black opacity-50 transition-all duration-700 group-hover:h-0 rounded-lg"></div>
                  <div className="hidden group-hover:block img-content absolute top-2 left-2">
                    <div className="off text-white w-[fit-content] px-3 py-1 text-sm font-semibold rounded-lg">
                      20% OFF
                    </div>
                  </div>
                  <div className="hidden group-hover:block transition-all duration-300 likeAndShareIcons absolute top-2 right-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="white"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="white"
                      className="mt-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                    </svg>
                  </div>
                </div>
                <div className="card-content p-2 font-semibold text-primary relative mt-2 ">
                  <div className="flex gap-1 items-center justify-between">
                    <h1>{item.title}</h1>
                    <p>₹{item.finalPrice}</p>
                  </div>
                  <div className="reviewsAndOffer text-[12px] flex justify-between mt-1">
                    <h1>({item.reviewsCount}) Reviews</h1>
                    <div className="flex gap-2">
                      <del className="text-secondary ">{item.orginalPrice}</del>
                      <h1>{item.offerPercentage}% Off</h1>
                    </div>
                  </div>
                  <div className="main-tint absolute h-0 bottom-0 right-0 left-0 group-hover:h-full rounded-lg transition-all duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="view-all-btn rounded-lg mt-8 px-8 py-1 transition-all duration-300 flex items-center gap-2 m-auto">
          View All{" "}
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

export default TopSellingProducts;
