import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-4">
        <div className="lds-hourglass"></div>;
      </div>
    </>
  );
};

export default Loader;
