import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="bg-[#0B0B0F]">
      <div className="n-container">
        <div className="bg-[#1B1C23]/70 rounded-3xl flex justify-between items-center">
          <div className="pl-10">
            <p className="text-white text-3xl font-bold">Profile</p>
            <p className="text-white text-sm">
              Home {`>`} <span className="text-[#BA4DF9]">Profile</span>
            </p>
          </div>
          <div>
            <img src="/img/profile-bg.png" alt="" className="h-48" />
          </div>
        </div>
        <div className="py-10 flex justify-between gap-10">
          <div className="sm:w-1/3">
            <div className="bg-[#1B1C23]/70 rounded-2xl p-6">
              <div className="flex justify-start gap-4 items-center bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] rounded-full p-1 cursor-pointer">
                <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full p-3">
                  <img src="/img/user.png" alt="" />
                </div>
                <p className="text-white">Profile</p>
              </div>
              <div className="flex justify-start gap-4 items-center rounded-full p-1 mt-4 cursor-pointer hover:bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9]">
                <div className="bg-white/5 w-10 h-10 flex justify-center items-center rounded-full p-3">
                  <img src="/img/notification.png" alt="" />
                </div>
                <p className="text-white">Notification</p>
              </div>
            </div>

            <div className="bg-[#1B1C23]/70 rounded-2xl p-6 mt-10">
              <img
                src={user?.avatar}
                alt=""
                className="w-32 m-auto rounded-full"
              />
              <p className="text-center text-white font-bold text-lg mt-4">
                {user?.name}
              </p>
              <p className="text-center text-white mt-0">{user?.email}</p>
              <div className="flex justify-center mt-5">
                <button className="w-max px-5 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] text-white m-auto">
                  Edit Avatar
                </button>
              </div>
            </div>
          </div>
          <div className="sm:w-2/3">
            <p className="text-xl font-medium text-white">Information</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
