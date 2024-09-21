import React from "react";
import logo from "../assets/logo.svg";
const MainHeader = () => {
  return (
    <>
      <div className="main-container py-3 mx-[40px] flex items-center justify-between ">
        {/* should be wrapped into Link tag in future */}
        <div className="flex gap-10 items-center">
          <img src={logo} className="w-[102px] h-[82px]" />
          <div className="search-bar w-[560px] flex gap-3 items-center px-4 py-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input
              type="text"
              placeholder="Find your Perfect Piece"
              className="outline-none w-[100%] font-manrope text-[13px]"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="favorites flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="green"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
            <p className="favorites text-primary font-semibold">Favorites</p>
          </div>
          <div className="contact-button">
            <button className="bg-button-color text-white px-3 rounded-lg py-2 flex gap-2 items-center hover:bg-orange-500 transition-all duration-300">
              Contact us{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="white"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
