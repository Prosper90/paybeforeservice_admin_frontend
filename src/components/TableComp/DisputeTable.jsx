/** @format */

import { useContext, useState } from "react";
import {
  TxDownload,
  TxReedem,
  Resolve,
  TxiconIn,
  TxiconOut,
  Txstatus,
} from "../Dashboard/Transactioncomp/Txcomp";
import { RedeemIcon, WithdrawIcon } from "../icons/Icons";
import axios from "axios";
import { useEffect } from "react";
import { ShopContext } from "../../utils/contextShop";
import { Disputes, LOCAL_URL } from "../../utils/constants";
import Moredetails from "./Moredetails";
import { FilterResult } from "../Filter/Filtercomps";
import { makeCall } from "../../utils/makeCall";

function DisputeTable({ redeemObj, setRedeemObj }) {
  const [data, setData] = useState(null);
  // const [moreDetails, setMoreDetails] = useState(false);
  // const [detailIndex, setDetailIndex] = useState();

  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    paymentModal,
    successRedeem,
    pagination,
    setPagination,
    currentPage,
    setCurrentPage,
    selectedDispute,
    setSelectedDispute,
    openDetails,
    moreDetails,
    detailIndex,
    hasActiveFilters,
  } = useContext(ShopContext);

  const token = localStorage.getItem("token");
  const getDisputes = async () => {
    console.log("calling aaay");
      try {
        // Replace with your actual bearer token
        const url = `${LOCAL_URL}/dispute/get_all_disputes?page=${currentPage}`;
        const headers = {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
        }
        const response = await makeCall(url, {}, headers, "get");
  
        if (response.status) {
          // const data = await response.json();
          console.log(response, "Admin info wrapped up in a nice little package.");
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
        console.log(error, "error in there");
        setNotify(true);
        setNotifyType("error");
        setNotifymsg("something went wrong");
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
    getDisputes();
    // setData(Disputes);
  }, [paymentModal, successRedeem, currentPage]);
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      // minute: '2-digit',
      // second: '2-digit',
      // timeZoneName: 'short',
    };
    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };
  return (
    <div className="relative">
      <div
        className={`m-5 border rounded-2xl ${
          data ? "h-auto" : "h-96"
        } bg-white px-4 md:px-0 py-2`}
      >
        {data?.length !== 0 ? (
          <div className="relative  overflow-x-auto pt-4 md:pt-0 sm:rounded-lg h-auto ">
            <table className="max-w-[none] w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead
                className="text-xs text-[#555] uppercase table-auto"
                style={{ verticalAlign: "middle" }}
              >
                <tr>
                  <th scope="col" className="px-5 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Dispute ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time/Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Issuer
                  </th>
                </tr>
              </thead>
              <tbody>
                {hasActiveFilters ? (
                  <FilterResult type="dispute" data={data} />
                ) : (
                  data?.map((item, idx) => (
                    <tr className="bg-white border-b relative" key={idx}>
                      <th
                        scope="row"
                        className="flex items-center gap-2 px-4 py-4 font-bold text-gray-900"
                      >
                        <div scope="row" className="font-medium  text-gray-900">
                          {item.type === "transaction" ? (
                            <TxiconIn />
                          ) : (
                            <TxiconOut />
                          )}
                        </div>
                        {item.type}
                      </th>
                      <td className="px-6 py-4">{item.dispute_id}</td>
                      <td className="px-6 py-4">
                        <Txstatus status={item.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {formatDate(item.createdAt)}
                      </td>
                      <td className="px-6 py-4 ">{item.owner}</td>
                      <td className="px-6 py-4 ">
                        {/* <TxReedem item={item} setRedeemObj={setRedeemObj} /> */}
                        {item.type === "Payment" && <Resolve id={item._id} />}
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
                            type="dispute"
                            first={true}
                            item={item}
                            setSelectedDispute={setSelectedDispute}
                          />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* mobile view table */}
            {/* <div className="hidden sm:block">
              {data?.map((item, idx) => (
                <div
                  className=" justify-between  items-center w-full py-3  flex"
                  key={idx}
                >
                  <div className="flex justify-between items-center md:mr-8">
                    <div className="rounded-[100%] bg-[#a23eff33] p-2">
                      <RedeemIcon />
                    </div>
                    <div className="text-[#555] ">
                      <div className="font-semibold text-xs ml-2 text-[#0D0033]">
                        {item.type}
                      </div>
                      <div className="text-[#0D0033] text-xs ml-2 font-bold">
                        ₦
                        {item.type === "Payment"
                          ? item.payment.amount
                          : item.withdrawal.amount}
                      </div>
                      <div className="font-meduim  ml-2 text-xs">
                        {formatDate(item.createdAt)}
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-[#A23EFF] text-white px-3 text-xs py-2 rounded-[20px]"
                    // onClick={() =>
                    //   setRedeemObj({
                    //     open: true,
                    //     data: item,
                    //   })
                    // }
                  >
                    {item.type === "Payment" && !item.payment.isRedeemed ? (
                      <TxReedem item={item} setRedeemObj={setRedeemObj} />
                    ) : (
                      <TxDownload id={item._id} />
                    )}
                  </div>
                </div>
              ))}
            </div> */}
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

export default DisputeTable;

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
