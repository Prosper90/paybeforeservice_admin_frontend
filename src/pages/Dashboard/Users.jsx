/** @format */
import { useEffect, useState, useContext } from "react";
import RedeemModal from "../../components/Modals/RedeemModal";
import { FilterIcon, SearchIcon } from "../../components/icons/Icons";
import { ShopContext } from "../../utils/contextShop";
import UsersTable from "../../components/TableComp/UsersTable";
import Userdetails from "../../components/Users/Userdetails";
import { SearchTopFilter } from "../../components/Filter/Filtercomps";

export default function Users() {
  const { 
        selectedUser, 
        setSelectedUser,
      } = useContext(ShopContext);

   console.log("check themselve");
   

  return (
    <>
      {/* {redeemObj.open && (
        <RedeemModal redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
      )} */}
      {Object.keys(selectedUser).length === 0 ? (
        <div className="pb-28">
          <div className="flex justify-between md:grid md:gap-3 p-5 mt-6 ">
            <h1 className="text-black">Users</h1>
            <SearchTopFilter />
          </div>

          <UsersTable />
        </div>
      ) : (
        <Userdetails
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    </>
  );
}
