import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaBuilding,
  FaBriefcase,
  FaTools,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const ExperienceCard = ({ experience, editExperience, deleteExperience }) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative mb-4 flex flex-col gap-4 border-b pb-4 w-full bg-white p-5 shadow hover:shadow-xl rounded-2xl"
    >
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <FaBuilding className="h-6 w-6 text-blue-500 mr-2" />
          <small>Company Name</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {experience.companyName}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <FaBriefcase className="h-6 w-6 text-green-500 mr-2" />
          <small>Role</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">{experience.role}</p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <FaTools className="h-6 w-6 text-yellow-500 mr-2" />
          <small>Skills</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {experience.skills}
        </p>
      </div>
      <div className="flex flex-col w-full mb-2">
        <div className="flex items-center">
          <FaMapMarkerAlt className="h-6 w-6 text-red-500 mr-2" />
          <small>Location</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {experience.location}
        </p>
      </div>
      <div className="flex justify-start align-middle gap-4 w-full">
        <div className="flex flex-col w-full mb-2">
          <div className="flex items-center">
            <FaCalendarAlt className="h-6 w-6 text-yellow-500 mr-2" />
            <small>Start Date</small>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            {experience.startDate}
          </p>
        </div>
        <div className="flex flex-col w-full mb-2">
          <div className="flex items-center">
            <FaCalendarAlt className="h-6 w-6 text-purple-500 mr-2" />
            <small>End Date</small>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            {experience.endDate}
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <FaTools className="h-6 w-6 text-green-500 mr-2" />
          <small>Responsibility</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {experience.responsibility}
        </p>
      </div>

      {showButtons && (
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={editExperience}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaEdit className="h-5 w-5" />
          </button>
          <button
            onClick={deleteExperience}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
          >
            <FaTrash className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    responsibility: PropTypes.string.isRequired,
  }).isRequired,
  editExperience: PropTypes.func.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default ExperienceCard;
