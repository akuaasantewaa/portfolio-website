/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { createProfile, updateProfile } from "../../services/userProfile";
import { useSelector } from "react-redux";

const ProfileForm = ({
  userProfile,
  setUserProfile,
  toggleEditMode,
  fetchUserProfile,
  editMode,
}) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    maritalStatus: "",
    sex: "",
    contact: "",
    bio: "",
    about: "",
    githubLink: "",
    linkedinLink: "",
    twitterLink: "",
    profilePicture: null,
    resume: null,
  });
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (userProfile) {
      setFormData({
        location: userProfile.location || "",
        maritalStatus: userProfile.maritalStatus || "",
        sex: userProfile.sex || "",
        contact: userProfile.contact || "",
        bio: userProfile.bio || "",
        about: userProfile.about || "",
        githubLink: userProfile.githubLink || "",
        linkedinLink: userProfile.linkedinLink || "",
        twitterLink: userProfile.twitterLink || "",
        profilePicture: null,
        resume: null,
      });
      setImagePreview(userProfile.profilePicture || "");
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, profilePicture: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.maritalStatus)
      newErrors.maritalStatus = "Marital status is required";
    if (!formData.sex) newErrors.sex = "Sex is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.profilePicture && !imagePreview)
      newErrors.profilePicture = "Profile picture is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!formData.githubLink) newErrors.githubLink = "GitHub link is required";
    if (!formData.linkedinLink)
      newErrors.linkedinLink = "LinkedIn link is required";
    if (!formData.twitterLink)
      newErrors.twitterLink = "Twitter link is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const formDataObj = new FormData();
      formDataObj.append("location", formData.location);
      formDataObj.append("maritalStatus", formData.maritalStatus);
      formDataObj.append("sex", formData.sex);
      formDataObj.append("contact", formData.contact);
      formDataObj.append("bio", formData.bio);
      formDataObj.append("about", formData.about);
      formDataObj.append("githubLink", formData.githubLink);
      formDataObj.append("linkedinLink", formData.linkedinLink);
      formDataObj.append("twitterLink", formData.twitterLink);

      if (formData.profilePicture) {
        formDataObj.append("profilePicture", formData.profilePicture);
      }

      if (formData.resume) {
        formDataObj.append("resume", formData.resume);
      }
      setLoading(true);
      try {
        let response;
        if (editMode) {
          response = await updateProfile(userProfile.id, formDataObj);
        } else {
          response = await createProfile(formDataObj);
        }
        console.log(response.data);
        toggleEditMode();
        fetchUserProfile();
      } catch (error) {
        console.log("Error submitting form", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const inputStyle =
    "mt-1 block w-full text-md shadow-inner py-3 px-2 text-gray-700 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500";
  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col mb-4 justify-start align-middle items-start w-[50%] ">
        <label
          htmlFor="profilePicture"
          className="block text-gray-700 font-semibold mb-1"
        >
          Profile Picture
        </label>
        <div className="flex gap-4 items-center align-middle">
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="mt-3 h-32 w-32 object-cover rounded-full border"
            />
          )}
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleImageChange}
            className={inputStyle}
          />
          {errors.profilePicture && (
            <p className="text-red-500 text-xs mt-1">{errors.profilePicture}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label
            htmlFor="location"
            className="block text-gray-700 font-semibold mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className={`${inputStyle} ${
              errors.location ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="maritalStatus"
            className="block text-gray-700 font-semibold mb-1"
          >
            Marital Status
          </label>
          <input
            type="text"
            id="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className={`${inputStyle} ${
              errors.maritalStatus ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.maritalStatus && (
            <p className="text-red-500 text-xs mt-1">{errors.maritalStatus}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label
            htmlFor="sex"
            className="block text-gray-700 font-semibold mb-1"
          >
            Sex
          </label>
          <input
            type="text"
            id="sex"
            value={formData.sex}
            onChange={handleChange}
            className={`${inputStyle} ${
              errors.sex ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.sex && (
            <p className="text-red-500 text-xs mt-1">{errors.sex}</p>
          )}
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="contact"
          className="block text-gray-700 font-semibold mb-1"
        >
          Contact
        </label>
        <input
          type="text"
          id="contact"
          value={formData.contact}
          onChange={handleChange}
          className={`${inputStyle} ${
            errors.contact ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.contact && (
          <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="bio" className="block text-gray-700 font-semibold mb-1">
          Bio
        </label>
        <textarea
          id="bio"
          value={formData.bio}
          onChange={handleChange}
          className={`${inputStyle} ${
            errors.bio ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.bio && (
          <p className="text-red-500 text-xs mt-1">{errors.bio}</p>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="about"
          className="block text-gray-700 font-semibold mb-1"
        >
          About
        </label>
        <textarea
          id="about"
          value={formData.about}
          onChange={handleChange}
          className={`${inputStyle} ${
            errors.about ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.about && (
          <p className="text-red-500 text-xs mt-1">{errors.about}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
        <div>
          <label
            htmlFor="githubLink"
            className="block text-gray-700 font-semibold mb-1"
          >
            GitHub Link
          </label>
          <input
            type="text"
            id="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            className={`${inputStyle} ${
              errors.githubLink ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.githubLink && (
            <p className="text-red-500 text-xs mt-1">{errors.githubLink}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="linkedinLink"
            className="block text-gray-700 font-semibold mb-1"
          >
            LinkedIn Link
          </label>
          <input
            type="text"
            id="linkedinLink"
            value={formData.linkedinLink}
            onChange={handleChange}
            className={`${inputStyle} ${
              errors.linkedinLink ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.linkedinLink && (
            <p className="text-red-500 text-xs mt-1">{errors.linkedinLink}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="twitterLink"
            className="block text-gray-700 font-semibold mb-1"
          >
            Twitter Link
          </label>
          <input
            type="text"
            id="twitterLink"
            value={formData.twitterLink}
            onChange={handleChange}
            className={`${inputStyle} ${
              errors.twitterLink ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.twitterLink && (
            <p className="text-red-500 text-xs mt-1">{errors.twitterLink}</p>
          )}
        </div>
      </div>
      <div className="w-1/2">
        <label
          htmlFor="resume"
          className="block text-gray-700 font-semibold mb-1"
        >
          Resume
        </label>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeChange}
          className={inputStyle}
        />
        {formData.resume && (
          <p className="text-gray-600 mt-1">{formData.resume.name}</p>
        )}
        {errors.resume && (
          <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-semibold rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
