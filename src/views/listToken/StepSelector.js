import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

function StepSelector({ steps, activeStep, setActiveStep }) {
  return (
    <Box className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 rounded-lg p-4 sm:p-6 shadow-md">
      {steps.map((step, key) => {
        return (
          <div key={key}>
            {key !== 0 && (
              <div className="flex justify-start sm:justify-end ml-2 mr-2">
                <div
                  className={`w-1 h-10 sm:h-20 -my-4 z-0 ${
                    key <= activeStep
                      ? "bg-[#BA4DF9]"
                      : "bg-[#9F9F9F] dark:bg-[#54555A]"
                  }`}
                ></div>
              </div>
            )}
            <div className="flex justify-end flex-row-reverse sm:flex-row items-center gap-4">
              <div className="text-start sm:text-end">
                <p
                  className={`${
                    key === activeStep ? "" : "text-black/40 dark:text-white/40"
                  }  text-lg font-bold`}
                >
                  {step.title}
                </p>
                <p
                  className={`${
                    key === activeStep ? "" : "text-black/40 dark:text-white/40"
                  }  text-sm font-medium`}
                >
                  {step.description}
                </p>
              </div>
              <div
                className={`w-5 h-5 rounded-full z-10 ${
                  key <= activeStep
                    ? "bg-[#BA4DF9] border-2 border-[#BA4DF9]/30 dark:border-[#4E2D67]"
                    : "bg-[#9F9F9F] dark:bg-[#54555A]"
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
