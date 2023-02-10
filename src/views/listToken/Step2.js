import React, { useState } from "react";
import useLoading from "../../hook/useLoading";
import { useEffectOnce } from "../../hook/useEffectOnce";
import PreviousButton from "../../components/section/listToken/PreviousButton";
import NextButton from "../../components/section/listToken/NextButton";
import Input from "../../components/section/listToken/Input";

function Step2({ activeStep, setActiveStep }) {
  const { setLoading } = useLoading();

  useEffectOnce(() => {
    const element = document.getElementById("form");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  });

  let list_token_data = JSON.parse(localStorage.getItem("list-token"));

  const [projectName, setProjectName] = useState(list_token_data?.projectName);
  const [projectSymbol, setProjectSymbol] = useState(
    list_token_data?.projectSymbol
  );
  const [projectLaunchDate, setProjectLaunchDate] = useState(
    list_token_data?.projectLaunchDate
  );
  const [oneLinerDescription, setOneLinerDescription] = useState(
    list_token_data?.oneLinerDescription
  );
  const [detailedDescription, setDetailedDescription] = useState(
    list_token_data?.detailedDescription
  );

  const onNextStep = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Save the data in the LocalStorage.
    if (!list_token_data) list_token_data = {};
    list_token_data.projectName = projectName;
    list_token_data.projectSymbol = projectSymbol;
    list_token_data.projectLaunchDate = projectLaunchDate;
    list_token_data.oneLinerDescription = oneLinerDescription;
    list_token_data.detailedDescription = detailedDescription;
    localStorage.setItem("list-token", JSON.stringify(list_token_data));
    setLoading(false);
    // Go to the next step.
    setActiveStep(activeStep + 1);
  };

  const onPrevStep = async () => {
    setLoading(true);
    list_token_data.projectName = projectName;
    list_token_data.projectSymbol = projectSymbol;
    list_token_data.projectLaunchDate = projectLaunchDate;
    list_token_data.oneLinerDescription = oneLinerDescription;
    list_token_data.detailedDescription = detailedDescription;
    localStorage.setItem("list-token", JSON.stringify(list_token_data));
    setLoading(false);

    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <hr className="text-[#DADADA] my-6" />
      <form onSubmit={onNextStep}>
        <div className="mt-4">
          <Input
            label="Project Name"
            placeholder={"Enter Email Address"}
            value={projectName}
            onChange={setProjectName}
          />
        </div>
        <div className="sm:flex justify-between gap-6 mt-4">
          <div className="w-full">
            <Input
              label="Project Symbol"
              placeholder={"Enter Project Symbol"}
              value={projectSymbol}
              onChange={setProjectSymbol}
            />
          </div>
          <div className="w-full mt-4 sm:mt-0">
            <Input
              type={"date"}
              label="Project Launch Date"
              placeholder={"Enter Project Launch Date"}
              value={projectLaunchDate}
              onChange={setProjectLaunchDate}
            />
          </div>
        </div>
        <div className="mt-4">
          <Input
            label="One Liner Description"
            placeholder={"Enter One Liner Description"}
            value={oneLinerDescription}
            onChange={setOneLinerDescription}
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
