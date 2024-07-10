import React, { useContext } from "react";
import { ShopContext } from "../../../utils/contextShop";

export default function Delete() {
  const {
    selectedDispute,
    setSelectedDispute,
    selectedDisputeAction,
    setSelectedDisputeAction,
  } = useContext(ShopContext);

  return (
    <div className="flex flex-col p-5 justify-start items-start">
      <div className="flex justify-between items-center w-[100%] relative">
        <span className="text-black">Delete</span>

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

      <div className="w-[100%] flex flex-col justify-center items-center mt-9 text-black">
        <div className="text-[#FF3E3E] font-bold text-lg">Delete Dispute</div>

        <button className="bg-[#6E3EFF] hover:bg-[#FF3E3E] text-white px-3 text-xs py-3 rounded-[10px] cursor-pointer mt-5">
          Delete
        </button>
      </div>
    </div>
  );
}
