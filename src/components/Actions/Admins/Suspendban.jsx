import React, { useContext } from "react";
import { ShopContext } from "../../../utils/contextShop";

export default function Suspendban() {
  const {
    selectedAdmin,
    setSelectedAdmin,
    selectedAdminAction,
    setSelectedAdminAction,
  } = useContext(ShopContext);

  return (
    <div className="flex flex-col p-5 justify-start items-start text-[#333]">
      <div className="flex justify-between w-[100%] relative">
        <span>Enable/Disable User</span>

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

      <div className="flex flex-col justify-center items-center w-[100%] gap-3 mt-3">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-black">Lorem ipsum dolor sit amet.</h3>
          <small className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </small>
        </div>

        <div className="border p-3 flex gap-2 items-center w-[65%] md:w-[100%] rounded">
          {/* user image rep */}
          <div className="bg-[#6E3EFF] flex justify-center items-center rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFF"
                d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675zM4 20v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
              />
            </svg>
          </div>
          {/* user info */}
          <div className="flex flex-col ">
            <div className="font-semibold">Status</div>

            {selectedAdmin.isActive ? (
              <div className="font-semibold text-xs text-[#22bb33]">
                Enabled
              </div>
            ) : (
              <div className="font-semibold text-xs text-[#FF3E3E]">
                Disabled
              </div>
            )}
          </div>
        </div>

        <button className="bg-[#6E3EFF] text-white px-3 text-xs py-2 rounded-[20px] cursor-pointer w-100 mt-2">
          {selectedAdmin.isActive ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
}
