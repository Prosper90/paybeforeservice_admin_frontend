/** @format */

import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

// ICONS
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const [hideMenu, setHideMenu] = useState(true);
  const handleHideModal = () => {
    setHideMenu(!hideMenu);
  };

  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/signup" && (
        <nav
          className={`py-[35px] px-[60px] sm:px-[20px] sm:py-0 w-full bg-base ${
            !hideMenu ? "sm:fixed sm:left-0 sm:z-50 sm:h-screen" : null
          } flex items-center justify-between gap-[97px] sm:gap-[0px]`}
        >
          <div className="self-start sm:border-b-ui-border border-border sm:px-5 sm:fixed sm:left-0 sm:z-50 sm:top-0 sm:h-[10vh] sm:bg-white sm:flex sm:justify-between items-center sm:w-full">
            <h5 className="text-[28px] sm:text-[20px] font-ui-bold text-primary">
              SwiftSettle
            </h5>
          </div>
          {/* mobile  navigation*/}
          <div
            className={`fixed hidden top-[10vh] left-0 h-screen ${
              hideMenu ? "translate-x-[-100%]" : "translate-x-0"
            } sm:flex flex-col bg-white px-5 py-5 sm:h-full sm:w-[100vw] transform transition-transform ease-in-out duration-300 z-40 lg:w-full`}
          >
            <div
              to="#"
              className=" bg-primary py-[15px] text-center rounded-[5px] w-full text-white"
            >
              Admin
            </div>
          </div>
        </nav>
      )}
      <Outlet />
    </>
  );
};

export default Navigation;
