import React from "react";

function PreviousButton({ onClick }) {
  return (
    <button
      className="border border-[#BA4DF9] text-white text-sm font-medium rounded-full py-2 px-6"
      onClick={onClick}
    >
      Back
    </button>
  );
}

export default PreviousButton;
