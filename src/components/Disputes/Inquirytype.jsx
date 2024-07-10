import React from "react";
import { formatDate } from "../../utils/constants";
import Writemail from "../Actions/Disputes/Writemail";

export default function Inquirytype({
  selectedDispute,
  selectedDisputeAction,
  setSelectedDisputeAction,
}) {
  const actionRender = () => {
    switch (selectedDisputeAction) {
      case "writemail":
        return <Writemail />;

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
              <div className="">Reminded</div>

              <div className="font-semibold text-xs text-[#FF3E3E]">
                {selectedDispute.reminder}
              </div>
            </div>

            {/* <div className="flex flex-col gap-1">
            <div className="">Issuer</div>
            <div className="">{selectedDispute.email}</div>
          </div> */}
          </div>

          {/* extra user details */}
          <div className="mt-5  text-[#555]">
            <div className="flex flex-col gap-7">
              <div className="">
                <small className="font-semibold font-sm">issuer</small>
                <div className="border border-[#DADADA] rounded p-3">
                  {selectedDispute.email}
                </div>
              </div>

              {/*Section one */}
              <div className="">
                <small className="font-semibold font-sm">Inquiry</small>
                <div className="border border-[#DADADA] rounded p-3">
                  {selectedDispute.reason}
                </div>
              </div>

              {/* Section one end*/}
            </div>
          </div>
        </>
      ) : (
        actionRender()
      )}
    </>
  );
}
