import React from "react";
import RollingLoading from "../../assets/images/Rolling.svg";

const Loading = () => {
  return (
    <div className="flex w-full h-full justify-center align-middle items-center">
      <img src={RollingLoading} height="100px" width="100px" alt="Loading" />
    </div>
  );
};

export default Loading;
