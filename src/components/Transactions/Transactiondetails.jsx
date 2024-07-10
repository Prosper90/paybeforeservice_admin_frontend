import React, { useContext, useState } from "react";
import { formatDate } from "../../utils/constants";
import Moredetails from "../TableComp/Moredetails";
import { ShopContext } from "../../utils/contextShop";
import Updatetx from "../Actions/Transactions/Updatetx";

export default function Transactiondetails({ selectedTx, setSelectedTx }) {
  const [addAction, setAddAction] = useState(false);
  const { selectedTransactionAction, setSelectedTransactionAction } =
    useContext(ShopContext);

  const actionRender = () => {
    switch (selectedTransactionAction) {
      case "updatetx":
        return <Updatetx />;

      default:
        break;
    }
  };

  const callBack = () => {
    selectedTransactionAction === ""
      ? setSelectedTx({})
      : setSelectedTransactionAction("");
  };

  return (
    <div className="w-full p-20 md:p-5">
      <div className="w-[100%] flex justify-between text-[#555] mb-7">
        <h1 className="text-black">Transaction Details</h1>

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

          {addAction && selectedTransactionAction == "" && (
            <Moredetails
              type="transaction"
              item={selectedTx}
              setSelectedTx={setSelectedTx}
            />
          )}
        </div>
      </div>

      <div className="bg-[#fff] rounded p-5">
        {selectedTransactionAction === "" ? (
          <>
            <div className="border border-[#DADADA] p-4 w-full flex  flex-row md:flex-col justify-between gap-0 md:gap-5 md:items-start items-center  rounded text-[#555] font-semibold text-sm">
              <div className="flex flex-col gap-1">
                <div className="">type</div>
                <div className="">{selectedTx.type}</div>
              </div>
              <div className="flex flex-col gap-1">
                {selectedTx.type === "Payment" ? (
                  <>
                    <div className=""> Amount Created</div>
                    <div className="">{selectedTx.payment.amount_created}</div>
                  </>
                ) : (
                  <>
                    <div className=""> withdrawal created</div>
                    <div className="">N{selectedTx.createdAt}</div>
                  </>
                )}
              </div>
              {selectedTx.type === "Payment" && (
                <div className="flex flex-col gap-1">
                  <div className=""> Amount Paid</div>
                  <div className="">N{selectedTx.payment.amount_paid}</div>
                </div>
              )}

              <div className="flex flex-col gap-1">
                {selectedTx.type === "Payment" ? (
                  <>
                    <div className="">Payment fufilled</div>
                    {selectedTx.payment.isPaid ? (
                      <div className="font-semibold text-xs text-[#22bb33]">
                        Completed
                      </div>
                    ) : (
                      <div className="font-semibold text-xs text-[#FF3E3E]">
                        not Paid
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="">Status</div>
                    {selectedTx.status === "success" ? (
                      <div className="font-semibold text-xs text-[#22bb33]">
                        Completed
                      </div>
                    ) : (
                      <div className="font-semibold text-xs text-[#FF3E3E]">
                        not Paid
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* <div className="flex flex-col gap-1">
                        <div className="">owner</div>
                        <div className="">{selectedTx.owner}</div>
                      </div> */}
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
                        {selectedTx.track_id}
                      </div>
                    </li>
                    {/* li */}
                    {selectedTx.type === "Payment" && (
                      <li className="flex items-center">
                        <div className="w-[190px] px-[20px] py-[14px]">
                          Payment Created Id
                        </div>
                        <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                          {selectedTx.payment.linkID}
                        </div>
                      </li>
                    )}
                    {/* li */}
                    {selectedTx.type === "Payment" && (
                      <>
                        <li className="flex items-center">
                          <div className="w-[190px] px-[20px] py-[14px]">
                            Amount Created
                          </div>
                          <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                            {selectedTx.payment.amount_created}
                          </div>
                        </li>

                        <li className="flex items-center">
                          <div className="w-[190px] px-[20px] py-[14px]">
                            Amount Paid
                          </div>
                          <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                            {selectedTx.payment.amount_paid}
                          </div>
                        </li>
                      </>
                    )}

                    {/* li */}
                    {selectedTx.type !== "Payment" && (
                      <li className="flex items-center">
                        <div className="w-[190px] px-[20px] py-[14px]">
                          Amount Withdrawn
                        </div>
                        <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                          {selectedTx.withdrawal.amount}
                        </div>
                      </li>
                    )}
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Date Created
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {formatDate(selectedTx.createdAt)}
                      </div>
                    </li>
                    {/* li */}
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
                        Sender
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {selectedTx?.sender?.account_name | "__"}
                        {selectedTx?.sender?.account_number | "__"}
                      </div>
                    </li>
                    {/* li */}
                    {selectedTx.type === "Payment" ? (
                      <li className="flex items-center">
                        <div className="w-[190px] px-[20px] py-[14px]">
                          Reciever
                        </div>
                        <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                          {selectedTx?.payment?.reciever?.email}
                        </div>
                      </li>
                    ) : (
                      <li className="flex items-center">
                        <div className="w-[190px] px-[20px] py-[14px]">
                          Reciever
                        </div>
                        <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                          {selectedTx?.withdrawal.reciever.account_name}{" "}
                          {selectedTx?.withdrawal.reciever.account_number}
                        </div>
                      </li>
                    )}
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Payment made
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {selectedTx.payment.isPaid}
                      </div>
                    </li>
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Newsleter Subscription
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        Yes
                      </div>
                    </li>
                    {/* li */}
                  </ul>
                </div>
                {/* Section two end */}
              </div>
            </div>
          </>
        ) : (
          actionRender()
        )}
      </div>
    </div>
  );
}
