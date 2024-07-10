import React, { useContext, useState } from "react";
import { formatDate } from "../../utils/constants";
import Moredetails from "../TableComp/Moredetails";
import EditAdmin from "../Actions/Admins/EditAdmin";
import AdminActivities from "../Actions/Admins/AdminActivities";
import Suspendban from "../Actions/Admins/Suspendban";
import ViewRoles from "../Actions/Admins/ViewRoles";
import Resetadminpassword from "../Actions/Admins/Resetadminpassword";
import SendNotification from "../Actions/Admins/SendNotification";
import { ShopContext } from "../../utils/contextShop";

export default function Admindetails({ selectedAdmin, setSelectedAdmin }) {
  const [addAction, setAddAction] = useState(false);

  const { selectedAdminAction, setSelectedAdminAction } =
    useContext(ShopContext);

  const actionRender = () => {
    switch (selectedAdminAction) {
      case "editadmin":
        return <EditAdmin />;

      case "adminactivities":
        return <AdminActivities />;

      case "suspendban":
        return <Suspendban />;

      case "roles":
        return <ViewRoles />;

      case "resetpassword":
        return <Resetadminpassword />;

      case "notification":
        return <SendNotification />;

      default:
        break;
    }
  };

  const callBack = () => {
    selectedAdminAction === ""
      ? setSelectedAdmin({})
      : setSelectedAdminAction("");
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

          {addAction && selectedAdminAction == "" && (
            <Moredetails
              type="admin"
              item={selectedAdmin}
              setSelectedAdmin={setSelectedAdmin}
            />
          )}
        </div>
      </div>

      <div className="bg-[#fff] rounded p-5">
        {selectedAdminAction === "" ? (
          <>
            <div className="border border-[#DADADA] p-4 w-full flex  flex-row md:flex-col justify-between gap-0 md:gap-5 md:items-start items-center  rounded text-[#555] font-semibold text-sm">
              <div className="flex flex-col gap-1">
                <div className="">Email</div>
                <div className="">{selectedAdmin.email}</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="">created</div>
                <div className="">{formatDate(selectedAdmin.createdAt)}</div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="">Status</div>
                {selectedAdmin.isActive ? (
                  <div className="font-semibold text-xs text-[#22bb33]">
                    Active
                  </div>
                ) : (
                  <div className="font-semibold text-xs text-[#FF3E3E]">
                    Inactive
                  </div>
                )}
              </div>

              {/* <div className="flex gap-1">
              <div className="flex">
                <div className="">Icon</div>
                <div className="">N</div>
              </div>
              <div className="flex">
                <div className="">Icon</div>
                <div className="">N</div>
              </div>
              <div className="flex">
                <div className="">Icon</div>
                <div className="">N</div>
              </div>
            </div> */}
            </div>

            {/* extra user details */}
            <div className="mt-5  text-[#555]">
              <div className="flex flex-col gap-7">
                <div className="font-bold font-sm">USER INFORMATION</div>
                {/*Section one */}
                <div className="border border-[#DADADA] rounded">
                  <ul className="rounded border border-[#DADADA] text-xs font-semibold">
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">Role</div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {selectedAdmin.role}
                      </div>
                    </li>
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">Tasks</div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        --
                      </div>
                    </li>
                    {/* li */}
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Last Updated
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {formatDate(selectedAdmin.createdAt)}
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Section one end*/}

                {/* <div className="font-bold font-sm">USER INFORMATION EXTRA</div>

                <div className="border border-[#DADADA] rounded">
                  <ul className="rounded border border-[#DADADA] text-xs font-semibold">
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Joining Date
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {formatDate(selectedAdmin.createdAt)}
                      </div>
                    </li>
                    
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Reg Method
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        Email
                      </div>
                    </li>
                    
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Last Login
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        {formatDate(selectedAdmin.updatedAt)}
                      </div>
                    </li>
                    
                    <li className="flex items-center">
                      <div className="w-[190px] px-[20px] py-[14px]">
                        Newsleter Subscription
                      </div>
                      <div className="flex-grow border-b-[#DADADA] border-b border-solid leading-5 flex justify-between px-5 py-3.5 items-center border-l-[#DADADA] border-l">
                        Yes
                      </div>
                    </li>
                    
                  </ul>
                </div> */}
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
