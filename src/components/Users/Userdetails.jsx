import React, { useContext, useState } from "react";
import { formatDate } from "../../utils/constants";
import Moredetails from "../TableComp/Moredetails";
import EditUser from "../Actions/Users/EditUser";
import { ShopContext } from "../../utils/contextShop";
import EnabledisableUser from "../Actions/Users/EnabledisableUser";
import ResetPassword from "../Actions/Users/ResetPassword";
import ResetPin from "../Actions/Users/ResetPin";
import Usersactivities from "../Actions/Users/Usersactivities";
import Userstransactions from "../Actions/Users/Userstransactions";
import UserWithdrawal from "../Actions/Users/UserWithdrawal";

export default function Userdetails({ selectedUser, setSelectedUser }) {
  const [addAction, setAddAction] = useState(false);
  const { selectedUserAction, setSelectedUserAction } = useContext(ShopContext);

  const actionRender = () => {
    switch (selectedUserAction) {
      case "edituser":
        return <EditUser />;

      case "enabledisable":
        return <EnabledisableUser />;

      case "resetpassword":
        return <ResetPassword />;

      case "resetpin":
        return <ResetPin />;

      case "useractivity":
        return <Usersactivities />;

      case "usertransactions":
        return <Userstransactions />;

      case "handlewithdrawal":
        return <UserWithdrawal />;

      default:
        break;
    }
  };

  const callBack = () => {
    selectedUserAction === "" ? setSelectedUser({}) : setSelectedUserAction("");
  };

  return (
    <div className="w-full p-20 md:p-5">
      <div className="w-[100%] flex justify-between text-[#555] mb-7">
        <h1 className="text-black">User Details</h1>

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

          {addAction && selectedUserAction == "" && (
            <Moredetails
              type="user"
              item={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          )}
        </div>
      </div>

      <div className="bg-[#fff] rounded p-5">
        {selectedUserAction === "" ? (
          <>
            <div className="border border-[#DADADA] p-4 w-full flex  flex-row md:flex-col justify-between gap-0 md:gap-5 md:items-start items-center  rounded text-[#555] font-semibold text-sm">
              <div className="flex flex-col gap-1">
                <div className="">Payments Created</div>
                <div className="">{selectedUser.paymentLink.length}</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="">Balance Main</div>
                <div className="">N{selectedUser.balances.main_wallet}</div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="">Balance Pending</div>
                <div className="">N{selectedUser.balances.pending_wallet}</div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="">Status</div>
                {selectedUser.isActive ? (
                  <div className="font-semibold text-xs text-[#22bb33]">
                    Active
                  </div>
                ) : (
                  <div className="font-semibold text-xs text-[#FF3E3E]">
                    Inactive
                  </div>
                )}
              </div>
            </div>
            {/* extra user details */}
            <div className="mt-5  text-[#555]">
              <div className="flex flex-col gap-7">
                <div className="font-bold font-sm">USER INFORMATION</div>
                {/*Section one */}
                <div className="border border-[#DADADA] rounded">
                  <ul className="rounded border border-[#DADADA] text-xs font-semibold">
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Gender
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {selectedUser.gender === "M" ? "Male" : "Female"}
                      </div>
                    </li>
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Username
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {selectedUser.username}
                      </div>
                    </li>
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Email Address
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {selectedUser.email}
                      </div>
                    </li>
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Mobile Number
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        ---
                      </div>
                    </li>
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Date of Birth
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {formatDate(selectedUser.date_of_birth)}
                      </div>
                    </li>
                    {/* li */}
                  </ul>
                </div>
                {/* Section one end*/}

                <div className="font-bold font-sm">USER INFORMATION EXTRA</div>
                {/*Section two */}
                <div className="border border-[#DADADA] rounded">
                  <ul className="rounded border border-[#DADADA] text-xs font-semibold">
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Joining Date
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {formatDate(selectedUser.createdAt)}
                      </div>
                    </li>
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Reg Method
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        Email
                      </div>
                    </li>
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Last Login
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {formatDate(selectedUser.updatedAt)}
                      </div>
                    </li>
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Newsleter Subscription
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        --
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
