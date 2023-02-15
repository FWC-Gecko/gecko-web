import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import PerPageSelect from "./PerPageSelect";
import PortfolioButton from "./PortfolioButton";
import SwitchTheme from "./SwitchTheme";
import TileTable from "./TileTable";
import WatchListButton from "./WatchListButton";

function Table({
  columns,
  data,
  onRowClick,
  isTableLoading = false,
  watchlistshow = true,
}) {
  const themeColor = useSelector((state) => state.auth.theme);

  const customStyles = {
    table: {
      style: {
        backgroundColor: "transparent",
        color: "white",
      },
    },
    headRow: {
      style: {
        backgroundColor: themeColor === "dark" ? "#0B0B0F" : "#F2F2F2",
        minHeight: "50px",
        // borderBottomWidth: "1px",
        // borderColor: "#23262F",
        // borderWidth: "1px",
        borderRadius: "32px",
        color: themeColor === "dark" ? "white" : "black",
      },
    },
    rows: {
      style: {
        paddingTop: "3px",
        backgroundColor: "transparent",
        color: themeColor === "dark" ? "white" : "black",
        "&:not(:last-of-type)": {
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          borderBottomColor: "#DADADA40",
        },
      },
    },

    pagination: {
      style: {
        color: "white",
        fontSize: "13px",
        minHeight: "56px",
        backgroundColor: "transparent",
      },
      pageButtonsStyle: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        padding: "8px",
        margin: "px",
        cursor: "pointer",
        transition: "0.4s",
        color: "yellow",
        fill: "white",
        backgroundColor: "transparent",
        "&:disabled": {
          cursor: "unset",
          color: "red",
          fill: "gray",
        },
        "&:hover:not(:disabled)": {
          backgroundColor: "gray",
        },
        "&:focus": {
          outline: "none",
          background:
            themeColor === "dark"
              ? "linear-gradient(58.78deg, #5B46DF 1.9%, #BA4DF9 98.4%)"
              : "#F2F2F2",
        },
      },
    },
  };

  // Pagination
  const perPages = [10, 20, 40, 100];
  const [perPage, setPerPage] = useState(perPages[0]);
  const [currentPage, setCurrentPage] = useState(data.length > 0 ? 1 : 0);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * perPage;
    const lastPageIndex = firstPageIndex + perPage;
    return data.slice(firstPageIndex, lastPageIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, currentPage, perPage]);

  // Switch Theme
  const themes = [
    {
      slug: "table",
      icon: "/img/color_table.png",
      selectedIcon: "/img/white_table.png",
    },
    {
      slug: "tile",
      icon: "/img/color_tile.png",
      selectedIcon: "/img/white_tile.png",
    },
  ];
  const [theme, setTheme] = useState(themes[0].slug);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  return (
    <>
      <div className="itemBg6 p-4 sm:p-6 rounded-lg">
        <div className="sm:flex justify-between items-center">
          <div className="flex sm:justify-start justify-between gap-6">
            {watchlistshow && (
              <>
                <WatchListButton />
                <PortfolioButton />
              </>
            )}
          </div>
          <div className="flex justify-between sm:justify-end gap-3 sm:gap-6 mt-3 sm:mt-0">
            <PerPageSelect
              perPages={perPages}
              perPage={perPage}
              setPerPage={setPerPage}
            />
            {/* <Filters /> */}
            {watchlistshow && (
              <SwitchTheme themes={themes} theme={theme} setTheme={setTheme} />
            )}
          </div>
        </div>
        <div className="mt-4">
          {isTableLoading && <p className="text-center py-4">Loading ...</p>}
          {!isTableLoading && theme === "table" && (
            <DataTable
              columns={columns}
              data={currentTableData}
              customStyles={customStyles}
              // onRowClicked={onRowClick}
            />
          )}
          {!isTableLoading && theme === "tile" && (
            <TileTable
              columns={columns}
              data={currentTableData}
              // onRowClicked={onRowClick}
            />
          )}
        </div>
      </div>
      <div className="mt-5">
        <Pagination
          onPageChange={(page) => setCurrentPage(page)}
          totalCount={data.length}
          siblingCount={1}
          currentPage={currentPage}
          pageSize={perPage}
        />
      </div>
    </>
  );
}

export default Table;
