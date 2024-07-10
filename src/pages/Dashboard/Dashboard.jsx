/** @format */

import { useEffect, useState, useContext } from "react";
import Topaction from "../../components/Dashboard/DashboardComp/Topaction";
import Wallet from "../../components/Dashboard/DashboardComp/Wallet";
import Txhome from "../../components/Dashboard/Transactioncomp/Txhome";
import Txref from "../../components/Dashboard/Refcomp/Txref";
import Userheader from "../../components/Dashboard/Userheader";
import Addadmin from "../../components/Modals/Addadmin";
import axios from "axios";
import RedeemModal from "../../components/Modals/RedeemModal";
import { ShopContext } from "../../utils/contextShop";
import { Disputes, LOCAL_URL, copyCode } from "../../utils/constants";
import Chartdata from "../../components/Dashboard/DashboardComp/Chartdata";
import { makeCall } from "../../utils/makeCall";

export default function Dashboard() {
  const {
    setNotify,
    setNotifyType,
    setNotifymsg,
    redeemObj,
    setRedeemObj,
    setTokenActive,
    addAdminModal,
    setaddAdminModal,
    profileData,
    setProfileData,
  } = useContext(ShopContext);

  const [dataref, setRefData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [copy, setCopy] = useState(false);
  const [windowObj, setWindowObj] = useState();
  const [disputes, setDisputes] = useState();
  //admins wallets
  const [walletinfo, setWalletInfo] = useState();
  //user info
  const [usersData, setUserData] = useState();
  //admin info
  const [adminsData, setAdminsData] = useState();

  const token = localStorage.getItem("token");

  // Function to make the GET request
  const fetchProfileData = async () => {
    try {
      // Replace with your actual bearer token
      const url = `${LOCAL_URL}/auth/get_profile`;
      const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
      }
      const response = await makeCall(url, {}, headers, "get");
      // console.log(response, "here twenty three");

      if (response.status) {
        // const data = await response.json();
        // console.log(response, "first one first");
        setProfileData(response.data);
      } else {
        // const data = await response.json();
        // console.log(data, "try two");
        if (response.data.message === "invalid token") setTokenActive(false);

        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.data.message);
        return;
      }
    } catch (error) {
      // setNotify(true);
      // setNotifyType("warn");
      // setNotifymsg(error);
      console.log("checking", error);
    }
  };

  //Fetch  Dispute Data from API
  const fetchDisputeData = async () => {
    try {
      // Replace with your actual bearer token
      const url = `${LOCAL_URL}/dispute/get_all_disputes`;
      const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
      }
      const response = await makeCall(url, {}, headers, "get");

      if (response.status) {
        // const data = await response.json();
        // console.log(response, "first one first");
        setDisputes(response.data.reverse());
      } else {

        if (response.data.message === "invalid token") setTokenActive(false);

        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.data.message);
        return;
      }
    } catch (error) {

      console.log("checking", error);
    }
  };

  //Fetch  Dispute Data from API
  const fetchWalletData = async () => {
      try {
        // Replace with your actual bearer token
        const url = `${LOCAL_URL}/wallet/balance_info`;
        const headers = {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
        }
        const response = await makeCall(url, {}, headers, "get");
  
        if (response.status) {
          // const data = await response.json();
          // console.log(response, "first one second data");
          setWalletInfo(response.data);
        } else {
  
          if (response.data.message === "invalid token") setTokenActive(false);
  
          setNotify(true);
          setNotifyType("warn");
          setNotifymsg(response.data.message);
          return;
        }
      } catch (error) {
  
        console.log("checking", error);
      }
    };

  //Fetch  USers Data from API
  const fetchUsersData = async () => {
    try {
      // Replace with your actual bearer token
      const url = `${LOCAL_URL}/user/get_users`;
      const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
      }
      const response = await makeCall(url, {}, headers, "get");

      if (response.status) {
        // const data = await response.json();
        // console.log(response, "first one second data");
        setUserData(response.data_info);
      } else {

        if (response.data.message === "invalid token") setTokenActive(false);

        setNotify(true);
        setNotifyType("warn");
        setNotifymsg(response.data.message);
        return;
      }
    } catch (error) {

      console.log("checking", error);
    }
  };


    //Fetch  Admins Data from API
    const fetchAdminsData = async () => {
      try {
        // Replace with your actual bearer token
        const url = `${LOCAL_URL}/admin/get_admins`;
        const headers = {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
        }
        const response = await makeCall(url, {}, headers, "get");
  
        if (response.status) {
          // const data = await response.json();
          // console.log(response, "Admin info wrapped up in a nice little package.");
          setAdminsData(response.data_info);
        } else {
  
          if (response.data.message === "invalid token") setTokenActive(false);
  
          setNotify(true);
          setNotifyType("warn");
          setNotifymsg(response.data.message);
          return;
        }
      } catch (error) {
  
        console.log("checking", error);
      }
    };
    

  useEffect(() => {
    if (!profileData) {
      fetchProfileData();
    }
    if(!disputes) {
      fetchDisputeData()
    }
    if(!walletinfo) {
      fetchWalletData()
    }
    if(!usersData) {
      fetchUsersData();
    }
    if(!adminsData) {
      fetchAdminsData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileData, addAdminModal]);

  
  // Call the function to make the GET request
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setWindowObj(window);
    setTimeout(() => {
      setCopy(false);
    }, 4500);
  }, [copy]);

  useEffect(() => {
    // Update the windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // console.log(profileData, "pro pro");

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="p-7 mt-3 pb-24">
      {/* <RedeemModal setRedeemModal={setRedeemModal} redeemModal={redeemModal} /> */}

      {/* {redeemObj.open && (
        <RedeemModal redeemObj={redeemObj} setRedeemObj={setRedeemObj} />
      )} */}
      <div className="">
        {windowWidth > 768 ? (
          <Topaction setaddAdminModal={setaddAdminModal} />
        ) : (
          <div className="w-full flex justify-between items-center">
            <Userheader />

            <div className="text-[#000]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.74994 19.15C2.33994 19.15 1.99994 18.81 1.99994 18.4V12.7C1.94994 9.98999 2.95994 7.42999 4.83994 5.50999C6.71994 3.59999 9.23994 2.54999 11.9499 2.54999C17.4899 2.54999 21.9999 7.05999 21.9999 12.6V18.3C21.9999 18.71 21.6599 19.05 21.2499 19.05C20.8399 19.05 20.4999 18.71 20.4999 18.3V12.6C20.4999 7.88999 16.6699 4.04999 11.9499 4.04999C9.63994 4.04999 7.49994 4.93999 5.90994 6.55999C4.30994 8.18999 3.45994 10.36 3.49994 12.68V18.39C3.49994 18.81 3.16994 19.15 2.74994 19.15Z"
                  fill="#555555"
                />
                <path
                  d="M5.94 12.95H5.81C3.71 12.95 2 14.66 2 16.76V18.64C2 20.74 3.71 22.45 5.81 22.45H5.94C8.04 22.45 9.75 20.74 9.75 18.64V16.76C9.75 14.66 8.04 12.95 5.94 12.95Z"
                  fill="#555555"
                />
                <path
                  d="M18.19 12.95H18.06C15.96 12.95 14.25 14.66 14.25 16.76V18.64C14.25 20.74 15.96 22.45 18.06 22.45H18.19C20.29 22.45 22 20.74 22 18.64V16.76C22 14.66 20.29 12.95 18.19 12.95Z"
                  fill="#555555"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="mt-7">
        <Wallet 
          balances={walletinfo}
          usersData={usersData}
          adminsData={adminsData} 
          />
      </div>

      {windowWidth <= 768 && (
        <div className="mt-7">
          <Topaction setaddAdminModal={setaddAdminModal} />
        </div>
      )}

      <Addadmin
        addAdminModal={addAdminModal}
        setaddAdminModal={setaddAdminModal}
      />

      {/* <RedeemModal/> */}
      <div className="grid md:flex grid-cols-3 md:flex-col-reverse items-start gap-6 mt-10">
        {/* Left sie with transaction */}
        <div className="md:col-span-full md:w-full 2xl:col-span-2">
          {/* Info */}
          <div className="flex justify-between text-[#555]">
            <span className="font-semibold text-xs text-[#555]">Disputes</span>
            <span className="font-semibold text-xs text-[#555]">View all</span>
          </div>

          {/* Main content */}
          <div
            className={`bg-[#fff] border border-[#DADADA] rounded-2xl w-100  p-4 md:px-4 md:p-3 mt-2 ${
              disputes?.length === 0 ? "h-80" : "h-[100%] gap-[10px]"
            } flex flex-col justify-between`}
          >
            {disputes?.length !== 0 ? (
              <Txhome
                windowWidth={windowWidth}
                data={disputes}
                setRedeemObj={setRedeemObj}
              />
            ) : (
              <div className="flex justify-center flex-col mt-20 items-center ">
                <img src="./empty.svg" className="w-28 h-28" alt="" />
                <p className="font-semibold text-xs text-black">
                  You have no transactions
                </p>
                <p className="font-normal text-xs text-gray-600">
                  Your payments would show up here after you have made a
                  successful transaction
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right side with referrals */}
        <div className="md:col-span-full 2xl:col-span-0 md:w-full">
          {/* Referrals showing */}
          <div className="flex flex-col justify-between">
            {/* Info */}
            <div className="flex justify-between mt-3 text-[#555] w-full">
              <span className="font-semibold text-xs">Payments Today</span>
              <span className="font-semibold text-xs">View all</span>
            </div>

            {/* Chart or graph */}
            <div className="bg-[#fff] border border-[#DADADA] rounded-2xl w-100 h-[200px] md:h-auto  p-2 bg-[#FFF] mt-3 ">
              {/* <Txref /> */}
              <Chartdata />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
