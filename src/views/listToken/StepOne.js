import React, { useState } from "react";

function StepOne({ activeStep, setActiveStep }) {
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
      <p className="text-2xl font-bold text-white">
        Let’s start with your Personal Information
      </p>
      <p className="text-[#A3A3A3] text-md mt-4">
        Please fill in the details below so that we can get in contact with you.
      </p>
      <hr className="text-[#DADADA] my-6" />
      <p className="text-[#D0D0DD] font-medium">
        Please Confirm Your Position with the Project.
      </p>
      <div className="grid grid-cols-2 w-max mt-2">
        {positions.map((row, key) => {
          return (
            <div
              className="flex items-center my-2 cursor-pointer"
              key={key}
              onClick={() => setPosition(row)}
            >
              <div
                className={`${
                  position === row
                    ? "bg-[#BA4DF9] border-2 border-[#46255E]"
                    : "bg-[#54555A]"
                }  w-4 h-4 rounded-full`}
              ></div>
              <label
                for="red-radio"
                className="ml-2 text-sm text-white cursor-pointer"
              >
                {row}
              </label>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <p className="text-white font-medium">Your Name</p>
        <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
          <input
            type={"text"}
            className="bg-transparent outline-0 px-3 py-2 text-white w-full"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-white font-medium">Email Address</p>
        <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
          <input
            type={"email"}
            className="bg-transparent outline-0 px-3 py-2 text-white w-full"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-white font-medium">Your Telegram @Username</p>
        <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
          <input
            type={"text"}
            className="bg-transparent outline-0 px-3 py-2 text-white w-full"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end">
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

export default StepOne;
