/** @format */
import { useEffect, useState, useContext } from "react";
import RedeemModal from "../../components/Modals/RedeemModal";
import { FilterIcon, SearchIcon } from "../../components/icons/Icons";
import { ShopContext } from "../../utils/contextShop";
import AdminTable from "../../components/TableComp/AdminTable";
import Admindetails from "../../components/Admins/Admindetails";
import { SearchTopFilter } from "../../components/Filter/Filtercomps";

export default function Admins() {
  const { redeemObj, setRedeemObj, selectedAdmin, setSelectedAdmin } =
    useContext(ShopContext);

  return (
    <>
      {/* {redeemObj.open && (
        <RedeemModal redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
      )} */}
      {Object.keys(selectedAdmin).length === 0 ? (
        <div className="pb-28">
          <div className="flex justify-between md:grid md:gap-3 p-5 mt-6 ">
            <h1 className="text-black">Admins</h1>
            <SearchTopFilter />
          </div>

          <AdminTable redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
        </div>
      ) : (
        <Admindetails
          selectedAdmin={selectedAdmin}
          setSelectedAdmin={setSelectedAdmin}
        />
      )}
    </>
  );
}
