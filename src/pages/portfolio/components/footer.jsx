import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  const { userDetails } = useUser();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-start md:items-center gap-8 md:gap-0">
        <div className="w-full md:w-2/5">
          <h4 className="text-2xl font-bold text-white">
            {userDetails.firstname.toUpperCase()}{" "}
            {userDetails.lastname.toUpperCase()}
          </h4>
          <p className="text-gray-400 mt-4">{userDetails.userProfile.about}</p>
        </div>

        <div className="w-full md:w-1/3">
          <h4 className="text-xl font-semibold text-white">Socials</h4>
          <div className="flex justify-start mt-4 gap-6">
            <Link
              to={userDetails.userProfile.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition duration-300"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              to={userDetails.userProfile.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              to={userDetails.userProfile.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition duration-300"
            >
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 text-center">
        <hr className="border-gray-700" />
        <small className="text-gray-500 mt-4 block">
          © 2024. Made by {userDetails.firstname} {userDetails.lastname}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
