import React from "react";
import { formatDate } from "../../utils/constants";
import Assign from "../Actions/Disputes/Assign";
import Resolve from "../Actions/Disputes/Resolve";
import Delete from "../Actions/Disputes/Delete";

export default function TransactionType({
  selectedDispute,
  selectedDisputeAction,
  setSelectedDisputeAction,
}) {
  const actionRender = () => {
    switch (selectedDisputeAction) {
      case "resolve":
        return <Resolve />;
      case "delete":
        return <Delete />;
      case "assign":
        return <Assign />;

      default:
        break;
    }
  };

  return (
    <>
      {selectedDisputeAction === "" ? (
        <>
          <div className="border border-[#DADADA] p-4 w-full flex  flex-row md:flex-col justify-between gap-0 md:gap-5 md:items-start items-center  rounded text-[#555] font-semibold text-sm">
            <div className="flex flex-col gap-1">
              <div className="">type</div>
              <div className="">{selectedDispute.type}</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className=""> dispute created</div>
              <div className="">{formatDate(selectedDispute.createdAt)}</div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="">Payment fufilled</div>
              <div
                className={`font-semibold text-xs ${
                  selectedDispute.status === "complete"
                    ? "text-[#22bb33]"
                    : "text-[#FF3E3E]"
                }`}
              >
                {selectedDispute.status}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="">priority</div>
              <div className="">{selectedDispute.reminder}</div>
            </div>
          </div>

          {/* extra user details */}
          <div className="mt-5  text-[#555]">
            <div className="flex flex-col gap-7">
              <div className="font-bold font-sm">TRANSACTION INFORMATION</div>
              {/*Section one */}
              <div className="border border-[#DADADA] rounded">
                <ul className="rounded border border-[#DADADA] text-xs font-semibold">
                  <li className="flex items-center">
                    <div className="w-[190px] px-[20px] py-[14px]">
                      Transaction Id
                    </div>
                    <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                      {selectedDispute.dispute_id}
                    </div>
                  </li>
                  {/* li */}
                  <li className="flex items-center">
                    <div className="w-[190px] px-[20px] py-[14px]">Amount</div>
                    <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                      {selectedDispute.amount | "--"}
                    </div>
                  </li>
                  {/* li */}
                  {/* li */}
                  <li className="flex items-center">
                    <div className="w-[190px] px-[20px] py-[14px]">Sender</div>
                    <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                      {selectedDispute.sender | "---"}
                    </div>
                  </li>
                  {/* li */}
                  <li className="flex items-center">
                    <div className="w-[190px] px-[20px] py-[14px]">
                      Reciever
                    </div>
                    <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                      {selectedDispute.reciever | "--"}
                    </div>
                  </li>
                  {/* li */}
                  {/* li */}
                  <li className="flex items-center">
                    <div className="w-[190px] px-[20px] py-[14px]">
                      Priority
                    </div>
                    <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                      {selectedDispute.reminder}
                    </div>
                  </li>
                  {/* li */}
                  <li className="flex items-center">
                    <div className="w-[190px] px-[20px] py-[14px]">Creator</div>
                    <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                      {selectedDispute.owner}
                    </div>
                  </li>
                </ul>
              </div>
              {/* Section one end*/}

              <div className="font-bold font-sm">
                TRANSACTION INFORMATION EXTRA
              </div>
              {/*Section two */}
              <div className="border border-[#DADADA] rounded">
                <ul className="rounded border border-[#DADADA] text-xs font-semibold">
                  <li className="flex items-center">
                    <div className="w-[190px] px-[20px] py-[14px]">
                      Issue reason
                    </div>
                    <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                      {selectedDispute.reason}
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-[190px] px-[20px] py-[14px]">
                      created Date
                    </div>
                    <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                      {formatDate(selectedDispute.createdAt)}
                    </div>
                  </li>
                  {/* li */}
                  <li className="flex items-center">
                    <div className="w-[190px] px-[20px] py-[14px]">
                      Resolved
                    </div>
                    <div
                      className={`flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l ${
                        selectedDispute.status === "resolved"
                          ? "text-[#22bb33]"
                          : "text-[#FF3E3E]"
                      }`}
                    >
                      {selectedDispute.status}
                    </div>
                  </li>
                  {/* li */}
                  <li className="flex items-center">
                    <div className="w-[190px] px-[20px] py-[14px]">Updated</div>
                    <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                      {formatDate(selectedDispute.updatedAt)}
                    </div>
                  </li>
                </ul>
              </div>
              {/* Section two end */}
            </div>
          </div>
        </>
      ) : (
        actionRender()
      )}
    </>
  );
}
