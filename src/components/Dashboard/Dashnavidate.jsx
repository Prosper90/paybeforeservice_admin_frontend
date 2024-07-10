/* eslint-disable react/prop-types */
/** @format */

import { useEffect, useRef } from "react";
import Userheader from "./Userheader";
import { Link, useNavigate } from "react-router-dom";

export default function Dashnavidate({ username, setOpenMenu }) {
  const navigate = useNavigate();

  const active = window.location.href;
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  const menuRef = useRef(null);

  useEffect(() => {
    
  }, [active]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="md:bg-[#FFF] md:shadow-2xl bg-[#F7F7F7]  flex md:flex-row 2xl:flex-col gap-5 border-[#DADADA] border-r md:w-[100%] h-[100vh] 2xl:p-4 md:p-0">
      {/* Top */}
      <div className="md:hidden 2xl:block">
        <Userheader username={username} />
      </div>

      {/* Bottom */}
      <div ref={menuRef} className="p-5 flex flex-col gap-5 pl-7 md:pl-2 md:mt-5 w-full ">
        {/* Items */}
        {/* Home */}
        <Link
          to="/dashboard"
          className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] rounded-[10px] hover:text-[#6E3EFF] ${
            active.includes("dashboard")
              ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14 w-[90%]"
              : "text-[#555]"
          } `}
        >
          <i>
            <img src="/image/home.svg" alt="" />
          </i>
          <div className="font-[500]">Home</div>
        </Link>

        {/* Users */}
        <Link
          to="/users"
          className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
            active.includes("users")
              ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14 w-[90%]"
              : "text-[#555]"
          } `}
        >
          <i>
            <img src="/image/referrals.svg" alt="" />
          </i>
          <div className="font-[400]">Users</div>
        </Link>

        {/* Transactions */}
        <Link
          to="/transactions"
          className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
            active.includes("transactions")
              ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14 w-[90%]"
              : "text-[#555]"
          } `}
        >
          <i>
            <img src="/image/tx.svg" alt="" />
          </i>
          <div className="font-[400]">Transactions</div>
        </Link>

        {/* Server */}
        <Link
          to="/servers"
          className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
            active.includes("servers")
              ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14 w-[90%]"
              : "text-[#555]"
          } `}
        >
          <i>
            <img src="/image/server.svg" alt="" />
          </i>
          <div className="font-[400]">Servers</div>
        </Link>

        {/* Admins */}
        <Link
          to="/admins"
          className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
            active.includes("admins")
              ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14 w-[90%]"
              : "text-[#555]"
          } `}
        >
          <i>
            <img src="/image/profile.svg" alt="" />
          </i>
          <div className="font-[400]">Admin & Roles</div>
        </Link>

        {/* Disputes */}
        <Link
          to="/disputes"
          className={`flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
            active.includes("disputes")
              ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14 w-[90%]"
              : "text-[#555]"
          } `}
        >
          <i>
            <img src="/image/contact.svg" alt="" />
          </i>
          <div className="font-[400]">Tickets</div>
        </Link>

        {/* Logout */}
        <button
          onClick={() => logout()}
          className={`md:hidden 2xl:flex items-center p-4 gap-3 cursor-pointer hover:bg-[#6e3eff1a] hover:rounded-[10px] hover:text-[#6E3EFF] ${
            active.includes() == "logout"
              ? "bg-[#6e3eff1a] rounded-[10px] text-[#6E3EFF] h-14 w-[90%]"
              : "text-[#555]"
          } `}
        >
          <i>
            <img src="/image/logout.svg" alt="" />
          </i>
          <div className="font-[400]">Logout</div>
        </button>
      </div>

      <svg
          className="w-4 h-4 absolute right-[-95%] top-10 cursor-pointer hidden"
          onClick={() => setOpenMenu(false)}
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
  );
}
