import { useState } from "react";
import {
  FaSchool,
  FaMapMarkerAlt,
  FaBook,
  FaCalendarAlt,
  FaCertificate,
  FaGraduationCap,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const EducationCard = ({ edu, editEducation, deleteEducation }) => {
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
      className="relative mb-4 flex flex-col gap-4 border-b pb-4 w-full bg-white  p-5 shadow hover:shadow-xl rounded-2xl"
    >
      <div className="flex flex-col mb-2">
        <div className="flex">
          <FaSchool className="h-6 w-6 text-blue-500 mr-2" />
          <small>School Name</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">{edu.schoolName}</p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex">
          <FaMapMarkerAlt className="h-6 w-6 text-red-500 mr-2" />
          <small>Address</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">{edu.address}</p>
      </div>
      <div className="flex justify-start align-middle gap-4 w-full ">
        <div className="flex flex-col w-full mb-2">
          <div className="flex">
            <FaGraduationCap className="h-6 w-6 text-indigo-500 mr-2" />
            <small>Education Level</small>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            {edu.educationLevel}
          </p>
        </div>
        <div className="flex flex-col w-full mb-2">
          <div className="flex">
            <FaBook className="h-6 w-6 text-green-500 mr-2" />
            <small>Program</small>
          </div>
          <p className="text-lg font-semibold text-gray-700">{edu.program}</p>
        </div>
      </div>
      <div className="flex justify-start align-middle gap-4 w-full">
        <div className="flex flex-col w-full mb-2">
          <div className="flex">
            <FaCalendarAlt className="h-6 w-6 text-yellow-500 mr-2" />
            <small>Start Date</small>
          </div>
          <p className="text-lg font-semibold text-gray-700">{edu.startDate}</p>
        </div>
        <div className="flex flex-col w-full mb-2">
          <div className="flex">
            <FaCalendarAlt className="h-6 w-6 text-purple-500 mr-2" />
            <small>End Date</small>
          </div>
          <p className="text-lg font-semibold text-gray-700">{edu.endDate}</p>
        </div>
      </div>

      <div className="flex flex-col mb-2">
        <div className="flex">
          <FaCertificate className="h-6 w-6 text-teal-500 mr-2" />
          <small>Certificate</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">{edu.certificate}</p>
      </div>

      {showButtons && (
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={editEducation}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaEdit className="h-5 w-5" />
          </button>
          <button
            onClick={deleteEducation}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
          >
            <FaTrash className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationCard;
