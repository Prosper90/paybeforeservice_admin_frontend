import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../utils/contextShop";
import axios from "axios";

export default function RedeemModal({ redeemObj, setRedeemObj }) {
  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    successRedeem,
    setSuccessRedeem,
  } = useContext(ShopContext);
  const [inputValue, setInputValue] = useState("");

  const token = localStorage.getItem("token");
  const redeemTx = async () => {
    //check
    if (inputValue === "") {
      setNotify(true);
      setNotifyType("warn");
      setNotifymsg("Code needed");
      return;
    }
    const endpoint =
      "https://paybeforeservice.onrender.com/PayBeforeService/v1/payment/redeemPayment";

    try {
      const response = await axios.post(
        endpoint,
        {
          redeemCode: inputValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // You may include this header if required by the API
          },
        }
      );

      if (!response.data.status || response.status !== 200) {
        console.log("reeedemed modal called");
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.data.message);
        return;
      }
      setSuccessRedeem(true);
    } catch (error) {
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error.response.data.message);
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      // minute: '2-digit',
      // second: '2-digit',
      // timeZoneName: 'short',
    };
    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  useEffect(() => {}, []);

  return (
    <div
      className={` absolute w-full md:p-[10px]  justify-center items-center h-full left-0 top-0 z-50 bg-black/70 ${
        redeemObj.open ? "flex" : "hidden"
      }`}
    >
      <div className="h-auto md:w-[100%] flex flex-col justify-center  w-1/3 bg-white relative p-5 rounded-md">
        <svg
          className="w-3 h-3 absolute right-8 top-6 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 14 14"
          onClick={() => setRedeemObj({ open: false })}
        >
          <path
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <h3 className="font-ui-semi text-[24px] mt-5 text-[#0D0033] mb-2 text-left sm:text-[20px]">
          Dispute
        </h3>
        <p className="text-[#555555] text-">
          Dispute should be resolved with either a refund or complete, which are
          present as action buttons below
        </p>
        <h4 className="text-[#555] font-medium mt-5  mb-2 text-sm">Details</h4>

        <div className="border p-5 rounded-md mb-4 flex flex-col gap-2">
          <div className="flex text-[#555] justify-between">
            <p className="text-sm">Full Name</p>
            <p className="text-xs font-semibold">Last_name first_name</p>
          </div>
          <div className="flex text-[#555] justify-between">
            <p className="text-sm">Date</p>
            <p className="text-xs font-semibold">
              {/* {formatDate(redeemObj?.data.createdAt)} */}
              Dec 16, 2023, 07 PM
            </p>
          </div>
          <div className="flex text-[#555] justify-between">
            <p className="text-sm">Ticket ID</p>
            <p className="text-xs font-semibold">EEFTSD</p>
          </div>
          <div className="flex text-[#555] justify-between">
            <p className="text-sm">Note</p>
            <p className="text-xs font-semibold">_</p>
          </div>
          <div className="flex text-[#555] justify-between">
            <p className="text-sm">Amount</p>
            <p className="text-xs font-semibold text-[#6E3EFF]">₦5000</p>
          </div>
        </div>

        <div className="w-100 flex justify-center gap-3">
          <button
            className="bg-primary  px-[64px] sm:px-[0px] py-3 mt-4  w-full sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]"
            onClick={() => redeemTx()}
          >
            Refund
          </button>

          <button
            className="bg-[#A23EFF]  px-[64px] sm:px-[0px] py-3 mt-4  w-full sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]"
            onClick={() => redeemTx()}
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
}
