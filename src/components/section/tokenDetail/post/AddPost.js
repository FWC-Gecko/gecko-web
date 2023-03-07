import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useLoading from "../../../../hook/useLoading";
import usePost from "../../../../hook/usePost";

function AddPost() {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const { setLoading } = useLoading();
  const { addPost } = usePost();

  const [type, setType] = useState("bullish");
  const [description, setDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return false;
    }

    const req = {
      text: description,
      status: type,
    };
    setLoading(true);
    const res = await addPost(req);
    setLoading(false);
    if (res) {
      setDescription("");
    }
  };

  return (
    <div className="px-4 py-2 border-b border-[#DFDFDF]">
      <form onSubmit={onSubmit}>
        <div className="flex justify-between items-center ">
          <div className="flex justify-start items-center gap-2">
            <img
              src={user?.avatar || "/img/user-avatar.png"}
              alt=""
              className="w-7 h-7 rounded-full"
            />
            <div>
              <p>{user?.userName}</p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <p
              className={`rounded-md pr-3 pl-1 items-center flex justify-center cursor-pointer text-xs ${
                type === "bullish"
                  ? "bg-[#16C784] text-white"
                  : "border border-[#DFDFDF]"
              }`}
              onClick={() => {
                setType("bullish");
              }}
            >
              <ArrowDropUpIcon />
              Bullish
            </p>
            <p
              className={`rounded-md pr-3 pl-1 items-center flex justify-center cursor-pointer text-xs ${
                type === "bearish"
                  ? "bg-[#EA3943] text-white"
                  : "border border-[#DFDFDF]"
              }`}
              onClick={() => {
                setType("bearish");
              }}
            >
              <ArrowDropDownIcon />
              Bearish
            </p>
          </div>
        </div>
        <div className="mt-2">
          <textarea
            className="bg-transparent rounded-lg border border-[#DFDFDF] outline-0 px-3 py-2 w-full"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white text-sm px-5 py-1 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow flex items-center ml-auto gap-2 whitespace-nowrap"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
