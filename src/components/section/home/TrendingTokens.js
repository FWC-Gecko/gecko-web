import React, { useState } from "react";
import { useEffectOnce } from "../../../hook/useEffectOnce";
import useToken from "../../../hook/useToken";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TokenItem from "./TokenItem";
function TrendingTokens() {
  const { getTrendingTokens } = useToken();
  const [tokens, setTokens] = useState([]);

  useEffectOnce(() => {
    async function getTrendingTokensData() {
      const res = await getTrendingTokens();
      setTokens(res);
    }
    getTrendingTokensData();
  });

  return (
    <div className="mx-2">
      <div className="flex justify-between w-full items-center mb-3 sm:mb-6">
        <div className="flex justify-start items-center gap-3">
          <WhatshotIcon className="text-[#F6EA00]" />
          <p className="text-[#101115] dark:text-white text-lg font-bold">
            Trending Tokens
          </p>
        </div>
      </div>
      <div className="flex flex-col 2xl:flex-row  justify-between items-center gap-3">
        {tokens.map((row, key) => {
          return <TokenItem key={key} row={row} />;
        })}
      </div>
    </div>
  );
}

export default TrendingTokens;
