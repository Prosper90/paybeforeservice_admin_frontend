import { useState, useRef, useContext } from "react";
import Confirmation from "../components/Modals/Confirmation";
import { ShopContext } from "./contextShop";

const useConfirmationModal = () => {
  const {
    showConfirmation,
    setShowConfirmation,
    title,
    setTitle,
    message,
    setMessage,
    onProceed,
    setOnProceed,
    onCancel,
    setOnCancel,
  } = useContext(ShopContext);

  const showModal = (
    modalTitle,
    modalMessage,
    proceedCallback,
    cancelCallback
  ) => {
    setTitle(modalTitle);
    setMessage(modalMessage);
    setOnProceed(() => proceedCallback);
    setOnCancel(() => cancelCallback);
    setShowConfirmation(true);
    // ConfirmationModal();
    // ConfirmationModalRef.current?.showModal();
  };

  return { showModal };
};

export default useConfirmationModal;
