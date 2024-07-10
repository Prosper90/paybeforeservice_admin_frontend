/* eslint-disable react/prop-types */
/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import { useContext, useState } from "react";
import PaymentLinkModal from "./PaymentLinkModal";
import axios from "axios";
import { LOCAL_URL } from "../../utils/constants";
import { makeCall } from "../../utils/makeCall";
import { ShopContext } from "../../utils/contextShop";

export default function Addadmin({ addAdminModal, setaddAdminModal }) {


  const {
    setNotify,
    setNotifyType,
    setNotifymsg} = useContext(ShopContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pickRole, setPickRole] = useState(false);
  const [role, setRole] = useState();
  const [loading, setLoading] = useState(false);
  const [newAdmin, setNewAdmin] = useState({});
  const token = localStorage.getItem("token");



  const handlePayment = async () => {
    try {
      setLoading(true);
      const endpoint = `${LOCAL_URL}/admin/assign_role`;
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const body = {
        email: email,
        role: role,
        password: password
      };
      const response = await makeCall(endpoint, body, headers, "post");

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
      setNewAdmin(response?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
      <div
        className={`${
          !addAdminModal ? "hidden" : "flex"
        } md:fixed absolute w-full  justify-center items-center h-full left-0 top-0 z-50 bg-black/70 `}
      >
        <div className="h-auto flex flex-col justify-center items-center w-1/3 sm:w-full md:mx-2 bg-white relative p-5 rounded-md">
          <svg
            onClick={() => setaddAdminModal(!true)}
            className="w-3 h-3 absolute right-8 top-6 cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 14 14"
          >
            <path
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          { 
            Object.keys(newAdmin).length === 0?
            <>
              <h3 className="font-ui-semi font-semibold text-[24px] mt-5 text-[#0D0033] mb-2 text-center sm:text-[20px]">
                Create Admin
              </h3>
              <p className="text-[#555555] text-center">
                Enter user's email and choose role to add admin on. Admins can later be removed or roles changed
              </p>
              <div className="bg-[#FFF] border rounded-md p-2 px-3 flex w-[100%] mt-5">
                <input
                  type="text"
                  className="bg-transparent outline-none text-sm px-2 py-2 w-full text-[#323232]"
                  placeholder="Add Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="bg-[#FFF] border rounded-md p-2 px-3 flex w-[100%] mt-5 relative">
                <input
                  type="text"
                  value={role}
                  className="bg-transparent outline-none text-sm px-2 py-2 w-full text-[#323232] cursor-pointer font-medium"
                  placeholder="Add Role"
                  onClick={() => setPickRole(!pickRole)}
                />
                {pickRole && (
                  <div className="absolute top-[293%] left-[50%] overflow-y-auto h-32 shadow-lg translate-x-[-50%] translate-y-[-50%] bg-white flex flex-col gap-2 w-[100%] text-[#323232] text-xs font-normal p-3">
                    <div
                      className="hover:bg-[#888888] p-4 rounded cursor-pointer"
                      onClick={() => {
                        setRole("Super Admin");
                        setPickRole(false);
                      }}
                    >
                      Super Admin
                    </div>
                    <div
                      className="hover:bg-[#888888] p-4 rounded cursor-pointer"
                      onClick={() => {
                        setRole("Admin");
                        setPickRole(false);
                      }}
                    >
                      Admin
                    </div>
                    <div
                      className="hover:bg-[#888888] p-4 rounded cursor-pointer"
                      onClick={() => {
                        setRole("Marketer");
                        setPickRole(false);
                      }}
                    >
                      Marketer
                    </div>
                    <div
                      className="hover:bg-[#888888] p-4 rounded cursor-pointer"
                      onClick={() => {
                        setRole("Moderator");
                        setPickRole(false);
                      }}
                    >
                      Moderator
                    </div>
                    <div
                      className="hover:bg-[#888888] p-4 rounded cursor-pointer"
                      onClick={() => {
                        setRole("Editor");
                        setPickRole(false);
                      }}
                    >
                      Editor
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-[#FFF] border rounded-md p-2 px-3 flex w-[100%] mt-5">
                <input
                  type="text"
                  className="bg-transparent outline-none text-sm px-2 py-2 w-full text-[#323232]"
                  placeholder="Add Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>    

              <button
                onClick={handlePayment}
                className="bg-primary px-[64px] sm:px-[0px] py-3 mt-4  w-1/2 sm:w-full font-ui-semi text-[16px] text-[#ffffff] rounded-[200000px]"
              >
                { !loading ? "Add" : "Loading..."}
              </button>         
            </>
            :
            <div className="flex flex-col items-center justify-center gap-5 text-[#323232] mt-5 w-[100%]">
               <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">Admin Created</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="#22bb33"
                      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Z"
                      class="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      fill="#22bb33"
                      d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42Z"
                      class="clr-i-outline clr-i-outline-path-2"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>  
               </div>
               {/* <small className="text-[#323232]">Details below</small> */}
               <div className="flex flex-col items-center justify-center gap-3 mt-3 w-full">
                <div className="flex justify-between items-center w-full">
                  <span>Email:</span>
                  <span>{newAdmin.email}</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span>Role:</span>
                  <span>{newAdmin.role}</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span>Password:</span>
                  <span>{password}</span>
                </div>
               </div>
            </div>
          }


        </div>
      </div>
  );
}
