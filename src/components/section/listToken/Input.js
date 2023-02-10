import React from "react";

function Input({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  required = true,
}) {
  return (
    <div className="w-full">
      <p className="font-medium">
        {label}
        {required && "*"}
      </p>
      <div className="bg-gradient-to-r from-[#575A70]/20 to-[#575A70]/20 w-full rounded-md mt-2">
        <input
          type={type}
          className="bg-transparent outline-0 px-3 py-2 w-full"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      </div>
    </div>
  );
}

export default Input;
