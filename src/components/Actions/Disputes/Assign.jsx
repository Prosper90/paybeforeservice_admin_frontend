import React, { useContext, useState } from "react";
import { ShopContext } from "../../../utils/contextShop";
import { SearchIcon } from "../../icons/Icons";

export default function Assign() {
  const {
    selectedDispute,
    setSelectedDispute,
    selectedDisputeAction,
    setSelectedDisputeAction,
  } = useContext(ShopContext);

  const [searchValue, setSearchValue] = useState();

  return (
    <div className="flex flex-col p-5 justify-start items-start">
      <div className="flex justify-between items-center w-[100%] relative">
        <span className="text-black">Assign To Admin</span>

        <svg
          onClick={() => setSelectedDisputeAction("")}
          className="w-3 h-3  cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 14 14"
          width={17}
        >
          <path
            stroke="black"
            strokelinecap="round"
            strokelinejoin="round"
            strokewidth={2}
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </div>

      <div className="w-[100%] flex flex-col justify-center items-center mt-9">
        <div className="bg-[#FFF] border items-center md:w-[90%] rounded-md p-2 px-3 flex">
          <input
            type="search"
            placeholder="Search Admin"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-transparent outline-none text-sm px-2 w-full  text-[#323232]"
          />
          <label htmlFor="date">
            <SearchIcon />
          </label>
        </div>

        <button className="bg-[#6E3EFF] text-white px-3 text-xs py-3 rounded-[10px] cursor-pointer mt-5">
          Find admin
        </button>
      </div>
    </div>
  );
}
