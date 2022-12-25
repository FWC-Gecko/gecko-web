import { style } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../common/table/Table";

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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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
        <div className="flex justify-start items-center gap-3 py-2">
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

  const onRowClick = async (row) => {
    console.log(row);
    navigate(`/token-detail/${row?._id}`);
  };

  return (
    <div className="py-5 sm:py-10">
      <Table data={data} columns={columns} onRowClick={onRowClick} />
    </div>
  );
}

export default AssetsTable;
