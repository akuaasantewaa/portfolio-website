/* eslint-disable react/prop-types */
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Socials = ({ userDetails }) => {
  return (
    <div className="hidden md:absolute left-0  md:flex flex-col h-full justify-center align-middle items-center">
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
  );
};

export default Socials;
