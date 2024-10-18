/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { CgUserList } from "react-icons/cg";
import { SlGraduation } from "react-icons/sl";
import { PiUserCircleGear, PiFolder, PiMedal } from "react-icons/pi";
import { SlBriefcase } from "react-icons/sl";
import { VscPreview } from "react-icons/vsc";
import { GrHomeRounded } from "react-icons/gr";
import { BiDonateHeart } from "react-icons/bi";

import { useSelector } from "react-redux";

const links = [
  { name: "Home", icon: GrHomeRounded, to: "/dashboard" },
  { name: "Profile", icon: CgUserList, to: "/dashboard/profile" },
  { name: "Skills", icon: PiUserCircleGear, to: "/dashboard/skills" },
  { name: "Education", icon: SlGraduation, to: "/dashboard/education" },
  { name: "Experience", icon: SlBriefcase, to: "/dashboard/experience" },
  { name: "Projects", icon: PiFolder, to: "/dashboard/projects" },
  { name: "Achievements", icon: PiMedal, to: "/dashboard/achievements" },
  {
    name: "Volunteers",
    icon: BiDonateHeart,
    to: "/dashboard/volunteers",
  },
];

const DashboardSidebar = ({ onPreviewClick }) => {
  const { user } = useSelector((state) => state);
  const location = useLocation();

  return (
    <>
      <div className="fixed h-[100vh] w-[15%] bg-transparent top-0 left-0 z-50 p-4">
        <div className="h-[100%] w-full border rounded-3xl p-2 shadow-xl bg-white flex flex-col justify-between gap-2">
          <div className="flex flex-col">
            <Link to="/dashboard" className="flex w-auto my-7 mx-auto">
              <h1 className="text-2xl text-center font-bold mb-2">
                Porti<span className="text-blue-500">Builder</span>
              </h1>
            </Link>

            {links.map((link, index) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  to={link.to}
                  key={index}
                  className={`flex justify-start align-middle items-center gap-4 p-4 rounded-3xl text-md my-1 hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer ${
                    location.pathname === link.to
                      ? "text-blue-700 font-bold bg-slate-300"
                      : ""
                  }`}
                >
                  <LinkIcon size={30} />
                  <p>{link.name}</p>
                </Link>
              );
            })}
          </div>

          <div className="flex h-full flex-col  justify-center">
            <div className="flex gap-5 flex-col">
              <div
                onClick={onPreviewClick}
                className="flex justify-start align-middle items-center gap-4 p-2 px-4 bg-blue-200 rounded-3xl text-md hover:bg-blue-300 text-gray-700 font-semibold cursor-pointer"
              >
                <VscPreview size={30} />
                <p className="font-bold">Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-[15%] bg-transparent" />
    </>
  );
};

export default DashboardSidebar;
