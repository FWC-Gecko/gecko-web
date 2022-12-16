import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

function StepSelector({ steps, activeStep, setActiveStep }) {
  return (
    <Box className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 rounded-lg p-6 shadow-md">
      <Stepper activeStep={activeStep} orientation="vertical">
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
      </Stepper>
    </Box>
  );
}

export default StepSelector;
