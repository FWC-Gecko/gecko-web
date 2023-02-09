import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SmsIcon from "@mui/icons-material/Sms";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Chat(props) {
  return (
    <div className="w-full text-[#101115] dark:text-white">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-medium">Live Qatar 2022 Token Chat</p>

        <button className="text-white px-6 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow flex items-center gap-2">
          View on Community
          <ChevronRightIcon />
        </button>
      </div>
      <div className="mt-4 bg-[#F1F3F5] dark:bg-[#121318] rounded-2xl border border-[#DFDFDF] dark:border-[#23262F]">
        <div className="border-b border-[#DFDFDF] dark:border-[#23262F] flex justify-between items-center px-6 py-4 w-full">
          <div className="flex justify-start items-center gap-3 w-full">
            <img src="/img/logo.png" alt="" className="h-10 w-10" />
            <div>
              <p className="text-white">Football World Community</p>
              <p className="text-[#B9B9B9]">1.7M Followers</p>
            </div>
          </div>

          <button className="text-white text-sm px-6 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow flex items-center gap-2 whitespace-nowrap">
            + Follow
          </button>
        </div>
        <div className="p-6">
          <p>asdf</p>
        </div>
        <div className="border-t border-[#DFDFDF] dark:border-[#23262F] flex justify-between items-center px-6 py-4 w-full">
          <div className="flex justify-center gap-1 items-center">
            <SmsIcon />
            <p>4</p>
          </div>

          <div className="flex justify-center gap-1 items-center">
            <LoopIcon />
            <p>Repost</p>
          </div>
          <div className="flex justify-center gap-1 items-center">
            <FavoriteBorderIcon />
            <p>4</p>
          </div>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
