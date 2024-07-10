import React, { useContext, useState } from "react";
import { ShopContext } from "../../../utils/contextShop";
import { LOCAL_URL, formatDate } from "../../../utils/constants";
import { makeCall } from "../../../utils/makeCall";

export default function EditUser() {
  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    selectedUser,
    setSelectedUser,
    selectedUserAction,
    setSelectedUserAction,
  } = useContext(ShopContext);
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [bankName, setBankName] = useState();
  const [accountNumber, setAccountNumber] = useState();

  const updateUser = async () => {
    try {
      setLoading(true);
      const endpoint = `${LOCAL_URL}/user/update_user`;
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const body = {
        _id: selectedUser._id,
        email: email,
        first_name: firstName,
        last_name: lastName,
        bank_name: bankName,
        account_number: accountNumber,
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
      setSelectedUser(response?.data);
    } catch (error) {
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

      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        First Name
      </div>
      <input
        type="tel"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
        value={selectedUser?.first_name}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Last Name
      </div>
      <input
        type="tel"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
        value={selectedUser?.last_name}
        onChange={(e) => setLastName(e.target.value)}
      />
      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Email Address
      </div>

      <input
        type="tel"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
        value={selectedUser?.email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Bank Name
      </div>
      <input
        type="text"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
        value={selectedUser?.bank_info?.bank_name}
        onChange={(e) => setBankName(e.target.value)}
      />

      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Account Number
      </div>
      <input
        type="text"
        name="phone"
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
        value={selectedUser?.bank_info?.account_number}
        onChange={(e) => setAccountNumber(e.target.value)}
      />

      <div className="flex justify-items-end mt-5 p-1 w-[100%]">
        <button
          onClick={() => updateUser()}
          className="bg-[#6E3EFF] text-white px-3 text-xs py-2 rounded-[20px] cursor-pointer"
        >
          {!loading ? "Save" : "Loading..."}
        </button>
      </div>
    </div>
  );
}
