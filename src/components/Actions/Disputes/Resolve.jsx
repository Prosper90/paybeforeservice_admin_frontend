import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../utils/contextShop";

export default function Resolve() {
  const {
    selectedDispute,
    setSelectedDispute,
    selectedDisputeAction,
    setSelectedDisputeAction,
  } = useContext(ShopContext);

  const [selectedValue, setSelectedValue] = useState(""); // Set initial state

  const picker = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    if (selectedDispute.status === "resolved") {
      setSelectedValue("resolved");
    } else if (selectedDispute.status === "failed") {
      setSelectedValue("failed");
    }
  }, [selectedValue]);

  return (
    <div className="flex flex-col p-5 justify-start items-start">
      <div className="flex justify-between items-center w-[100%] relative">
        <span className="text-black">
          Resolve Dispute <br />
          <small className="whitespace-nowrap">
            <div
              className={`${
                selectedDispute.status == "resolved"
                  ? "text-[#22bb33]"
                  : "text-[#FF3E3E]"
              }`}
            >
              currently {selectedDispute.status}
            </div>
          </small>
        </span>

        <svg
          onClick={() => setSelectedDisputeAction("")}
          className="w-3 h-3 cursor-pointer"
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

      <div className="flex flex-col gap-2 w-[100%] mt-10 text-black">
        <div className="flex border rounded-md p-5 gap-3">
          <input
            type="radio"
            name="resolving"
            value="resolve"
            onChange={picker}
          />
          <label>Resolved</label>
        </div>
        <div className="flex border rounded-md p-5 gap-3">
          <input type="radio" name="resolving" value="fail" onChange={picker} />
          <label>Failed</label>
        </div>

        <button className="bg-[#6E3EFF] text-white px-3 text-xs py-3 rounded-[20px] cursor-pointer mt-5">
          {selectedValue === ""
            ? "make a pick"
            : selectedValue === "resolve"
            ? "Resolve"
            : "Fail"}
        </button>
      </div>
    </div>
  );
}
