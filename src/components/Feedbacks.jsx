/* eslint-disable react/prop-types */
import loadingSpinner from "../assets/images/loadingSpinner (2).svg";

export const LoadingSpinner = (props) => {
  return (
    <div className="flex justify-center align-middle items-center w-full">
      <img
        src={loadingSpinner}
        alt="Loading"
        height={props.height || "50px"}
        width={props.width || "50px"}
      />
    </div>
  );
};
