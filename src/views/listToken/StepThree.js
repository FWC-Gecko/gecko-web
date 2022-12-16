import React, { useState } from "react";

function StepThree({ activeStep, setActiveStep }) {
  const chains = ["Ethereum", "Binance Smart Chain"];

  return (
    <div>
      <hr className="text-[#DADADA] my-6" />
      <div className="mt-4">
        <p className="text-white font-medium">Select Blockchain</p>
        <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
          <select className="bg-transparent outline-0 px-3 py-2 text-white w-full">
            <option>Select Blockchain</option>
            {chains.map((row, key) => {
              return <option key={key}>{row}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-white font-medium">Project Name</p>
        <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
          <input
            type={"text"}
            className="bg-transparent outline-0 px-3 py-2 text-white w-full"
            placeholder="Enter Answer"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-white font-medium">Coinmarketcap Url</p>
        <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
          <input
            type={"text"}
            className="bg-transparent outline-0 px-3 py-2 text-white w-full"
            placeholder="Enter coinmarketcap url"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-start items-center gap-2">
        <p className="text-white w-20">Social Url</p>
        <hr className="text-[#23262F] w-full" />
      </div>
      <div className="flex justify-between gap-6 mt-4">
        <div className="w-full">
          <p className="text-white font-medium">Twitter</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"text"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              placeholder="Enter Contract Address"
            />
          </div>
        </div>
        <div className="w-full">
          <p className="text-white font-medium">Telegram</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"text"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              placeholder="1"
            />
          </div>
        </div>
        <div className="w-full">
          <p className="text-white font-medium">Discord</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"text"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              placeholder="1"
            />
          </div>
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
        <button className="bg-gradient-to-r from-[#5B46DF] text-white to-[#BA4DF9] text-sm font-medium rounded-full py-2 px-6">
          Submit
        </button>
      </div>
    </div>
  );
}

export default StepThree;
