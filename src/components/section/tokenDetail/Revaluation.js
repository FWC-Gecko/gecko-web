import React, { useEffect, useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import useToken from "../../../hook/useToken";
import { formatDate } from "../../../utils";
import { useEffectOnce } from "../../../hook/useEffectOnce";
import { Progress } from "@material-tailwind/react";

function Revaluation({ tokenInfo }) {
  const { voteToken, getVoteStatus } = useToken();

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

  const [voteStatusInfo, setVoteStatusInfo] = useState();

  useEffect(() => {
    async function onGetVoteStatusInfo() {
      if (tokenInfo?._id) {
        const res = await getVoteStatus(tokenInfo?._id);
        setVoteStatusInfo(res);
      }
    }

    onGetVoteStatusInfo();
  }, [getVoteStatus, tokenInfo?._id]);

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
    <div className="rounded-lg text-white bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] my-10 sm:my-20 p-4 sm:p-8 sm:flex justify-between items-center">
      {voteStatus ? (
        <>
          <div className="w-full">
            <p className="text-xl">You've voted</p>
            <p className="max-w-[400px] text-sm sm:text-base">
              Your vote is for 24 hours. In order to update how you feel about
              Ethereum, come back tomorrow!
            </p>
          </div>
          <div className="w-full mt-4 sm:mt-0">
            <div className="max-w-[400px] ml-auto mr-0">
              <Progress value={voteStatusInfo?.upPercent || 0} color="blue" />
              <div className="w-full text-sm sm:text-base mt-2 flex justify-between items-center">
                <p>
                  {voteStatusInfo?.upPercent?.toFixed(1)}% Good{" "}
                  <ThumbUpAltIcon />
                </p>
                <p>
                  <ThumbDownAltIcon /> Bad{" "}
                  {voteStatusInfo?.downPercent?.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="text-xl sm:text-3xl text-white">
              How do you feel about {tokenInfo?.name} today?
            </p>
            <p className="text-white text-sm sm:text-base mt-2">
              Vote to see what our Community thinks!
            </p>
          </div>
          <div>
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
        </>
      )}
    </div>
  );
}

export default Revaluation;
