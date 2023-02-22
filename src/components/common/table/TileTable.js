import React from "react";
import { useRef } from "react";
import AssetTileItem from "../../section/assets/AssetTileItem";

function TileTable({ columns, data, onRowClicked }) {
  const curref = useRef();

  console.log(curref);

  return (
    <div
      className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
      ref={curref}
    >
      {/* <coingecko-coin-heatmap-widget
        height="600"
        width={curref ? curref.current?.clientWidth : "500"}
        locale="en"
      ></coingecko-coin-heatmap-widget> */}
      {/* {data.map((row, key) => {
        return (
          <AssetTileItem key={key} row={row} onRowClicked={onRowClicked} />
        );
      })} */}
    </div>
  );
}

export default TileTable;
