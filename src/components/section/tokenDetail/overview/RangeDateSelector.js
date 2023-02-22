import React, { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DateRange, DateRangePicker } from "react-date-range";

function RangeDateSelector({ setSearchDate, searchDate, setPeriod }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="relative">
      <CalendarTodayIcon onClick={handleOpen} />

      {open && (
        <div className="fixed top-0 left-0 z-[999] bg-black/20 w-screen h-screen">
          <div className="flex justify-center items-center h-screen w-screen">
            <div className="m-auto itemBg3 p-4 rounded-lg">
              <div className="flex justify-between px-3">
                <p className="text-3xl text-color2 dark:text-white">
                  Select Date
                </p>
              </div>
              <div>
                <div className="lg:hidden">
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setSearchDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={searchDate}
                    color="#3d91ff"
                  />
                </div>
                <div className="hidden lg:block text-black">
                  <DateRangePicker
                    onChange={(item) => setSearchDate([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={searchDate}
                    direction="horizontal"
                  />
                </div>
              </div>
              <div className="flex justify-end items-center gap-4">
                <button
                  className="text-sm px-6 py-1.5 rounded-full bg-transparent text-black border border-[#BA4DF9] shadow mt-3"
                  onClick={handleOpen}
                >
                  Cancel
                </button>
                <button
                  className="text-white text-sm px-6 py-1.5 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow mt-3"
                  onClick={() => {
                    setPeriod("DATE");
                    handleOpen();
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RangeDateSelector;
