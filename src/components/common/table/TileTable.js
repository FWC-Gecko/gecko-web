import React from "react";
import AssetTileItem from "../../section/assets/AssetTileItem";

function TileTable({ columns, data, onRowClicked }) {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {data.map((row, key) => {
        return (
          <AssetTileItem key={key} row={row} onRowClicked={onRowClicked} />
        );
      })}
    </div>
  );
}

export default TileTable;
