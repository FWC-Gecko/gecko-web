import React from "react";
import StepSelector from "./StepSelector";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

function ListToken() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    {
      step: 1,
      title: "Your Information",
      description: "Write something",
      notiText: "Let’s start with your Personal Information",
    },
    {
      step: 2,
      title: "Project Information",
      description: "Write something",
    },
    {
      step: 3,
      title: "Token Information",
      description: "Write something",
    },
    {
      step: 4,
      title: "Other Information",
      description: "Write something",
    },
  ];

  return (
    <div className="bg-[#0B0B0F]  pt-5 sm:pt-0 pb-5 sm:pb-10">
      <div className="n-container">
        <div className="bg-[#1B1C23]/70 rounded-3xl flex justify-between items-center overflow-hidden ">
          <div className="flex justify-start items-center gap-4 pl-4 sm:pl-10 h-32 sm:h-48 z-10">
            <div className="">
              <p className="text-white text-2xl sm:text-3xl font-bold">
                List Your Token
              </p>
              <p className="text-white text-sm">
                Home {`>`}{" "}
                <span className="text-[#BA4DF9]">List Your Token</span>
              </p>
            </div>
          </div>
          <div className="absolute sm:relative right-0">
            <img src="/img/goal.png" alt="" className="h-32 sm:h-48" />
          </div>
        </div>

        <div className="sm:flex justify-between gap-10 mt-5 sm:mt-10 rounded-xl bg-[#121318] p-5 sm:p-10">
          <div className="sm:w-[400px]">
            <StepSelector
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </div>
          <div className="w-full" id="form">
            <p className="text-md font-medium text-white mt-4 sm:mt-0">
              Step {activeStep + 1} / {steps.length}
            </p>
            {/* {activeStep === 0 && (
              <Step1 activeStep={activeStep} setActiveStep={setActiveStep} />
            )}
            {activeStep === 1 && (
              <Step2 activeStep={activeStep} setActiveStep={setActiveStep} />
            )}
            {activeStep === 2 && (
              <Step3 activeStep={activeStep} setActiveStep={setActiveStep} />
            )}
            {activeStep === 3 && ( */}
            <Step4 activeStep={activeStep} setActiveStep={setActiveStep} />
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListToken;
