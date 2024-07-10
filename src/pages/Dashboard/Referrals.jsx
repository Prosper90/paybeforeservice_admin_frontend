/** @format */

import { useContext } from "react";
import Reftable from "../../components/Dashboard/Refcomp/Reftable";
import TransTable from "../../components/TableComp/TransTable";
import { FilterIcon, SearchIcon } from "../../components/icons/Icons";
import { ShopContext } from "../../utils/contextShop";

export default function Referrals() {
  const { profileData } = useContext(ShopContext);
  return (
    <div className="h-auto pb-24">
      <div className="w-2/6 md:w-4/5 m-4 mt-8 border  px-3 md:py-6 2xl:py-8 flex justify-center items-center bg-[#FFF] rounded-[16px] relative z-40 overflow-hidden">
        <div className="flex justify-between items-center w-full px-5">
          {/* Info */}
          <div className="">
            <div className="text-[#0D0033] font-normal text-sm ">
              Referral Balance
            </div>
            <div className="text-[#0D0033] font-bold text-lg">
              ₦{profileData?.balances?.refferal_wallet?.toFixed(2)}
            </div>
          </div>
          {/* Eye */}
          <div className="text-[#0D0033]">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2899 15.1202L11.9999 13.7802L11.9299 13.7102L10.6599 12.4402C10.4584 12.4755 10.2545 12.4955 10.0499 12.5002C9.58613 12.5068 9.12562 12.4212 8.69519 12.2483C8.26477 12.0753 7.87301 11.8186 7.54269 11.4929C7.21237 11.1672 6.95008 10.7792 6.77107 10.3512C6.59206 9.9233 6.4999 9.46405 6.49995 9.00019C6.50458 8.79563 6.52464 8.59172 6.55995 8.39019L4.55995 6.39019L2.99995 4.87019C1.87127 5.93366 0.904355 7.15662 0.129946 8.50019C0.042178 8.6522 -0.00402832 8.82465 -0.00402832 9.00019C-0.00402832 9.17572 0.042178 9.34817 0.129946 9.50019C0.759946 10.5902 4.12995 16.0002 10.0199 16.0002H10.2699C11.3775 15.9673 12.4707 15.7406 13.4999 15.3302L13.2899 15.1202ZM6.58995 2.76019L9.38995 5.56019C9.59148 5.52488 9.79539 5.50482 9.99995 5.50019C10.9282 5.50019 11.8184 5.86893 12.4748 6.52531C13.1312 7.18169 13.4999 8.07193 13.4999 9.00019C13.4953 9.20474 13.4753 9.40865 13.4399 9.61019L16.1199 12.2902L16.9599 13.1302C18.1028 12.0695 19.0833 10.8464 19.8699 9.50019C19.9577 9.34817 20.0039 9.17572 20.0039 9.00019C20.0039 8.82465 19.9577 8.6522 19.8699 8.50019C19.2299 7.39018 15.7099 1.82019 9.72995 2.00019C8.6224 2.03304 7.52918 2.2598 6.49995 2.67019L6.58995 2.76019ZM18.7099 16.2902L17.4099 15.0002L15.4099 13.0002L5.88995 3.47019L4.41995 2.00019L2.70995 0.290185C2.61671 0.196947 2.50602 0.122986 2.3842 0.0725257C2.26237 0.0220654 2.13181 -0.00390625 1.99995 -0.00390625C1.86809 -0.00390625 1.73752 0.0220654 1.6157 0.0725257C1.49388 0.122986 1.38318 0.196947 1.28995 0.290185C1.10164 0.478489 0.995854 0.733884 0.995854 1.00019C0.995854 1.26649 1.10164 1.52188 1.28995 1.71019L3.52995 4.00019L5.27995 5.70019L12.5899 13.0002L12.6599 13.0702L13.9999 14.4102L14.5899 15.0002L17.2899 17.7102C17.3829 17.8039 17.4935 17.8783 17.6154 17.9291C17.7372 17.9798 17.8679 18.006 17.9999 18.006C18.132 18.006 18.2627 17.9798 18.3845 17.9291C18.5064 17.8783 18.617 17.8039 18.7099 17.7102C18.8037 17.6172 18.8781 17.5066 18.9288 17.3848C18.9796 17.2629 19.0057 17.1322 19.0057 17.0002C19.0057 16.8682 18.9796 16.7375 18.9288 16.6156C18.8781 16.4937 18.8037 16.3831 18.7099 16.2902Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-[-8px] right-[-8px]">
          <svg
            width="83"
            height="49"
            viewBox="0 0 83 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="50.505"
              cy="50.5069"
              rx="50.505"
              ry="50.5069"
              fill="#6E3EFF"
              fillOpacity="0.1"
            />
            <ellipse
              cx="78.6785"
              cy="70.3158"
              rx="60.3278"
              ry="60.33"
              fill="#6E3EFF"
              fillOpacity="0.15"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between md:grid p-5 mt-6">
        <h1 className="text-black">Referrals</h1>
        <div className="flex items-center md:grid gap-4 md:gap-3 ">
          <div className="bg-[#FFF] border items-center md:w-[85%] rounded-md p-2 px-3 flex">
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent outline-none text-sm px-2 w-full  text-[#323232]"
            />
            <label htmlFor="date">
              <SearchIcon />
            </label>
          </div>
          <div className="flex gap-3 ">
            <div className="bg-[#FFF] border rounded-md p-2 px-3 flex md:w-[30%]">
              <input
                type="Date"
                className="bg-transparent outline-none text-xs px-2 w-full  text-[#707070]"
              />
              {/* <label htmlFor="date">
            <DateIcon/>
           </label> */}
            </div>
            <div className="bg-[#FFF] border rounded-md p-2 px-3 flex md:w-[30%]">
              <input
                type="date"
                id="date1"
                className="bg-transparent outline-none text-xs px-2 w-full  text-[#707070]"
              />
              {/* <label htmlFor="date1">
            <DateIcon/>
           </label> */}
            </div>
            <button className="bg-[#6E3EFF] border items-center text-xs justify-center rounded-md p-2 px-3 flex">
              <label htmlFor="date1">
                <FilterIcon />
              </label>
              Filter
            </button>
          </div>
        </div>
      </div>
      <Reftable />
    </div>
  );
}
