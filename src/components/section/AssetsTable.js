import { style } from "@mui/system";
import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

function AssetsTable() {
  const navigate = useNavigate();

  const columns = [
    { name: "#", selector: (row) => row.no, width: "40px" },
    { name: "Name", selector: (row) => row.name, width: "150px" },
    { name: "Price", selector: (row) => row.price },
    { name: "1h%", selector: (row) => row.hourPercent, width: "70px" },
    { name: "24h%", selector: (row) => row.dayPercent, width: "70px" },
    { name: "7d%", selector: (row) => row.weekPercent, width: "70px" },
    { name: "Market Cap", selector: (row) => row.marketCap },
    { name: "Volume(24h)", selector: (row) => row.dayVolume },
    { name: "Circulating Supply", selector: (row) => row.circulatingSupply },
    { name: "Last 7 Days", selector: (row) => row.last7days },
  ];

  const data = [
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
    },
    {
      no: 1,
      name: (
        <div className="flex justify-start gap-3 py-2">
          <img
            src="/img/tokens/ETH1.png"
            alt=""
            className="h-8 w-8 rounded-full"
          />
          <div>
            <p className="text-white font-bold text-md">BitTorrent</p>
            <p className="text-[#9B9B9B] text-sm">BTT</p>
          </div>
        </div>
      ),
      price: "$0.0000006751",
      hourPercent: <p className="text-[#16C784]">0.13%</p>,
      dayPercent: "1.69%",
      weekPercent: "4.14%",
      marketCap: "$640,202,503",
      dayVolume: (
        <div>
          <p>$19,718,089</p>
          <p className="text-[#C8C8C8]">29,217,832 BTT</p>
        </div>
      ),
      circulatingSupply: "947,962,000,000,000 BTT",
      last7days: <img src="/img/chart.png" alt="" />,
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

  const onRowClick = async (row) => {
    console.log(row);
    navigate(`/token-detail/${row?._id}`);
  };

  return (
    <div className="py-5 sm:py-10">
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
            onRowClicked={onRowClick}
            pagination
          />
        </div>
      </div>
    </div>
  );
}

export default AssetsTable;
