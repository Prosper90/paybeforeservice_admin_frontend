/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import { ShopContext } from "../../../utils/contextShop";
import { formatDates } from "../../../utils/constants";

export default function Wallet({ balances, usersData, adminsData }) {
  const { paymentModal, successRedeem } = useContext(ShopContext);
  useEffect(() => {}, [paymentModal, successRedeem]);
  return (
    <div className=" grid md:grid-cols-1 md:gap-5 2xl:grid-cols-3 gap-3">
      {/* Wallet one */}
      <div className="md:w-full py-0 2xl:py-4 flex justify-center items-center bg-[#6E3EFF] rounded-[12px] relative overflow-hidden">
        <div className="flex flex-col gap-1 justify-start w-full px-5">
          {/* Info */}
          <div className="flex justify-between">
            <div className="font-semibold text-xs">Total Wallet</div>
            <div className="text-xs">{formatDates()}</div>
          </div>
          {/* Value */}
            <div className="text-[#FFF] font-bold text-2xl">
              N{
              new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2, // Always show two decimal places 
                maximumFractionDigits: 2,
                useGrouping: true, // Add thousand separators (commas)
                }).format(balances?.wallet_balance)}
            </div>
          {/* Extra info */}
          <div className="flex justify-between">
             <div className="text-xs font-thin flex flex-col">
               <small className="text-[9px]">Users total</small>
               N{balances?.revenue}
             </div>
             <div className="text-xs font-thin flex flex-col">
               <small className="text-[9px]">Today's Redeemed</small>
               N{balances?.total_main_today}
             </div>
             <div className="text-xs font-thin flex flex-col">
               <small className="text-[9px]">Today's pending</small>
               N{balances?.total_pending_today}
             </div>
          </div>
        </div>

        <div className="absolute bottom-[-10px] right-[-10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="43"
            viewBox="0 0 92 43"
            fill="none"
          >
            <rect width="176" height="156" fill="white" fillOpacity="0.1" />
            <rect
              x="14"
              y="13"
              width="176"
              height="156"
              fill="white"
              fillOpacity="0.2"
            />
          </svg>
        </div>
      </div>
      {/* Wallet two */}
      <div className=" 2xl:py-4 flex justify-center items-center bg-[#A23EFF] rounded-[12px] relative overflow-hidden">
        <div className="flex flex-col gap-1 justify-start w-full px-5">
          {/* Info */}
          <div className="flex justify-between">
            <div className="font-semibold text-xs">Users</div>
            <div className="text-xs">{formatDates()}</div>
          </div>
          {/* Value */}

          <div className="text-[#FFF] font-bold text-2xl">{usersData?.totalUsers}</div>
          {/* Extra info */}
          <div className="flex justify-between">
             <div className="text-xs font-thin flex flex-col">
               <small className="text-[9px]">active</small>
               {usersData?.active}
             </div>
             <div className="text-xs font-thin flex flex-col">
               <small className="text-[9px]">inactive</small>
               {usersData?.inactive}
             </div>
             <div className="text-xs font-thin flex flex-col">
               <small className="text-[9px]">unverified</small>
               {usersData?.unverified}
             </div>
          </div>
        </div>

        <div className="absolute bottom-[-10px] right-[-10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="43"
            viewBox="0 0 92 43"
            fill="none"
          >
            <rect width="176" height="156" fill="white" fillOpacity="0.1" />
            <rect
              x="14"
              y="13"
              width="176"
              height="156"
              fill="white"
              fillOpacity="0.2"
            />
          </svg>
        </div>
      </div>
      {/* Wallet three */}
      <div className="md:w-full  2xl:py-4  flex justify-center items-center bg-[#FFF] rounded-[12px] relative z-40 text-[#000] overflow-hidden">
        <div className="flex flex-col gap-1 justify-start w-full px-5">
          {/* Info */}
          <div className="flex justify-between">
            <div className="font-semibold text-xs">Admins</div>
            <div className="text-xs">{formatDates()}</div>
          </div>
          {/* Value */}

          <div className=" font-bold text-2xl">{adminsData?.totalAdmins}</div>
          {/* Extra info */}
          <div className="flex justify-between">
             <div className="text-xs font-thin flex flex-col">
               <small className="text-[9px]">active</small>
               {adminsData?.active}
             </div>
             <div className="text-xs font-thin flex flex-col">
               <small className="text-[9px]">inactive</small>
               {adminsData?.inactive}
             </div>
             <div className="text-xs font-thin flex flex-col">
               <small className="text-[9px]">banned</small>
               {adminsData?.banned}
             </div>
          </div>
        </div>

        <div className="absolute bottom-[-8px] right-[-8px]">
          <svg
            width="83"
            height="49"
            viewBox="0 0 83 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="50.505"
              cy="50.5069"
              rx="50.505"
              ry="50.5069"
              fill="#6E3EFF"
              fillOpacity="0.1"
            />
            <ellipse
              cx="78.6785"
              cy="70.3158"
              rx="60.3278"
              ry="60.33"
              fill="#6E3EFF"
              fillOpacity="0.15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
