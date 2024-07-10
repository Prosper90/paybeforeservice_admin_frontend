import React, { createContext, useEffect, useMemo, useState } from "react";

export const ShopContext = createContext("context");

export const ContextProvider = (props) => {
  //notification and error message
  const [notify, setNotify] = useState(false);
  const [notifyType, setNotifyType] = useState(""); //it can be success, error, warn
  const [notifymsg, setNotifymsg] = useState("");
  const [redeemObj, setRedeemObj] = useState({
    open: false,
    data: {},
  });
  const [successRedeem, setSuccessRedeem] = useState(false);
  const [tokenActive, setTokenActive] = useState(false);
  const [addAdminModal, setaddAdminModal] = useState(false);

  //confirmation and warning
  const [showConfirmation, setShowConfirmation] = useState(false); // State to control modal visibility
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [onProceed, setOnProceed] = useState(() => () => {});
  const [onCancel, setOnCancel] = useState(() => () => {});

  //pagination
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  //profile
  const [profileData, setProfileData] = useState(null);

  //moredetails
  const [moreDetails, setMoreDetails] = useState(false);
  const [detailIndex, setDetailIndex] = useState();

  //selectedUserInfo
  const [selectedUser, setSelectedUser] = useState({});

  //selectedUserTx
  const [selectedTx, setSelectedTx] = useState({});

  //select and selected Dispute
  const [selectedDispute, setSelectedDispute] = useState({});

  //select admins and more details
  const [selectedAdmin, setSelectedAdmin] = useState({});

  //for Actions
  //user's actions
  const [selectedUserAction, setSelectedUserAction] = useState("");
  //admin's actions
  const [selectedAdminAction, setSelectedAdminAction] = useState("");
  //dispute's actions
  const [selectedDisputeAction, setSelectedDisputeAction] = useState("");
  //transaction's actions
  const [selectedTransactionAction, setSelectedTransactionAction] =
    useState("");

  //for filtering
  const [filters, setFilters] = useState({
    search: "",
    dateFrom: "",
    dateTo: "",
    otherFilters: [],
  });

  const hasActiveFilters = useMemo(() => {
    return Boolean(filters.search || filters.dateTo || filters.dateFrom);
  }, [filters]);

  //filtering end

  //opening details functions
  const openDetails = (type, index) => {
    if (!moreDetails) {
      setDetailIndex(0);
    }
    setDetailIndex(index);
    setMoreDetails(!moreDetails);
  };

  //Useeffect
  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
      setNotifymsg("");
    }, 3500);
  }, [notify]);

  const contextValue = {
    notify,
    setNotify,
    notifyType,
    setNotifyType,
    notifymsg,
    setNotifymsg,
    redeemObj,
    setRedeemObj,
    successRedeem,
    setSuccessRedeem,
    tokenActive,
    setTokenActive,
    addAdminModal,
    setaddAdminModal,
    pagination,
    setPagination,
    currentPage,
    setCurrentPage,
    profileData,
    setProfileData,
    selectedUser,
    setSelectedUser,
    selectedTx,
    setSelectedTx,
    selectedDispute,
    setSelectedDispute,
    selectedAdmin,
    setSelectedAdmin,
    filters,
    setFilters,
    moreDetails,
    setMoreDetails,
    detailIndex,
    setDetailIndex,
    openDetails,
    hasActiveFilters,
    selectedUserAction,
    setSelectedUserAction,
    selectedAdminAction,
    setSelectedAdminAction,
    selectedDisputeAction,
    setSelectedDisputeAction,
    selectedTransactionAction,
    setSelectedTransactionAction,
    //confirmations
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
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
