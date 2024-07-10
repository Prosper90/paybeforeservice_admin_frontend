import { useContext, useMemo } from "react";
import { ShopContext } from "../../utils/contextShop";
import Moredetails from "../TableComp/Moredetails";
import { formatDate } from "../../utils/constants";
import { FilterIcon, SearchIcon } from "../icons/Icons";
import {
  Resolve,
  TxDownload,
  TxReedem,
  TxiconIn,
  TxiconOut,
  Txstatus,
} from "../Dashboard/Transactioncomp/Txcomp";

export const SearchTopFilter = () => {
  const { filters, setFilters } = useContext(ShopContext);

  function handleSearchChange(event) {
    console.log("calling ooooooooo");
    setFilters((prevFilters) => ({
      ...prevFilters,
      search: event.target.value,
    }));
  }

  function handleDateFromChange(event) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      dateFrom: event.target.value,
    }));
  }

  function handleDateToChange(event) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      dateTo: event.target.value,
    }));
  }

  return (
    <div className="flex items-center md:grid gap-4 md:gap-3 ">
      <div className="bg-[#FFF] border items-center md:w-[85%] rounded-md p-2 px-3 flex">
        <input
          type="search"
          placeholder="Search"
          value={filters.search}
          onChange={handleSearchChange}
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
            value={filters.dateFrom}
            onChange={handleDateFromChange}
            className="bg-transparent outline-none text-xs px-2 w-full  text-[#707070]"
          />
          {/* <label htmlFor="date">
      <DateIcon/>
     </label> */}
        </div>
        <div className="bg-[#FFF] border rounded-md p-2 px-3 flex md:w-[30%]">
          <input
            type="date"
            value={filters.dateTo}
            onChange={handleDateToChange}
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
  );
};

export const FilterResult = ({ type, data }) => {
  const { filters, openDetails, moreDetails, detailIndex } =
    useContext(ShopContext);

  const filteredData = useMemo(() => {
    try {
      return data.filter((row) => {
        console.log("they are calling me ooooo");
        const searchTerm = filters.search.toLowerCase();

        const matchesSearch =
          //for user
          row._id?.toLowerCase().includes(searchTerm) ||
          row.email?.toLowerCase().includes(searchTerm) ||
          row.gender?.toLowerCase().includes(searchTerm) ||
          row.pin?.toString().toLowerCase().includes(searchTerm) ||
          row?.userRederralID?.toString().toLowerCase().includes(searchTerm) ||
          row?.username?.toLowerCase().includes(searchTerm) ||
          //for transaction
          row.type?.toLowerCase().includes(searchTerm) ||
          row.track_id?.toString().toLowerCase().includes(searchTerm) ||
          row.payment?.linkID.toString().toLowerCase().includes(searchTerm) ||
          row.payment?.amount_created.toString().includes(searchTerm) ||
          row.payment?.amount_paid.toString().includes(searchTerm) ||
          row.withdrawal?.amount.toString().includes(searchTerm) ||
          //for disputes
          row.dispute_id?.toString().includes(searchTerm) ||
          row.payment_status?.toString().includes(searchTerm) ||
          row.amount?.toString().includes(searchTerm) ||
          row.sender?.toString().includes(searchTerm) ||
          row.reciever?.toString().includes(searchTerm) ||
          row.reason?.toString().includes(searchTerm) ||
          row.payment_status?.toString().includes(searchTerm) ||
          //for admins
          row.role?.toString().includes(searchTerm) ||
          row.role?.toString().includes(searchTerm);

        if (filters.search && !matchesSearch) {
          return false;
        }

        const isAfterDate =
          !filters.dateFrom ||
          new Date(row.createdAt) >= new Date(filters.dateFrom);

        if (filters.dateFrom && !isAfterDate) {
          return false;
        }

        return true;
      });
    } catch (error) {
      console.log(error);
    }
  }, [filters, data]);

  return (
    <>
      {filteredData?.map((item, idx) =>
        type === "user" ? (
          <tr className="bg-white border-b relative" key={idx}>
            <td scope="row" className="font-medium pl-2 text-[#555] xs:hidden">
              {/* {item.type === "Payment" ? <TxiconIn /> : <TxiconOut />} */}
              <div className="flex flex-col justify-start gap-1">
                <div className="font-semibold text-md">{item.username}</div>
                <div className="font-normal text-xs">
                  {formatDate(item.createdAt)}
                </div>
              </div>
            </td>
            <th scope="row" className="px-4 py-4 font-medium text-[#555]">
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
              <div
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
              </div>

              {moreDetails && detailIndex === idx && (
                <Moredetails
                  type="user"
                  item={item}
                  setSelectedUser={setSelectedUser}
                />
              )}
            </td>
          </tr>
        ) : type === "transaction" ? (
          <tr className="bg-white border-b relative" key={idx}>
            <th
              scope="row"
              className="flex items-center gap-2 px-4 py-4 font-bold text-gray-900"
            >
              <div scope="row" className="font-medium  text-gray-900">
                {item.type === "Payment" ? <TxiconIn /> : <TxiconOut />}
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
              <div
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
              </div>

              {moreDetails && detailIndex === idx && (
                <Moredetails
                  type="transaction"
                  item={item}
                  setSelectedTx={setSelectedTx}
                />
              )}
            </td>
          </tr>
        ) : type === "dispute" ? (
          <tr className="bg-white border-b relative" key={idx}>
            <th
              scope="row"
              className="flex items-center gap-2 px-4 py-4 font-bold text-gray-900"
            >
              <div scope="row" className="font-medium  text-gray-900">
                {item.type === "transaction" ? <TxiconIn /> : <TxiconOut />}
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
            <td className="px-6 py-4 ">₦{item.email}</td>
            <td className="px-6 py-4 ">
              {/* <TxReedem item={item} setRedeemObj={setRedeemObj} /> */}
              {item.type === "Payment" && <Resolve id={item._id} />}
            </td>
            <td className="px-6 py-4 relative">
              <div
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
              </div>

              {moreDetails && detailIndex === idx && (
                <Moredetails
                  type="dispute"
                  item={item}
                  setSelectedDispute={setSelectedDispute}
                />
              )}
            </td>
          </tr>
        ) : (
          <tr className="bg-white border-b relative" key={idx}>
            <td scope="row" className="font-medium pl-2 text-[#555] xs:hidden">
              {/* {item.type === "Payment" ? <TxiconIn /> : <TxiconOut />} */}
              <div className="flex flex-col justify-start gap-1">
                <div className="font-semibold text-md">{item.username}</div>
                <div className="font-normal text-xs">
                  {formatDate(item.createdAt)}
                </div>
              </div>
            </td>
            <th scope="row" className="px-4 py-4 font-medium text-[#555]">
              {/* {item.type} */}
              {item.email}
            </th>
            <td className="px-6 py-4">
              {/* {item.track_id} */}
              {item.paymentLink && (
                <div className="flex flex-col text-xs md:hidden">
                  {item.paymentLink.length}
                </div>
              )}
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
              <div
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
              </div>

              {moreDetails && detailIndex === idx && (
                <Moredetails
                  type="admin"
                  item={item}
                  setSelectedAdmin={setSelectedAdmin}
                />
              )}
            </td>
          </tr>
        )
      )}
    </>
  );
};
