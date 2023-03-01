import React from "react";

function CheckBox({ label, description }) {
  return (
    <div>
      <p>{label}</p>
      <div>
        <input type={"checkbox"} />
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}

export default CheckBox;
