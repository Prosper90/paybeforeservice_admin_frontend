import React from "react";

export default function Servers({ setSelecetedServer }) {
  return (
    <div className=" grid md:grid-cols-1 md:gap-5 2xl:grid-cols-3 gap-3 mt-7">
      {/* Server one */}
      <div
        onClick={() => setSelecetedServer("serverone")}
        className="md:w-full py-0 2xl:py-4 flex justify-center items-center border border-[#DADADA] rounded-[12px] relative overflow-hidden text-[#555] cursor-pointer"
      >
        <div className="flex flex-col gap-1 justify-center items-center w-full px-5">
          {/* Value */}
          <div className="font-bold text-xs flex flex-col gap-2 justify-center items-center">
            <img src="/image/server.svg" alt="" />
            <div className="">Server One (users).</div>
          </div>
          <div className="border border-[#00ff00] rounded-[10%] text-xs text-center w-14 mt-4">
            Active
          </div>
        </div>
      </div>
      {/* Server two */}
      <div
        onClick={() => setSelecetedServer("servertwo")}
        className="md:w-full py-0 2xl:py-4 flex justify-center items-center border border-[#DADADA] rounded-[12px] relative overflow-hidden text-[#555] cursor-pointer"
      >
        <div className="flex flex-col gap-1 justify-center items-center w-full px-5">
          {/* Value */}
          <div className="font-bold text-xs flex flex-col gap-2 justify-center items-center">
            <img src="/image/server.svg" alt="" />
            <div className="">Server two (Webhooks).</div>
          </div>
          <div className="border border-[#00ff00] rounded-[10%] text-xs text-center w-14 mt-4">
            Active
          </div>
        </div>
      </div>
      {/* Server three */}
      <div
        onClick={() => setSelecetedServer("serverthree")}
        className="md:w-full py-0 2xl:py-4 flex justify-center items-center border border-[#DADADA] rounded-[12px] relative overflow-hidden text-[#555] cursor-pointer"
      >
        <div className="flex flex-col gap-1 justify-center items-center w-full px-5">
          {/* Value */}
          <div className="font-bold text-xs flex flex-col gap-2 justify-center items-center">
            <img src="/image/server.svg" alt="" />
            <div className="">Server three (Admins).</div>
          </div>
          <div className="border border-[#00ff00] rounded-[10%] text-xs text-center w-14 mt-4">
            Active
          </div>
        </div>
      </div>
    </div>
  );
}
