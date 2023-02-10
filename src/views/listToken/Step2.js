import React, { useState } from "react";
import useLoading from "../../hook/useLoading";
import { useEffectOnce } from "../../hook/useEffectOnce";
import PreviousButton from "../../components/section/listToken/PreviousButton";
import NextButton from "../../components/section/listToken/NextButton";
import Input from "../../components/section/listToken/Input";

function Step2({ activeStep, setActiveStep }) {
  useEffectOnce(() => {
    const element = document.getElementById("form");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  });

  const { setLoading } = useLoading();

  let list_token_data = JSON.parse(localStorage.getItem("list-token"));

  const [name, setName] = useState(list_token_data?.name);
  const [symbol, setSymbol] = useState(list_token_data?.symbol);
  const [launchedAt, setLaunchedAt] = useState(list_token_data?.launchedAt);
  const [description, setDescription] = useState(list_token_data?.description);
  const [detailedDescription, setDetailedDescription] = useState(
    list_token_data?.detailedDescription
  );

  const onNextStep = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    list_token_data.name = name;
    list_token_data.symbol = symbol;
    list_token_data.launchedAt = launchedAt;
    list_token_data.description = description;
    list_token_data.detailedDescription = detailedDescription;
    localStorage.setItem("list-token", JSON.stringify(list_token_data));
  };

  return (
    <div>
      <hr className="text-[#DADADA] my-6" />
      <form onSubmit={onNextStep}>
        <div className="mt-4">
          <Input
            label="Project Name"
            placeholder={"Enter Project Name"}
            value={name}
            onChange={setName}
            required
          />
        </div>
        <div className="sm:flex justify-between gap-6 mt-4">
          <div className="w-full">
            <Input
              label="Project Symbol"
              placeholder={"Enter Project Symbol"}
              value={symbol}
              onChange={setSymbol}
              required
            />
          </div>
          <div className="w-full mt-4 sm:mt-0">
            <Input
              type={"date"}
              label="Project Launch Date"
              placeholder={"Enter Project Launch Date"}
              value={launchedAt}
              onChange={setLaunchedAt}
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <Input
            label="One Liner Description"
            placeholder={"Enter One Liner Description"}
            value={description}
            onChange={setDescription}
            required
          />
        </div>
        <div className="mt-4">
          <p className="font-medium">Detailed Description*</p>
          <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
            <textarea
              className="bg-transparent outline-0 px-3 py-2 h-32 w-full"
              placeholder="Enter Description"
              value={detailedDescription}
              onChange={(e) => setDetailedDescription(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <PreviousButton onClick={onPrevStep} />
          <NextButton />
        </div>
      </form>
    </div>
  );
}

export default Step2;
