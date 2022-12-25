import React from "react";
import AssetTileItem from "../../section/assets/AssetTileItem";

function TileTable({ columns, data, onRowClicked }) {
  return (
    <div className="sm:grid grid-cols-3 gap-4">
      {data.map((row, key) => {
        return (
          <AssetTileItem key={key} row={row} onRowClicked={onRowClicked} />
        );
      })}
    </div>
  );
}

export default TileTable;
