<div className="flex gap-1">
{/* balance main */}
<div className="flex">
  <div className="">Icon</div>
  <div className="">N{selectedUser.balances.main_wallet}</div>
</div>
{/* balance pending */}
<div className="flex">
  <div className="">Icon</div>
  <div className="">N{selectedUser.balances.pending_wallet}</div>
</div>
{/* balance referrals */}
<div className="flex">
  <div className="">Icon</div>
  <div className="">N{selectedUser.balances.refferal_wallet}</div>
</div>
</div>








<td className="px-6 py-4 ">
                        {/* <TxReedem item={item} setRedeemObj={setRedeemObj} /> */}
                        {item.type === "Payment" && !item.payment.isRedeemed ? (
                          <TxReedem item={item} setRedeemObj={setRedeemObj} />
                        ) : (
                          <TxDownload id={item._id} />
                        )}
                      </td>





//my layout old


import React, { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../../utils/contextShop";
import Notify from "../Notify";
import Dashnavidate from "./Dashnavidate";
import Top from "./Top";
import SuccessModal from "../Modals/SuccessModal";
import useConfirmationModal from "../../utils/useConfirmationModal";
// import Confirmation from "../Modals/Confirmation";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const { notify, successRedeem, setSuccessRedeem, showConfirmation } =
    useContext(ShopContext);
  const { ConfirmationModal, showModal } = useConfirmationModal();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="">
      {/* {
        isBalancesLoading || isRefLoading &&
        <Preloader />
    }
    */}

      <div className="w-[100%] h-screen md:h-auto  bg-[#F7F7F7] relative z-[9999] grid grid-cols-4 text-[#FFF]">
        {notify && <Notify />}
        {successRedeem && <SuccessModal setSuccessRedeem={setSuccessRedeem} />}
        <ConfirmationModal />
        {/* Left */}

        <div
          className={`${
            !openMenu && "md:hidden"
          } block md:fixed md:left-0 md:w-[370px] sm:w-[250px] md:z-[999999] z-40 col-span-1 row-span-full`}
        >
          <Dashnavidate setOpenMenu={setOpenMenu} />
        </div>

        {/* Right */}
        <div className="md:col-span-full overflow-x-hidden pb-6 col-span-3">
          <Top setOpenMenu={setOpenMenu} />
          {children}
        </div>
      </div>

      {/* {isSuccessVaccinate && !clickout &&
     <Congratulate />
    } */}

      {/* <div className="absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-[99]">
             <img src="/walletedited.png" alt="" />
         </div> */}
    </div>
  );
}
