import React, { useState } from "react";
import { useEffectOnce } from "../../../hook/useEffectOnce";
import useToken from "../../../hook/useToken";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import TokenItem from "./TokenItem";

function NewTokens() {
  const { getNewTokens } = useToken();
  const [tokens, setTokens] = useState([]);

  useEffectOnce(() => {
    async function getNewTokensData() {
      const res = await getNewTokens();
      setTokens(res);
    }
    getNewTokensData();
  });

  return (
    <div className="mx-2">
      <div className="flex justify-between w-full items-center mb-6">
        <div className="flex justify-start items-center gap-3">
          <LibraryAddIcon className="text-[#F6EA00]" />
          <p className="text-[#101115] dark:text-white text-lg font-bold">
            New Tokens
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

export default NewTokens;
