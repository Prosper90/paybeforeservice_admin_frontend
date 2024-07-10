/** @format */
import { useEffect, useState, useContext } from "react";
import RedeemModal from "../../components/Modals/RedeemModal";
import DisputeTable from "../../components/TableComp/DisputeTable";
import { FilterIcon, SearchIcon } from "../../components/icons/Icons";
import { ShopContext } from "../../utils/contextShop";
import Disputesdetails from "../../components/Disputes/Disputesdetails";
import { SearchTopFilter } from "../../components/Filter/Filtercomps";

export default function Disputes() {
  const { redeemObj, setRedeemObj, selectedDispute, setSelectedDispute } =
    useContext(ShopContext);

  useEffect(() => {
    console.log(selectedDispute, "checkoooooo");
  }, [selectedDispute]);

  return (
    <>
      {/* {redeemObj.open && (
        <RedeemModal redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
      )} */}
      {Object.keys(selectedDispute).length === 0 ? (
        <div className="pb-28">
          <div className="flex justify-between md:grid md:gap-3 p-5 mt-6 ">
            <h1 className="text-black">Disputes</h1>
            <SearchTopFilter />
          </div>

          <DisputeTable redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
        </div>
      ) : (
        <Disputesdetails
          selectedDispute={selectedDispute}
          setSelectedDispute={setSelectedDispute}
        />
      )}
    </>
  );
}
