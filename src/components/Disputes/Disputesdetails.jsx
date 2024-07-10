import React, { useState, useContext } from "react";
import { formatDate } from "../../utils/constants";
import TransactionType from "./TransactionType";
import Complainttype from "./Complainttype";
import Inquirytype from "./Inquirytype";
import { ShopContext } from "../../utils/contextShop";
import Moredetails from "../TableComp/Moredetails";

export default function Disputesdetails({
  selectedDispute,
  setSelectedDispute,
}) {
  const [addAction, setAddAction] = useState(false);
  const { selectedDisputeAction, setSelectedDisputeAction } =
    useContext(ShopContext);

  const callBack = () => {
    selectedDisputeAction === ""
      ? setSelectedDispute({})
      : setSelectedDisputeAction("");
  };

  return (
    <div className="w-full p-20 md:p-5">
      <div className="w-[100%] flex justify-between text-[#555] mb-7">
        <h1 className="text-black">Dispute Details</h1>

        <div className="flex gap-2 relative">
          <div
            onClick={callBack}
            className="bg-[#6E3EFF] text-white px-3 text-xs py-2 rounded-[20px] cursor-pointer"
          >
            Back
          </div>

          <div
            className="p-1 rounded bg-[#555] flex justify-center items-center cursor-pointer"
            onClick={() => setAddAction(!addAction)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-7 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
              />
            </svg>
          </div>

          {addAction && selectedDisputeAction === "" && (
            <Moredetails
              type="dispute"
              item={selectedDispute}
              setSelectedDispute={setSelectedDispute}
            />
          )}
        </div>
      </div>

      <div className="bg-[#fff] rounded p-5">
        {selectedDispute.type === "transaction" ? (
          <TransactionType
            selectedDispute={selectedDispute}
            selectedDisputeAction={selectedDisputeAction}
            setSelectedDisputeAction={setSelectedDisputeAction}
          />
        ) : selectedDispute.type === "complaint" ||
          selectedDispute.type === "others" ? (
          <Complainttype
            selectedDispute={selectedDispute}
            selectedDisputeAction={selectedDisputeAction}
            setSelectedDisputeAction={setSelectedDisputeAction}
          />
        ) : (
          selectedDispute.type === "inquiry" && (
            <Inquirytype
              selectedDispute={selectedDispute}
              selectedDisputeAction={selectedDisputeAction}
              setSelectedDisputeAction={setSelectedDisputeAction}
            />
          )
        )}
      </div>
    </div>
  );
}
