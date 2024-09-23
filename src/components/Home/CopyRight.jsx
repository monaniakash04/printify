import React from "react";

const CopyRight = () => {
  return (
    <div className="md:mt-[300px] mt-[1200px] max-w-full flex justify-center bg-gray-300 max-h-[200px] flex-col items-center gap-5">
      <div className="mx-auto max-w-5xl mt-5 flex justify-center  gap-5 flex-wrap items-center">
        <h1 className="text-base roboto-light">
          Intellecutual Property Policy
        </h1>
        <h1 className="text-base roboto-light">Terms of Service</h1>
        <h1 className="text-base roboto-light">Privacy Policy</h1>
        <h1 className="text-base roboto-light">Security</h1>
      </div>
      <div className="mx-auto max-w-5xl flex justify-center  gap-5 flex-wrap items-center">
        <h1 className="text-base roboto-medium">
          @2024 Printigy, Inc.All Right reserved
        </h1>
      </div>
    </div>
  );
};

export default CopyRight;
