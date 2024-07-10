import React, { useContext } from "react";
import { ShopContext } from "../../../utils/contextShop";

export default function Resetadminpassword() {
  const {
    selectedAdmin,
    setSelectedAdmin,
    selectedAdminAction,
    setSelectedAdminAction,
  } = useContext(ShopContext);

  return (
    <div className="flex flex-col p-5 justify-start items-start">
      <div className="flex justify-between w-[100%] relative">
        <span className="text-black">Reset Password</span>

        <svg
          onClick={() => setSelectedAdminAction("")}
          className="w-3 h-3 absolute right-8 top-6 cursor-pointer"
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
      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Old password
      </div>

      <input
        type="tel"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
      />
      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        New password
      </div>
      <input
        type="text"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
      />

      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Confirm password
      </div>
      <input
        type="text"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
      />
    </div>
  );
}
