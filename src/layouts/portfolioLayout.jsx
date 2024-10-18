/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetUser } from "../services/auth";
import Loading from "../components/feedbacks/loading";
import { useUser } from "../contexts/UserContext";

import Navbar from "../pages/portfolio/components/navbar";
import Footer from "../pages/portfolio/components/footer";
import { future } from "../pages/portfolio/data-placeholder";
import { FaUserAltSlash } from "react-icons/fa"; // Importing a not found icon

const PortfolioLayout = () => {
  const [loading, setLoading] = useState(false);
  const { userDetails, setUserDetails } = useUser(); // Use context
  // const { username } = useParams();

  const fetchUserDetails = async () => {
    // setLoading(true);
    setUserDetails(future);
    // try {
    //   const response = await apiGetUser(username);
    //   if (response.status === 200) {
    //     if (response.data.username.username === "supafuture") {
    //       const profilePic = future.userProfile.profilePicture;
    //       setUserDetails({
    //         ...response.data.username,
    //         projects: future.projects,
    //         achievements: future.achievements,
    //         education: future.education,
    //         userProfile: {
    //           ...response.data.username.userProfile,
    //           profilePicture: profilePic,
    //         },
    //       });
    //     } else {
    //       setUserDetails(response.data.username);
    //     }
    //     console.log("Portfolio user details-->", response.data.username);
    //   }
    // } catch (error) {
    //   console.log("Error fetching user details", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []); // Add username as a dependency

  return (
    <>
      {loading ? (
        <Loading />
      ) : userDetails ? (
        <div className="relative">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PortfolioLayout;
