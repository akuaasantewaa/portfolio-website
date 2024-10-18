import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { PiUserGear } from "react-icons/pi";
import { TbWorldWww } from "react-icons/tb";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const PreviewSection = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    localStorage.removeItem("portiUser");
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.location.href = "/login";
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickAway = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, []);

  return (
    <div className="p-4 h-full flex flex-col gap-20">
      <div className="flex justify-end items-center">
        <div
          className="user-details flex justify-end items-center gap-4 p-4 border-2 rounded-3xl text-md hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer relative"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <div className="flex justify-center items-center h-10 w-10 rounded-full text-white font-bold bg-black">
            <img
              className="w-full h-full rounded-full"
              src={user.profile.profilePicture}
              alt={user.firstName}
            />
          </div>
          <p>
            {user.firstName} {user.lastName}
          </p>
          <FiChevronDown />
          {dropdownVisible && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-2xl shadow-2xl z-10">
              <ul>
                <li className="flex justify-start gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <PiUserGear size={20} /> Account settings
                </li>
                <li
                  className="flex justify-start gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={handleLogout}
                >
                  <RiLogoutCircleRLine size={20} /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Link
        to={`/portfolio/${user.username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between w-[80%] mx-auto align-middle items-center gap-4 p-2 px-4 bg-blue-200 rounded-3xl text-md hover:bg-blue-300 text-gray-700 font-semibold cursor-pointer"
      >
        <TbWorldWww size={20} />
        <p className="font-bold">Portfolio Website</p>
        <BiLinkExternal size={20} />
      </Link>
    </div>
  );
};

export default PreviewSection;
