import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function Estimate() {
  return (
    <div className="text-color2 dark:text-white rounded-2xl my-10 sm:my-20">
      <div className="flex justify-between flex-col-reverse sm:flex-row items-center gap-10">
        <div className="sm:w-1/2">
          <p className="text-2xl sm:text-4xl font-bold tracking-widest text-center sm:text-start leading-snug">
            <span className="text-[#BA4DF9]">Social Bitcoin</span> Price
            Estimates
          </p>
          <p className="text-lg sm:text-xl mt-5 leading-relaxed text-center sm:text-start">
            This feature is in beta testing. Place your estimates for next 6
            months and see what other’s are thinking about it. Data displayed
            are based on user input compiled by CoinMarketCap. The cut-off for
            estimates for each month-end is on the 21st of each month.
          </p>
          <div className="flex justify-between gap-6 mt-5">
            <div className="bg-[#121318] rounded-lg w-full p-6">
              <div className="flex justify-between items-center gap-4 border-b border-white pb-4">
                <div>
                  <p className="text-white text-lg">31/12/2022</p>
                  <p className="flex justify-start text-[#636363] -ml-1 mt-1">
                    <PersonIcon />
                    71 Voted
                  </p>
                </div>
                <CalendarTodayIcon className="text-white" />
              </div>
              <p className="mt-3 text-xl">Place your estimate</p>
              <p className="text-[#636363]">
                At least 1 to see how others estimate
              </p>
              <button className="px-4 py-2 rounded-full bg-[#F2F2F2]/20 text-[#27282C] shadow mt-6">
                Estimate Closed
              </button>
            </div>
            <div className="bg-[#121318] rounded-lg w-full p-6">
              <div className="flex justify-between items-center gap-4 border-b border-white pb-4">
                <div>
                  <p className="text-white text-lg">31/12/2022</p>
                  <p className="flex justify-start text-[#636363] -ml-1 mt-1">
                    <PersonIcon />
                    22 Voted
                  </p>
                </div>
                <CalendarTodayIcon className="text-white" />
              </div>
              <p className="mt-3 text-xl">Place your estimate</p>
              <p className="text-[#636363]">
                At least 1 to see how others estimate
              </p>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-6">
                Estimate Closed
              </button>
            </div>
          </div>
          <div className="flex justify-center sm:justify-start">
            <button className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-6">
              Shoe all
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        <div className="sm:w-1/2">
          <img src="/img/prt1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Estimate;
