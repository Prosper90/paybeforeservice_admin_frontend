import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../../utils/contextShop";
import { LOCAL_URL } from "../../../utils/constants";
import { makeCall } from "../../../utils/makeCall";
import useConfirmationModal from "../../../utils/useConfirmationModal";

export default function UserWithdrawal() {
  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    selectedUser,
    setSelectedUser,
    selectedUserAction,
    setSelectedUserAction,
    setShowConfirmation,
    setTitle,
    setMessage,
    setOnProceed,
    setOnCancel,
  } = useContext(ShopContext);
  const [loadingApprove, setLoadingApprove] = useState(false);
  const [loadingDeny, setLoadingDeny] = useState(false);
  const [currentWithdrawal, setCurrentWithdrawal] = useState({});
  const [withdrawFate, setWithdrawFate] = useState();
  const { showModal } = useConfirmationModal();

  const token = localStorage.getItem("token");

  const handleWithdrawal = async (fate) => {
    try {
      //   console.log("hi indiffirently", selectedUser._id);
      fate === "approve" ? setLoadingApprove(true) : setLoadingDeny(true);

      const endpoint = `${LOCAL_URL}/user/handle_withdrawal`;
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const body = {
        _id: selectedUser._id,
        withdrawal_id: currentWithdrawal.track_id,
        action: fate,
        amount: currentWithdrawal.withdrawal_Amount,
      };

      const proceedCallback = async () => {
        //close confirmation modal and its state
        setShowConfirmation(false);
        setTitle("");
        setMessage("");
        setOnProceed(() => () => {});
        setOnCancel(() => () => {});
        //close confirmation modal and its state

        const response = await makeCall(endpoint, body, headers, "put");
        if (!response.status) {
          fate === "approve" ? setLoadingApprove(false) : setLoadingDeny(false);
          setNotify(true);
          setNotifyType("warn");
          setNotifymsg(response.message);
          return;
        }
        fate === "approve" ? setLoadingApprove(false) : setLoadingDeny(false);
        setNotify(true);
        setNotifyType("success");
        setNotifymsg(response.message);
        setSelectedUser(response.data);
      };

      const cancelCallback = () => {
        //close confirmation modal and its state
        setShowConfirmation(false);
        setTitle("");
        setMessage("");
        setOnProceed(() => () => {});
        setOnCancel(() => () => {});
        //close confirmation modal and its state
        fate === "approve" ? setLoadingApprove(false) : setLoadingDeny(false);
      };

      showModal(
        "Confirm Withdrawal",
        "Are you sure you want to proceed with the withdrawal?",
        proceedCallback,
        cancelCallback
      );
    } catch (error) {
      console.log(error, "error oo");
      fate === "approve" ? setLoadingApprove(false) : setLoadingDeny(false);
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error?.response?.data?.message);
    }
  };

  useEffect(() => {}, [currentWithdrawal]);

  return (
    <div className="flex flex-col p-5 justify-start items-start text-[#333]">
      {Object.keys(currentWithdrawal).length === 0 ? (
        <>
          <div className="flex justify-between w-[100%] relative">
            <span>User withdrawal</span>

            <svg
              onClick={() => setSelectedUserAction("")}
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

          <div className="flex flex-col justify-center items-center w-[100%] gap-3 p-5 mt-5 overflow-y-scroll overflow-x-hidden h-64">
            {selectedUser?.withdrawalIssued
              .filter((data) => data.status === "pending")
              .map((data, index) => (
                <div
                  className="border shadow-lg rounded flex flex-col w-[100%] p-3 gap-2 text-black cursor-pointer"
                  key={index}
                  onClick={() => setCurrentWithdrawal(data)}
                >
                  <h2>N{data.withdrawal_Amount}</h2>

                  {/* More details */}
                  <p>Bank: {data.bank_name}</p>
                  <p>Account Number: {data.account_number}</p>
                  <p>Account Name: {data.account_name}</p>
                  <p>Track Id: {data.track_id}</p>
                </div>
              ))}
          </div>
        </>
      ) : (
        <div className=" relative flex flex-col justify-center items-center w-[100%] gap-3 mt-3">
          <svg
            onClick={() => setCurrentWithdrawal({})}
            className="w-3 h-3 absolute right-5 top-2 cursor-pointer"
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
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-bold text-black">
              Sent{" "}
              <span className="text-[#6E3EFF]">
                N{currentWithdrawal.withdrawal_Amount}
              </span>{" "}
              to {currentWithdrawal.account_name}, {currentWithdrawal.bank_name}
            </h3>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => {
                handleWithdrawal("approve");
              }}
              className="bg-[#6E3EFF] text-white w-24 px-3 text-xs py-2 rounded-[20px] cursor-pointer w-100 mt-2"
            >
              {!loadingApprove ? "Approve" : loadingApprove && "Loading..."}
            </button>

            <button
              onClick={() => {
                handleWithdrawal("deny");
              }}
              className="bg-[#FF3E3E] text-white w-24 px-3 text-xs py-2 rounded-[20px] cursor-pointer w-100 mt-2"
            >
              {!loadingDeny ? "Deny" : loadingDeny && "Loading..."}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
