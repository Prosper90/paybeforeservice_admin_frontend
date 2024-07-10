import React, { useContext } from "react";
import { ShopContext } from "../../utils/contextShop";

export default function RenderAdminAction() {
  const {
    selectedUser,
    setSelectedUser,
    selectedAdminAction,
    setSelectedAdminAction,
  } = useContext(ShopContext);

  return (
    <ul className="whitespace-nowrap">
      <li
        onClick={() => setSelectedAdminAction("editadmin")}
        className="flex items-center gap-2 hover:text-[#6E3EFF] cursor-pointer font-semibold"
      >
        <span>Edit User</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 20 20"
        >
          <path
            fill="#888888"
            d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10m9.8 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
          />
        </svg>
      </li>
      <li
        onClick={() => setSelectedAdminAction("adminactivities")}
        className="flex items-center gap-2 hover:text-[#6E3EFF] cursor-pointer font-semibold"
      >
        <span>User Activities</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 20 20"
        >
          <path
            fill="#888888"
            d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10m9.8 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
          />
        </svg>
      </li>
      <li
        onClick={() => setSelectedAdminAction("suspendban")}
        className="flex items-center gap-2 hover:text-[#6E3EFF] cursor-pointer font-semibold"
      >
        <span>Suspend/Ban</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20m6.31-3.1L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8a7.92 7.92 0 0 1-1.69 4.9"
          />
        </svg>
      </li>
      {/* <li
      onClick={() => setSelectedAdminAction("roles")}  
      className="flex items-center gap-2 hover:text-[#6E3EFF] cursor-pointer font-semibold">
      <span>View/Manage Roles</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        viewBox="0 0 24 24"
      >
        <path
          fill="#888888"
          d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
        />
      </svg>
    </li> */}
      <li
        onClick={() => setSelectedAdminAction("resetpassword")}
        className="flex items-center gap-2 hover:text-[#6E3EFF] cursor-pointer font-semibold"
      >
        <span>Reset Password</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
          />
        </svg>
      </li>
      <li
        onClick={() => setSelectedAdminAction("notification")}
        className="flex items-center gap-2 hover:text-[#6E3EFF] cursor-pointer font-semibold"
      >
        <span>Send Notification</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
          />
        </svg>
      </li>
      <li className="flex items-center gap-2 hover:text-[#6E3EFF] cursor-pointer font-semibold">
        <span>Export User's Data</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
          />
        </svg>
      </li>
    </ul>
  );
}
