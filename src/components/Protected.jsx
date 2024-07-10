/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import Layout from "../components/Dashboard/Layout";
import { ShopContext } from "../utils/contextShop";
import { useNavigate } from "react-router-dom";

export default function Protected({ component: Component }) {
  const [isVerified, setIsVerified] = useState(true);
  const { tokenActive } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn");

    const verifyToken = () => {
      // You can use your preferred JWT library to verify the token
      // Example: verify(token, 'your_secret_key')
      if (token && tokenActive) {
        return true; // Token verification success
      }
      return false; // Token verification failed
    };

    setIsVerified(verifyToken());
  }, [tokenActive]);

  return isVerified ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    navigate("/")
  ); // Redirect to the dashboard or any other page
}
