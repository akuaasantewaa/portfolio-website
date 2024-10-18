import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu button
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const navLinks = [
  { name: "Profile", to: "profile" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Experience", to: "experience" },
  { name: "Achievements", to: "achievements" },
  { name: "Volunteer", to: "volunteers" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const { userDetails } = useUser();
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -navbarHeight; // Adjust this value to the desired offset (negative value moves the element down)
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
      setDrawerOpen(false);
    }
  };
  return (
    <div className="relative">
      <div style={{ height: navbarHeight }} className="bg-white" />

      <div ref={navbarRef} className="navbar fixed top-0 z-50 shadow-lg w-full">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex gap-4 align-middle items-center">
            <div className="p-1 bg-blue-600 rounded-full h-[60px] w-[60px] md:h-[80px] md:w-[80px]">
              <img
                src={userDetails.userProfile.profilePicture}
                alt={userDetails.firstname}
                className="w-full h-full rounded-full"
              />
            </div>
            <Link
              to="/"
              className="font-bold text-xl text-gray-800 hover:text-blue-800"
            >
              {userDetails.firstname} {userDetails.lastname}
            </Link>
          </div>
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleScroll(link.to)}
                className="font-semibold text-gray-600 text-sm hover:text-blue-600"
              >
                {link.name.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={toggleDrawer}
            />
          </div>
        </div>
      </div>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } w-64`}
      >
        <div className="flex justify-end p-4">
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleDrawer} />
        </div>
        <div className="flex flex-col items-center mt-10 space-y-6">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleScroll(link.to)}
              className="font-semibold text-gray-600 text-lg hover:text-blue-600"
            >
              {link.name.toUpperCase()}
            </button>
          ))}
        </div>
        {/* -------------Socials --------------------- */}
        <div className="flex justify-center align-middle items-center mt-8">
          <div className="flex flex-col justify-center align-middle gap-4 items-center bg-white p-3 shadow-lg rounded-r-xl">
            <Link
              to={userDetails.userProfile.githubLink}
              className="p-3 rounded-lg hover:bg-blue-300"
            >
              <FaGithub size={40} />
            </Link>
            <Link
              to={userDetails.userProfile.linkedinLink}
              className="p-3 rounded-lg hover:bg-blue-300"
            >
              <FaLinkedinIn size={40} />
            </Link>
            <Link
              to={userDetails.userProfile.twitterLink}
              className="p-3 rounded-lg hover:bg-blue-300"
            >
              <FaTwitter size={40} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
