import React, { useContext } from "react";
import { ShopContext } from "../../../utils/contextShop";

export default function AdminActivities() {
  const {
    selectedAdmin,
    setSelectedAdmin,
    selectedAdminAction,
    setSelectedAdminAction,
  } = useContext(ShopContext);

  return (
    <div className="flex flex-col p-5 justify-start items-start">
      <div className="flex justify-between items-center w-[100%] relative mb-6">
        <span className="text-black">Admin Activity</span>

        <svg
          onClick={() => setSelectedAdminAction("")}
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

      <div className="border shadow-lg rounded flex w-[100%] p-3 gap-2 text-black">
        <div className="">Icon</div>
        <div className="">Details</div>
      </div>
    </div>
  );
}
