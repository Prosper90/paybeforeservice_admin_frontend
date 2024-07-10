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
import { LOCAL_URL, Transactions } from "../../utils/constants";
import Moredetails from "./Moredetails";
import { FilterResult } from "../Filter/Filtercomps";
import { makeCall } from "../../utils/makeCall";

function TransTable() {
  const [data, setData] = useState([]);
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
    selectedTx,
    setSelectedTx,
    openDetails,
    moreDetails,
    detailIndex,
    hasActiveFilters,
  } = useContext(ShopContext);

  const token = localStorage.getItem("token");
  const getTransaction = async () => {
    console.log("calling aaay");
    try {
      // Replace with your actual bearer token
      const url = `${LOCAL_URL}/transaction/getAllTx?page=${currentPage}`;
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

  useEffect(() => {
    getTransaction();
    // setData(Transactions);
  }, [currentPage]);
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
                    Transactions
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Transaction ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time/Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {hasActiveFilters ? (
                  <FilterResult type="transaction" data={data} />
                ) : (
                  data?.map((item, idx) => (
                    <tr className="bg-white border-b relative" key={idx}>
                      <th
                        scope="row"
                        className="flex items-center gap-2 px-4 py-4 font-bold text-gray-900"
                      >
                        <div scope="row" className="font-medium  text-gray-900">
                          {item.type === "Payment" ? (
                            <TxiconIn />
                          ) : (
                            <TxiconOut />
                          )}
                        </div>
                        {item.type}
                      </th>
                      <td className="px-6 py-4">{item.track_id}</td>
                      <td className="px-6 py-4">
                        <Txstatus status={item.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {formatDate(item.createdAt)}
                      </td>
                      <td className="px-6 py-4 ">
                        ₦
                        {item.type === "Payment"
                          ? item.payment.amount
                          : item.withdrawal.amount}
                      </td>

                      <td className="px-6 py-4 relative">
                        <Moredetails
                          type="transaction"
                          first={true}
                          item={item}
                          setSelectedTx={setSelectedTx}
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

export default TransTable;

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
