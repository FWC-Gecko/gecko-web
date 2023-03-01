import React from "react";

function TextArea({ label, description }) {
  return (
    <>
      <p>{label}</p>
      <textarea className="h-32 bg-[#575A70]/10 dark:bg-[#202129] w-full rounded-md mt-2 p-4" />
      <p className="mt-2 text-[0.75rem]">{description}</p>
    </>
  );
}

export default TextArea;
