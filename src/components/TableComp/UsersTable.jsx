/** @format */

import { useContext, useState } from "react";
import {
  TxDownload,
  TxReedem,
  TxiconIn,
  TxiconOut,
  Txstatus,
} from "../Dashboard/Transactioncomp/Txcomp";
import { RedeemIcon, WithdrawIcon } from "../icons/Icons";
import axios from "axios";
import { useEffect } from "react";
import { ShopContext } from "../../utils/contextShop";
import { LOCAL_URL, formatDate, usersData } from "../../utils/constants";
import Moredetails from "./Moredetails";
import { FilterResult } from "../Filter/Filtercomps";
import { makeCall } from "../../utils/makeCall";

function UsersTable() {
  const [data, setData] = useState([]);
  // const [moreDetails, setMoreDetails] = useState(false);
  // const [detailIndex, setDetailIndex] = useState();

  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    pagination,
    setPagination,
    currentPage,
    setCurrentPage,
    selectedUser,
    setSelectedUser,
    openDetails,
    moreDetails,
    detailIndex,
    hasActiveFilters,
  } = useContext(ShopContext);

  const token = localStorage.getItem("token");

  console.log("Interesting");
  const getUsers = async () => {
    console.log("calling aaay");
    try {
      // Replace with your actual bearer token
      const url = `${LOCAL_URL}/user/get_users?page=${currentPage}`;
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const response = await makeCall(url, {}, headers, "get");

      if (response.status) {
        // const data = await response.json();
        console.log(
          response,
          "Admin info wrapped up in a nice little package."
        );
        setData(response.data);
        setPagination(response.data.pagination);
      } else {
        if (response.data.message === "invalid token") setTokenActive(false);

        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.data.message);
        return;
      }
    } catch (error) {
      setNotify(true);
      setNotifyType("error");
      setNotifymsg(error);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const NumSelectPage = (page) => {
    setCurrentPage(page);
  };

  // const openDetails = (item, index) => {
  //   if (!moreDetails) {
  //     setDetailIndex(0);
  //   }
  //   setDetailIndex(index);
  //   setMoreDetails(!moreDetails);
  // };

  useEffect(() => {
    getUsers();
    console.log(data);
    // setData(usersData);
  }, [currentPage]);

  return (
    <div className="relative">
      <div
        className={`m-5 border rounded-2xl ${
          data ? "h-auto" : "h-96"
        } bg-white px-4 md:px-0 py-2`}
      >
        {data?.length !== 0 ? (
          <div className="relative  overflow-x-auto pt-4 md:pt-0 sm:rounded-lg h-auto ">
            <table className="max-w-[none] w-full text-sm text-left rtl:text-right text-[#555] ">
              <thead
                className="text-xs text-[#555555] uppercase table-auto"
                style={{ verticalAlign: "middle" }}
              >
                <tr>
                  <th scope="col" className="px-5 py-3 xs:hidden">
                    USER
                  </th>
                  <th scope="col" className="px-6 py-3">
                    EMAIL
                  </th>
                  <th scope="col" className="px-6 py-3 md:hidden">
                    PAYMENTS GENERATED
                  </th>
                  <th scope="col" className="px-6 py-3 lg:hidden">
                    LAST LOGIN
                  </th>
                  <th scope="col" className="px-6 py-3 sm:hidden">
                    GENDER
                  </th>
                </tr>
              </thead>
              <tbody>
                {hasActiveFilters ? (
                  <FilterResult type="user" data={data} />
                ) : (
                  data?.map((item, idx) => (
                    <tr className="bg-white border-b relative" key={idx}>
                      <td
                        scope="row"
                        className="font-medium pl-2 text-[#555] xs:hidden"
                      >
                        {/* {item.type === "Payment" ? <TxiconIn /> : <TxiconOut />} */}
                        <div className="flex justify-start items-start gap-1">
                          <div className="rounded-[100%] flex justify-center items-center bg-[#a23eff33] p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="#a23eff"
                                d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675zM4 20v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
                              />
                            </svg>
                          </div>

                          <div className="flex flex-col justify-start gap-1">
                            <div className="font-semibold text-md">
                              {item.username}
                            </div>
                            <div className="font-normal text-xs">
                              {formatDate(item.createdAt)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-4 py-4 font-medium text-[#555]"
                      >
                        {/* {item.type} */}
                        {item.email}
                      </th>
                      <td className="px-6 py-4">
                        {/* {item.track_id} */}
                        <div className="flex flex-col text-xs md:hidden">
                          {item.paymentLink.length}
                        </div>
                      </td>
                      <td className="px-6 py-4 lg:hidden">
                        {/* <Txstatus
                        status={
                          item.type === "Payment"
                            ? item.payment.status
                            : item.withdrawal.status
                        }
                      /> */}
                        {formatDate(item.updatedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap sm:hidden">
                        {/* {formatDate(item.createdAt)} */}
                        {item.gender}
                      </td>
                      <td className="px-6 py-4 ">
                        {item.isActive ? (
                          <div className="font-semibold text-xs text-[#22bb33]">
                            Active
                          </div>
                        ) : (
                          <div className="font-semibold text-xs text-[#FF3E3E]">
                            Inactive
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 relative">
                        {/* <div
                          className="p-1 rounded bg-[#555] flex justify-center items-center cursor-pointer"
                          onClick={() => openDetails(item, idx)}
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
                        </div> */}

                        <Moredetails
                          type="user"
                          first={true}
                          item={item}
                          setSelectedUser={setSelectedUser}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex justify-center flex-col mt-20 items-center ">
            <img src="./empty.svg" className="w-28 h-28" alt="" />
            <p className="font-semibold text-xs text-black">
              You have no transactions
            </p>
            <p className="font-normal text-xs text-gray-600">
              Your payments would show up here after you have made a successful
              transaction
            </p>
          </div>
        )}
      </div>
      <nav className="absolute right-8">
        <ul className="inline-flex -space-x-px text-sm">
          {currentPage > 1 && (
            <li onClick={prevPage}>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-[#6E3EFF] rounded-md"
              >
                Previous
              </a>
            </li>
          )}

          <PageNum
            NumSelectPage={NumSelectPage}
            current={currentPage + 1}
            total={data?.length / 6} // total pages
          />

          {data?.length > currentPage * 6 && (
            <li onClick={nextPage}>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight bg-[#6E3EFF] rounded-md "
              >
                Next
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default UsersTable;

export function PageNum({ current, total, NumSelectPage }) {
  if (total > 3) {
    return (
      <li>
        <a
          onClick={(e) => NumSelectPage(e.target.value)}
          className="flex items-center justify-center px-3 h-8 leading-tight bg-white text-black"
        >
          {current}...{total}
        </a>
      </li>
    );
  }

  return <a className="flex px-3 h-8">{current}</a>;
}
