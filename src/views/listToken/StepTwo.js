import React, { useState } from "react";

function StepTwo({ activeStep, setActiveStep }) {
  const positions = [
    "Founder",
    "Member of the Leadership Team",
    "CEO",
    "Admin / Community Manager",
    "CMO",
    "Administrative Assistant",
  ];
  const [position, setPosition] = useState(positions[0]);

  return (
    <div>
      <hr className="text-[#DADADA] my-6" />
      <div className="mt-4">
        <p className="text-white font-medium">Token Ticker</p>
        <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
          <input
            type={"text"}
            className="bg-transparent outline-0 px-3 py-2 text-white w-full"
            placeholder="Enter Token Ticker"
          />
        </div>
      </div>
      <div className="flex justify-between gap-6 mt-4">
        <div className="w-full">
          <p className="text-white font-medium">Contract Address</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"text"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              placeholder="Enter Contract Address"
            />
          </div>
        </div>
        <div className="w-full">
          <p className="text-white font-medium">Total Supply</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"number"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              placeholder="1"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-white font-medium">Decimals</p>
        <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
          <input
            type={"text"}
            className="bg-transparent outline-0 px-3 py-2 text-white w-full"
            placeholder="Decimals"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-white font-medium">project blockchain</p>
        <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
          <input
            type={"text"}
            className="bg-transparent outline-0 px-3 py-2 text-white w-full"
            placeholder="Enter Project Blockchain"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          className="border border-[#BA4DF9] text-white text-sm font-medium rounded-full py-2 px-6"
          onClick={() => {
            setActiveStep(activeStep - 1);
          }}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-[#5B46DF] text-white to-[#BA4DF9] text-sm font-medium rounded-full py-2 px-6"
          onClick={() => {
            setActiveStep(activeStep + 1);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepTwo;
