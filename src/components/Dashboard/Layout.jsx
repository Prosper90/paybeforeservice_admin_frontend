import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../utils/contextShop";
import Notify from "../Notify";
import Dashnavidate from "./Dashnavidate";
import Top from "./Top";
import SuccessModal from "../Modals/SuccessModal";
import useConfirmationModal from "../../utils/useConfirmationModal";
import Confirmation from "../Modals/Confirmation";

export default function Layout({ children }) {
  const {
    notify,
    successRedeem,
    setSuccessRedeem,
    showConfirmation,
    title,
    message,
    onProceed,
    onCancel,
  } = useContext(ShopContext);
  const { showModal } = useConfirmationModal();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="">
      <div className="w-[100%] h-screen md:h-auto bg-[#F7F7F7] relative z-[9999] grid grid-cols-4 text-[#FFF]">
        {notify && <Notify />}
        {successRedeem && <SuccessModal setSuccessRedeem={setSuccessRedeem} />}
        {showConfirmation && (
          <Confirmation
            showConfirmation={showConfirmation}
            title={title}
            message={message}
            onProceed={onProceed}
            onCancel={onCancel}
          />
        )}

        <div
          className={`${
            !openMenu && "md:hidden"
          } block md:fixed md:left-0 md:w-[370px] sm:w-[250px] md:z-[999999] z-40 col-span-1 row-span-full`}
        >
          <Dashnavidate setOpenMenu={setOpenMenu} />
        </div>

        <div className="md:col-span-full overflow-x-hidden pb-6 col-span-3">
          <Top setOpenMenu={setOpenMenu} />
          {children}
        </div>
      </div>
    </div>
  );
}
