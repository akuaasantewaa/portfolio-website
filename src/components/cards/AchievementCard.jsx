/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaTrophy,
  FaCalendarAlt,
  FaBook,
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineCreditScore } from "react-icons/md";

const AchievementCard = ({ editAchievement, achievement, onDelete }) => {
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
          <FaTrophy className="h-6 w-6 text-yellow-300 mr-2" />
          <small>Awards</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {achievement.awards}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <FaBook className="h-6 w-6 text-blue-500 mr-2" />
          <small>Program</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {achievement.program}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <GrCertificate className="h-6 w-6 text-green-500 mr-2" />
          <small>Qualification</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {achievement.qualification}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <MdOutlineCreditScore className="h-6 w-6 text-red-500 mr-2" />
          <small>Grade</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {achievement.grade}
        </p>
      </div>
      <div className="flex justify-start align-middle gap-4 w-full">
        <div className="flex flex-col w-full mb-2">
          <div className="flex items-center">
            <FaCalendarAlt className="h-6 w-6 text-yellow-500 mr-2" />
            <small>Start Date</small>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            {achievement.startDate}
          </p>
        </div>
        <div className="flex flex-col w-full mb-2">
          <div className="flex items-center">
            <FaCalendarAlt className="h-6 w-6 text-purple-500 mr-2" />
            <small>End Date</small>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            {achievement.endDate}
          </p>
        </div>
      </div>
      {showButtons && (
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={editAchievement}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <FaEdit className="h-5 w-5" />
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
          >
            <FaTrash className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AchievementCard;
