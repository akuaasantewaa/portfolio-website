/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = (props) => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && navigate(props.to);
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div>
      <div className="flex flex-col gap-5 align-middle items-center justify-center w-full h-[100vh]">
        <p className="font-bold text-4xl">Unauthorized Access!</p>
        <p className="font-bold text-3xl">{props.message}</p>
        <p className="font-bold text-3xl">
          redirecting in{" "}
          <span className="text-red-700">{count + " second(s)"}</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingToRedirect;
