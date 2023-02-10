import React, { useState } from "react";
import useLoading from "../../hook/useLoading";
import PreviousButton from "../../components/section/listToken/PreviousButton";
import NextButton from "../../components/section/listToken/NextButton";
import Input from "../../components/section/listToken/Input";

function Step3({ activeStep, setActiveStep, chains }) {
  const { setLoading } = useLoading();

  let list_token_data = JSON.parse(localStorage.getItem("list-token"));

  const [blockchain, setBlockchain] = useState(
    list_token_data?.blockchain ? list_token_data?.blockchain : chains[0]
  );
  const [address, setAddress] = useState(list_token_data?.address);
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
    saveToLocalStorage();
    setLoading(false);
    // Go to the next step.
    setActiveStep(activeStep + 1);
  };

  const onPrevStep = async () => {
    setLoading(true);
    saveToLocalStorage();
    setLoading(false);
    setActiveStep(activeStep - 1);
  };

  const saveToLocalStorage = () => {
    list_token_data.blockchain = blockchain;
    list_token_data.address = address;
    list_token_data.decimals = decimals;
    list_token_data.totalSupply = totalSupply;
    list_token_data.maxSupply = maxSupply;
    list_token_data.circulatingSupply = circulatingSupply;
    localStorage.setItem("list-token", JSON.stringify(list_token_data));
  };

  return (
    <div>
      <hr className="text-[#DADADA] my-6" />
      <form onSubmit={onNextStep}>
        <div className="mt-6">
          <p className="font-medium">Project Blockchain*</p>
          <div className="w-full rounded-md mt-2">
            <select
              className="outline-0 px-3 py-2 w-full bg-gradient-to-r bg-[#575A70]/10 dark:bg-[#202129]"
              value={blockchain}
              onChange={(e) => setBlockchain(e.target.value)}
              required
            >
              {chains.map((row, key) => {
                return <option key={key}>{row}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex justify-between gap-6 mt-6">
          <div className="w-full">
            <Input
              label="Contract Address"
              placeholder={"Enter Contract Address"}
              value={address}
              onChange={setAddress}
              required
            />
          </div>
          <div className="w-full">
            <Input
              type={"number"}
              label="Decimals"
              placeholder={"Enter Decimals"}
              value={decimals}
              onChange={setDecimals}
              required
            />
          </div>
        </div>
        <div className="flex justify-between gap-6 mt-6">
          <div className="w-full">
            <Input
              type={"number"}
              label="Total Supply"
              placeholder={"Enter Total Supply"}
              value={totalSupply}
              onChange={setTotalSupply}
              required
            />
          </div>
          <div className="w-full">
            <Input
              label="Max Supply"
              placeholder={"Enter Max Supply"}
              value={maxSupply}
              onChange={setMaxSupply}
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <Input
            type={"number"}
            label="Circulating Supply"
            placeholder={"Enter Circulating Supply"}
            value={circulatingSupply}
            onChange={setCirculatingSupply}
            required
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <PreviousButton onClick={onPrevStep} />
          <NextButton />
        </div>
      </form>
    </div>
  );
}

export default Step3;
