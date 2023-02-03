import React, { useState } from "react";
import useLoading from "../../hook/useLoading";
import { chains } from "../../constants";

function Step3({ activeStep, setActiveStep }) {
  const { setLoading } = useLoading();

  let list_token_data = JSON.parse(localStorage.getItem("list-token"));

  const [chain, setChain] = useState(
    list_token_data?.chain ? list_token_data?.chain : chains[0]
  );
  const [contractAddress, setContractAddress] = useState(
    list_token_data?.contractAddress
  );
  const [decimals, setDecimals] = useState(list_token_data?.decimals);
  const [totalSupply, setTotalSupply] = useState(list_token_data?.totalSupply);
  const [maxSupply, setMaxSupply] = useState(list_token_data?.maxSupply);
  const [circulatingSupply, setCirculatingSupply] = useState(
    list_token_data?.circulatingSupply
  );
  const onNextStep = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Save the data in the LocalStorage.
    if (!list_token_data) list_token_data = {};
    list_token_data.chain = chain;
    list_token_data.contractAddress = contractAddress;
    list_token_data.decimals = decimals;
    list_token_data.totalSupply = totalSupply;
    list_token_data.maxSupply = maxSupply;
    list_token_data.circulatingSupply = circulatingSupply;
    localStorage.setItem("list-token", JSON.stringify(list_token_data));
    setLoading(false);
    // Go to the next step.
    setActiveStep(activeStep + 1);
  };

  const onPrevStep = async () => {
    setLoading(true);
    list_token_data.chain = chain;
    list_token_data.contractAddress = contractAddress;
    list_token_data.decimals = decimals;
    list_token_data.totalSupply = totalSupply;
    list_token_data.maxSupply = maxSupply;
    list_token_data.circulatingSupply = circulatingSupply;
    localStorage.setItem("list-token", JSON.stringify(list_token_data));
    setLoading(false);

    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <hr className="text-[#DADADA] my-6" />
      <form onSubmit={onNextStep}>
        <div className="mt-6">
          <p className="text-white font-medium">Project Blockchain</p>
          <div className="w-full rounded-md mt-2">
            <select
              className="outline-0 px-3 py-2 text-white w-full bg-gradient-to-r bg-[#202129]"
              value={chain}
              onChange={(e) => setChain(e.target.value)}
            >
              {chains.map((row, key) => {
                return <option key={key}>{row}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex justify-between gap-6 mt-6">
          <div className="w-full">
            <p className="text-white font-medium">Contract Address*</p>
            <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
              <input
                type={"text"}
                className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                placeholder="Enter Contract Address"
                value={contractAddress}
                onChange={(e) => setContractAddress(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-white font-medium">Decimals*</p>
            <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
              <input
                type={"number"}
                className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                placeholder="Enter Decimals"
                value={decimals}
                onChange={(e) => setDecimals(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-6 mt-6">
          <div className="w-full">
            <p className="text-white font-medium">Total Supply*</p>
            <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
              <input
                type={"number"}
                className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                placeholder="Enter Contract Address"
                value={totalSupply}
                onChange={(e) => setTotalSupply(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-white font-medium">Max Supply*</p>
            <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
              <input
                type={"number"}
                className="bg-transparent outline-0 px-3 py-2 text-white w-full"
                placeholder="Enter Max Supply"
                value={maxSupply}
                onChange={(e) => setMaxSupply(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-white font-medium">Circulating Supply*</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <input
              type={"number"}
              className="bg-transparent outline-0 px-3 py-2 text-white w-full"
              placeholder="Enter Circulating Supply"
              value={circulatingSupply}
              onChange={(e) => setCirculatingSupply(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="border border-[#BA4DF9] text-white text-sm font-medium rounded-full py-2 px-6"
            onClick={onPrevStep}
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#5B46DF] text-white to-[#BA4DF9] text-sm font-medium rounded-full py-2 px-6"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step3;
