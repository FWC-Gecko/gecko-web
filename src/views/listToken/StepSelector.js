import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

function StepSelector({ steps, activeStep, setActiveStep }) {
  return (
    <Box className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 rounded-lg p-6 shadow-md">
      {/* <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              <p className="text-white text-lg font-bold">{step.title}</p>
              <p className="text-white text-sm font-normal">
                {step.description}
              </p>
            </StepLabel>
          </Step>
        ))}
      </Stepper> */}
      {steps.map((step, key) => {
        return (
          <div key={key}>
            {key !== 0 && (
              <div className="flex justify-end mr-2">
                <div
                  className={`w-1 h-20 -my-4 z-0 ${
                    key <= activeStep ? "bg-[#BA4DF9]" : "bg-[#54555A]"
                  }`}
                ></div>
              </div>
            )}
            <div className="flex justify-end items-center gap-4">
              <div className="text-end">
                <p
                  className={`${
                    key === activeStep ? "text-white" : "text-white/40"
                  }  text-lg font-bold`}
                >
                  {step.title}
                </p>
                <p
                  className={`${
                    key === activeStep ? "text-white" : "text-white/40"
                  }  text-sm font-medium`}
                >
                  {step.description}
                </p>
              </div>
              <div
                className={`w-5 h-5 rounded-full z-10 ${
                  key <= activeStep
                    ? "bg-[#BA4DF9] border-2 border-[#4E2D67]"
                    : "bg-[#54555A]"
                } `}
              ></div>
            </div>
          </div>
        );
      })}
    </Box>
  );
}

export default StepSelector;
