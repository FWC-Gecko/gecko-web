import React from "react";

function TextArea({ label, description }) {
  return (
    <>
      <p>{label}</p>
      <textarea className="h-32 bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2" />
      <p className="mt-2 text-[0.75rem]">{description}</p>
    </>
  );
}

export default TextArea;
