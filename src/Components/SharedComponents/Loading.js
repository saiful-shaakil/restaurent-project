import React from "react";
import load from "../../assets/images/loading.png";

const Loading = () => {
  return (
    <div className="flex items-center h-screen justify-center">
      <p className="animate-spin">
        <img className="w-16" src={load} alt="Loading Spinner" />
      </p>
    </div>
  );
};

export default Loading;
