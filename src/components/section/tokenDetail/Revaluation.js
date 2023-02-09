import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

function Revaluation() {
  return (
    <div className="rounded-lg bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] my-10 sm:my-20 p-8 flex justify-between items-center">
      <div>
        <p className="text-3xl text-white">
          How do you feel about QATAR 2022 TOKEN today?
        </p>
        <p className="text-white mt-2">
          Vote to see what our Community thinks!
        </p>
      </div>
      <div className="flex justify-end gap-3">
        <button className="bg-white text-[#BA4DF9] rounded-lg px-6 py-2 flex items-center gap-2">
          <ThumbUpAltIcon /> <p>Good</p>
        </button>
        <button className="bg-white text-[#BA4DF9] rounded-lg px-6 py-2 flex items-center gap-2">
          <ThumbDownAltIcon /> <p>Bad</p>
        </button>
      </div>
    </div>
  );
}

export default Revaluation;
