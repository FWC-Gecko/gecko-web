import React, { useEffect, useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import useToken from "../../../hook/useToken";
import { formatDate } from "../../../utils";

function Revaluation({ tokenInfo }) {
  const { voteToken } = useToken();

  const [voteStatus, setVoteStatus] = useState(null);
  const currentTime = new Date();

  function onGetVoteStatus() {
    try {
      const res = localStorage.getItem(
        `vote-token-${tokenInfo?._id}-${formatDate(currentTime)}`
      );
      setVoteStatus(JSON.parse(res));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (tokenInfo?._id) {
      onGetVoteStatus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenInfo]);

  async function onVote(num) {
    const res = await voteToken(tokenInfo?._id, num);
    if (res) {
      const row = {
        tokenId: tokenInfo?._id,
        status: num,
      };
      localStorage.setItem(
        `vote-token-${tokenInfo?._id}-${formatDate(currentTime)}`,
        JSON.stringify(row)
      );
      onGetVoteStatus();
    }
  }

  return (
    <div className="rounded-lg bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] my-10 sm:my-20 p-8 sm:flex justify-between items-center">
      <div>
        <p className="text-3xl text-white">
          How do you feel about {tokenInfo?.name} today?
        </p>
        <p className="text-white mt-2">
          Vote to see what our Community thinks!
        </p>
      </div>
      <div className="flex justify-center sm:justify-end gap-3 mt-3 sm:mt-0">
        <button
          className={`${
            voteStatus?.status === 1
              ? "bg-transparent border border-white text-white"
              : "bg-white text-[#BA4DF9] "
          } rounded-lg px-6 py-2 flex items-center gap-2`}
          disabled={voteStatus?.status === 1 ? true : false}
          onClick={() => onVote(1)}
        >
          <ThumbUpAltIcon /> <p>Good</p>
        </button>
        <button
          className={`${
            voteStatus?.status === -1
              ? "bg-transparent border border-white text-white"
              : "bg-white text-[#BA4DF9] "
          } rounded-lg px-6 py-2 flex items-center gap-2`}
          disabled={voteStatus?.status === -1 ? true : false}
          onClick={() => onVote(-1)}
        >
          <ThumbDownAltIcon /> <p>Bad</p>
        </button>
      </div>
    </div>
  );
}

export default Revaluation;
