import React, { useContext, useState } from "react";
import { ShopContext } from "../../../utils/contextShop";
import { LOCAL_URL, formatDate } from "../../../utils/constants";
import { makeCall } from "../../../utils/makeCall";

export default function Updatetx() {
  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    selectedTx,
    setSelectedTx,
    selectedTransactionAction,
    setSelectedTransactionAction,
  } = useContext(ShopContext);
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);
  const [amount_initiated, setAmountInitiated] = useState();
  const [amount_paid, setAmountPaid] = useState();
  const [withdrawAmount, setWithdrawAmount] = useState();
  const [owner, setOwner] = useState();
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const [name, number] = inputValue.split(" ");

    setAccountName(name);
    setAccountNumber(number);
  };

  const updateTx = async () => {
    try {
      setLoading(true);
      const endpoint = `${LOCAL_URL}/transaction/update_tx`;
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const body = {
        _id: selectedTx._id,
        type: selectedTx.type,
        amount_paid: amount_paid,
        withdrawAmount: withdrawAmount,
        amount_initiated: amount_initiated,
        accountName: accountName,
        accountNumber: accountNumber,
      };
      const response = await makeCall(endpoint, body, headers, "put");

      if (!response.status) {
        setLoading(false);
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.message);
        return;
      }
      setLoading(false);
      setNotify(true);
      setNotifyType("success");
      setNotifymsg(response.message);
      setSelectedTx(response?.data);
    } catch (error) {
      console.log(error, "hearingggggg");
      setLoading(false);
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col p-5 justify-start items-start">
      <div className="flex justify-between w-[100%] relative">
        <span className="text-black">Edit User</span>

        <svg
          onClick={() => setSelectedTransactionAction("")}
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
      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Transaction Id
      </div>
      <input
        type="tel"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
        value={selectedTx?.track_id}
        disabled
      />
      {selectedTx.type === "Payment" && (
        <>
          <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
            Amount Initiated
          </div>
          <input
            type="number"
            name="phone"
            className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
            value={selectedTx.payment.amount_created}
            onChange={(e) => setAmountInitiated(e.target.value)}
          />

          <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
            Amount Paid
          </div>
          <input
            type="number"
            name="phone"
            className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
            defaultValue={selectedTx.payment.amount_paid}
            onChange={(e) => setAmountPaid(e.target.value)}
          />
        </>
      )}
      {selectedTx.type !== "Payment" && (
        <>
          <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
            Amount Initiated
          </div>
          <input
            type="number"
            name="phone"
            className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
            defaultValue={selectedTx.payment.amount_created}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
        </>
      )}
      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">Owner</div>
      <input
        type="text"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
        value={selectedTx?.owner?.email}
      />

      {selectedTx.type !== "Payment" ? (
        <>
          <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
            Sent to
          </div>
          <input
            type="tel"
            name="phone"
            className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
            value={`${selectedTx.withdrawal.reciever.account_name} ${selectedTx.withdrawal.reciever.account_number}`}
            onChange={handleInputChange}
          />
        </>
      ) : (
        <>
          <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
            Sent to
          </div>
          <input
            type="tel"
            name="phone"
            className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
            value={selectedTx.payment?.reciever?.email}
          />

          <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
            Sent from
          </div>
          <input
            type="tel"
            name="phone"
            className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
            value={`${selectedTx.payment?.sender?.account_name | "--"} ${
              selectedTx.payment?.sender?.account_number | "--"
            }`}
          />
        </>
      )}

      <div className="flex justify-items-end mt-5 p-1 w-[100%]">
        <button
          onClick={() => updateTx()}
          className="bg-[#6E3EFF] text-white px-3 text-xs py-2 rounded-[20px] cursor-pointer"
        >
          {!loading ? "Save" : "Loading..."}
        </button>
      </div>
    </div>
  );
}
