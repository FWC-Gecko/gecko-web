import React from "react";

function NextButton({ text = "Next Step" }) {
  return (
    <button
      type="submit"
      className="bg-gradient-to-r from-[#5B46DF] text-white to-[#BA4DF9] text-sm font-medium rounded-full py-2 px-6"
    >
      {text}
    </button>
  );
}

export default NextButton;
