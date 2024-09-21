import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="nav font-semibold mt-4 text-md main-container rounded-t-[40px] bg-navbar-bg mx-[40px] text-secondary h-[65px] flex gap-3 justify-around items-center">
        <p className="font-bold cursor-pointer">Home</p>
        <div className="dropdown group relative">
          <p className="flex gap-1 items-center cursor-pointer">
            Sofas{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </p>
          <div className="hidden group-hover:block absolute w-[140px] p-2 shadow-md rounded-sm sofa-submenu bg-white text-sm text-gray-400 font-lighter">
            <p className="cursor-pointer">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
          </div>
        </div>
        <div className="relative group">
          <p className="flex gap-1 items-center cursor-pointer">
            Dining{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </p>
          <div className="hidden group-hover:block absolute w-[140px] p-2 shadow-md rounded-sm sofa-submenu bg-white text-sm text-gray-400 font-lighter">
            <p className="cursor-pointer">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
          </div>
        </div>
        <div className="group relative">
          <p className="flex gap-1 items-center cursor-pointer">
            Bed{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </p>
          <div className="hidden group-hover:block transition-all duration-300 absolute w-[140px] p-2 shadow-md rounded-sm sofa-submenu bg-white text-sm text-gray-400 font-lighter">
            <p className="cursor-pointer">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
          </div>
        </div>
        <div className="relative group">
          <p className="flex gap-1 items-center cursor-pointer">
            Wardrobes{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </p>
          <div className="hidden group-hover:block absolute w-[140px] p-2 shadow-md rounded-sm sofa-submenu bg-white text-sm text-gray-400 font-lighter">
            <p className="cursor-pointer">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
          </div>
        </div>
        <div className="relative group">
          <p className="flex gap-1 items-center cursor-pointer">
            Living Storage{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </p>
          <div className="hidden group-hover:block absolute w-[140px] p-2 shadow-md rounded-sm sofa-submenu bg-white text-sm text-gray-400 font-lighter">
            <p className="cursor-pointer">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
          </div>
        </div>
        <div className="relative group">
          <p className="flex gap-1 items-center cursor-pointer">
            Office Furniture{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </p>
          <div className="hidden group-hover:block absolute w-[140px] p-2 shadow-md rounded-sm sofa-submenu bg-white text-sm text-gray-400 font-lighter">
            <p className="cursor-pointer">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
          </div>
        </div>
        <div className="relative group">
          <p className="flex gap-1 items-center cursor-pointer">
            New arrival{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="mt-1"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </span>
          </p>
          <div className="hidden group-hover:block absolute w-[140px] p-2 shadow-md rounded-sm sofa-submenu bg-white text-sm text-gray-400 font-lighter">
            <p className="cursor-pointer">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
            <p className="cursor-pointer mt-1">Lorem, ipsum.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
