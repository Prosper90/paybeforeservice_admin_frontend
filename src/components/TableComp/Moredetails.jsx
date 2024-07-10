import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../utils/contextShop";
import RenderUserAction from "../Actions/RenderUserAction";
import RenderDisputeAction from "../Actions/RenderDisputeAction";
import RenderTransactionAction from "../Actions/RenderTransactionAction";
import RenderAdminAction from "../Actions/RenderAdminAction";

export default function Moredetails({
  type,
  item,
  first,
  setSelectedUser,
  setSelectedTx,
  setSelectedDispute,
  setSelectedAdmin,
}) {
  const { setMoreDetails, openDetails } = useContext(ShopContext);
  const [ renderType, setRenderType ] = useState("");
  
  const action = () => {
    console.log("accccccction called");
    if (type === "user") {
      setSelectedUser(item);
      setRenderType("user");
    } else if (type === "transaction") {
      setSelectedTx(item);
      setRenderType("transaction");
    } else if (type === "dispute") {
      console.log("I am a bit lost sha");
      setSelectedDispute(item);
      setRenderType("dispute");
    } else {
      setSelectedAdmin(item);
      setRenderType("admin");
    }
    setMoreDetails(false);
  };


  const typeInfo = () => {
    console.log("typeinfo called", renderType);
    switch (renderType) {
      case "user":
        return <RenderUserAction />;

      case "dispute":
        console.log("I have caught you, dont run");
        return <RenderDisputeAction />;

      case "transaction":
        console.log(renderType, "rendertype");
        return <RenderTransactionAction />;

      case "admin":
        return <RenderAdminAction />;

      default:
        break;
    }
  };

  useEffect(() => {
    console.log(renderType, type, "typings");
    setRenderType(type);
  }, [renderType])
  

  return (
    <>
    {
      first ?
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            viewBox="0 0 20 20"
            onClick={() => action()}
            className="cursor-pointer"
          >
            <path
              fill="#888888"
              d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10m9.8 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
            />
          </svg>
      :
      <div
        className="top-21 left-auto transform translate-x-0 absolute bg-[#fff] shadow rounded z-[9999] p-3"
        style={{ right: "calc(100% + 10px)" }}
      >
       {typeInfo()}
    </div>
    }
    </>
  );
}
