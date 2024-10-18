import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";

const links = [
  { link: "Features", path: "features" },
  { link: "Process", path: "process" },
  { link: "Pricing", path: "pricing" },
  { link: "Contact Us", path: "contact" },
];

const Navbar = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    localStorage.removeItem("portiUser");
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.location.reload();
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className=" text-white fixed top-0 w-full z-50 glass"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <RouterLink to="/" className="text-xl md:text-3xl">
              PortiBuilder
            </RouterLink>
          </div>
          <div className="hidden md:flex flex-grow justify-center gap-10">
            {links.map((l, i) => {
              return (
                <Link
                  key={i}
                  to={l.path}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-xl hover:text-gray-400 cursor-pointer"
                >
                  {l.link}
                </Link>
              );
            })}
          </div>
          <div className="flex space-x-4">
            {user && user.role === "user" ? (
              <>
                <RouterLink
                  to="/dashboard"
                  className="hidden md:block hover:text-gray-400 px-4 py-2 border border-gray-400 rounded-lg"
                >
                  Dashoard
                </RouterLink>
                <button
                  className="hidden md:block text-red-600 font-semibold"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <RouterLink
                  to="/login"
                  className="hidden md:block hover:text-gray-400 px-4 py-2 border border-gray-400 rounded"
                >
                  Log In
                </RouterLink>
                <RouterLink
                  to="/signup"
                  className="hover:text-gray-400 px-4 py-2 border border-gray-400 rounded"
                >
                  Sign Up
                </RouterLink>
              </>
            )}

            <div className="md:hidden">
              <button onClick={toggleDrawer}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Side drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-50`}
        >
          <div className="p-4 space-y-4">
            <button onClick={toggleDrawer} className="text-right w-full">
              <svg
                className="w-6 h-6 ml-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            {links.map((l, i) => {
              return (
                <Link
                  key={i}
                  to={l.path}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block hover:text-gray-400 cursor-pointer"
                  onClick={toggleDrawer}
                >
                  {l.link}
                </Link>
              );
            })}

            <RouterLink
              to="/login"
              className="block hover:text-gray-400 px-4 py-2 border border-gray-400 rounded"
            >
              Log In
            </RouterLink>
          </div>
        </div>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
            onClick={toggleDrawer}
          ></div>
        )}
      </nav>
      <div style={{ height: navbarHeight }} className="bg-black"></div>
    </>
  );
};

export default Navbar;
