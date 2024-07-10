/** @format */
import { useEffect, useState, useContext } from "react";
import RedeemModal from "../../components/Modals/RedeemModal";
import TransTable from "../../components/TableComp/TransTable";
import { FilterIcon, SearchIcon } from "../../components/icons/Icons";
import { ShopContext } from "../../utils/contextShop";
import Transactiondetails from "../../components/Transactions/Transactiondetails";
import { SearchTopFilter } from "../../components/Filter/Filtercomps";

export default function Transactions() {
  const { redeemObj, setRedeemObj, selectedTx, setSelectedTx } =
    useContext(ShopContext);

  return (
    <>
      {/* {redeemObj.open && (
        <RedeemModal redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
      )} */}
      {Object.keys(selectedTx).length === 0 ? (
        <div className="pb-28">
          <div className="flex justify-between md:grid md:gap-3 p-5 mt-6 ">
            <h1 className="text-black">Transactions</h1>
            <SearchTopFilter />
          </div>

          <TransTable redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
        </div>
      ) : (
        <Transactiondetails
          selectedTx={selectedTx}
          setSelectedTx={setSelectedTx}
        />
      )}
    </>
  );
}
