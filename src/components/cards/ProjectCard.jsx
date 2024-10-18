/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaFolderOpen,
  FaCalendarAlt,
  FaLink,
  FaBuilding,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { TbFileDescription } from "react-icons/tb";
import { PiHandCoinsThin } from "react-icons/pi";

const ProjectCard = ({ project, onEdit, onDelete }) => {
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
          <FaFolderOpen className="h-6 w-6 text-blue-500 mr-2" />
          <small>Project Name</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {project.projectName}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <TbFileDescription className="h-6 w-6 text-green-500 mr-2" />
          <small>Description</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {project.description}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <PiHandCoinsThin className="h-6 w-6 text-yellow-500 mr-2" />
          <small>Contribution</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {project.contribution}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <GiSkills className="h-6 w-6 text-red-500 mr-2" />
          <small>Skills</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">{project.skills}</p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <FaLink className="h-6 w-6 text-blue-500 mr-2" />
          <small>Link</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">{project.link}</p>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <FaBuilding className="h-6 w-6 text-purple-500 mr-2" />
          <small>Institution</small>
        </div>
        <p className="text-lg font-semibold text-gray-700">
          {project.nameOfInstitution}
        </p>
      </div>
      <div className="flex justify-start align-middle gap-4 w-full">
        <div className="flex flex-col w-full mb-2">
          <div className="flex items-center">
            <FaCalendarAlt className="h-6 w-6 text-yellow-500 mr-2" />
            <small>Start Date</small>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            {project.startDate}
          </p>
        </div>
        <div className="flex flex-col w-full mb-2">
          <div className="flex items-center">
            <FaCalendarAlt className="h-6 w-6 text-purple-500 mr-2" />
            <small>End Date</small>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            {project.endDate}
          </p>
        </div>
      </div>
      {showButtons && (
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={onEdit}
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

export default ProjectCard;
