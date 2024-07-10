import React, { useContext, useState } from "react";
import { ShopContext } from "../../../utils/contextShop";
import { makeCall } from "../../../utils/makeCall";
import { LOCAL_URL } from "../../../utils/constants";

export default function ResetPassword() {
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

  const [new_password, setNewPassword] = useState();
  const [confirm_password, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);

  const resetPassword = async () => {
    try {
      setLoading(true);
      const endpoint = `${LOCAL_URL}/user/reset_password`;
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const body = {
        _id: selectedUser._id,
        new_password: new_password,
        confirm_password: confirm_password,
      };
      if (new_password !== confirm_password) {
        setLoading(false);
        console.log("eeeeeeeeeeemte");
        setNotify(true);
        setNotifyType("warn");
        setNotifymsg("Passwords do not match");
        return;
      }
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
      setSelectedUser(response.data);
    } catch (error) {
      console.log(error, "kkkkkkkkkksssssssssssss");
      setLoading(false);
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col p-5 justify-start items-start">
      <div className="flex justify-between w-[100%] relative">
        <span className="text-black">Reset Password</span>

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
        New password
      </div>
      <input
        type="text"
        name="phone"
        value={new_password}
        onChange={(e) => setNewPassword(e.target.value)}
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
      />

      <div className="text-[#706f6f] font-medium mt-5 mb-2 text-xs">
        Confirm password
      </div>
      <input
        type="text"
        name="phone"
        value={confirm_password}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="flex-1 border text-black h-full px-5 py-4 w-full overflow-hidden rounded-xl outline-primary"
      />

      <div className="flex justify-items-end mt-5 p-1 w-[100%]">
        <button
          onClick={() => resetPassword()}
          className="bg-[#6E3EFF] text-white px-3 text-xs py-2 rounded-[20px] cursor-pointer"
        >
          {!loading ? "Save" : "Loading..."}
        </button>
      </div>
    </div>
  );
}
