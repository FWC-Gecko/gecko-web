import React from "react";
import DataTable from "react-data-table-component";

function Transactions() {
  const columns = [
    { name: "Txn Hash", selector: (row) => row.txnHash },
    { name: "Time", selector: (row) => row.time },
    { name: "From", selector: (row) => row.from },
    { name: "to", selector: (row) => row.to },
    { name: "Quantity", selector: (row) => row.quantity },
  ];

  const data = [
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
    {
      txnHash: <p className="text-[#D07FFF]">54x6df4v5sx6...</p>,
      time: <p>5 min ago</p>,
      from: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      to: <p className="text-[#D07FFF]">54x6df4v5sx6zxv...</p>,
      quantity: <p>5 min ago</p>,
    },
  ];

  const customStyles = {
    table: {
      style: {
        backgroundColor: "transparent",
        color: "white",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#0B0B0F",
        minHeight: "50px",
        borderBottomWidth: "1px",
        borderColor: "#23262F",
        borderWidth: "1px",
        borderRadius: "32px",
        color: "white",
      },
    },
    rows: {
      style: {
        paddingTop: "3px",
        backgroundColor: "transparent",
        color: "white",
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
          background: "linear-gradient(58.78deg, #5B46DF 1.9%, #BA4DF9 98.4%)",
        },
      },
    },
  };

  return (
    <div className="bg-[#121318] p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex justify-start gap-6">
          <div className="bg-[#21232C] px-4 h-10 rounded-full flex justify-start items-center gap-2 cursor-pointer">
            <img src="/img/star.png" alt="" className="h-4" />
            <p className="text-white">Watchlist</p>
          </div>
          <div className="bg-[#21232C] px-4 h-10 rounded-full flex justify-start items-center gap-2 cursor-pointer">
            <img src="/img/circle.png" alt="" className="h-4" />
            <p className="text-white">Portfolio</p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="mt-4">
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          pagination
        />
      </div>
    </div>
  );
}

export default Transactions;
