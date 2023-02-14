import React, { useState } from "react";
import { useEffectOnce } from "../../../hook/useEffectOnce";
import useToken from "../../../hook/useToken";
import TokenItem from "./TokenItem";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function TopGainers() {
  const { getGainers } = useToken();
  const [tokens, setTokens] = useState([]);

  useEffectOnce(() => {
    async function getTokensData() {
      const res = await getGainers();
      setTokens(res);
    }
    getTokensData();
  });

  return (
    <div className="mx-2">
      <div className="flex justify-between w-full items-center mb-6">
        <div className="flex justify-start items-center gap-3">
          <TrendingUpIcon className="text-[#F6EA00]" />
          <p className="text-[#101115] dark:text-white text-lg font-bold">
            Top Gainers
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row  justify-between items-center gap-3">
        {tokens.map((row, key) => {
          return <TokenItem key={key} row={row} />;
        })}
      </div>
    </div>
  );
}

export default TopGainers;
