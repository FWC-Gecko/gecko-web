import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SmsIcon from "@mui/icons-material/Sms";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useCommunity from "../../../hook/useCommunity";
import { useEffect } from "react";
import AddPost from "./post/AddPost";
import Posts from "./post/Posts";
import { useEffectOnce } from "../../../hook/useEffectOnce";
import usePost from "../../../hook/usePost";
import Tab from "../../common/Tab";

function Chat({ tokenInfo }) {
  const { getCommunityFollowersCount, followCommunity } = useCommunity();
  const [followerCount, setFollowerCount] = useState([]);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffectOnce(() => {
    const initComponent = async () => {
      const _followerCount = await getCommunityFollowersCount();
      setFollowerCount(_followerCount);
    };

    initComponent();
  });

  const userFollowCommunity = async () => {
    if (!isAuthenticated) {
      toast.error("You should login to follow");
      return;
    }

    if ((await followCommunity()) === true) {
      setFollowerCount(followerCount + 1);
      toast.success("Thanks for following our FWC Digital community!");
    }
  };

  const [isDataLoading, setDataLoading] = useState(false);
  const { getPosts } = usePost();
  const [posts, setPosts] = useState([]);

  const types = [
    { slug: "top", value: "Top" },
    { slug: "latest", value: "Latest" },
  ];
  const [type, setType] = useState(types[0].slug);

  async function getPostsData() {
    setDataLoading(true);
    const res = await getPosts(type);
    setDataLoading(false);
    setPosts(res);
  }

  useEffect(() => {
    getPostsData();
  }, [type]);

  return (
    <div className="w-full text-[#101115] dark:text-white mt-10 sm:mt-0">
      <div className="sm:flex justify-between items-center">
        <p className="text-xl sm:text-3xl text-center sm:text-start font-medium">
          Live {tokenInfo?.name} Chat
        </p>

        <a
          href="https://t.me/QATAR2022TOKEN_BSC"
          target={"_blank"}
          className="text-white px-6 py-2 m-auto mt-3 sm:m-0 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow flex items-center gap-2"
          rel="noreferrer"
        >
          View on Community
          <ChevronRightIcon />
        </a>
      </div>
      <div className="mt-4 bg-[#F1F3F5] dark:bg-[#121318] rounded-2xl border border-[#DFDFDF] dark:border-[#23262F]">
        <div className="border-b border-[#DFDFDF] dark:border-[#23262F] flex justify-between items-center px-6 py-4 w-full">
          <div className="flex justify-start items-center gap-3 w-full mt-3 sm:mt-0">
            <img src="/img/logo.png" alt="" className="h-12 w-12" />
            <div>
              <p className="text-md sm:text-lg dark:text-white">FWC Digital</p>
              <p className="text-[#B9B9B9]">{followerCount} Followers</p>
            </div>
          </div>

          <button
            onClick={userFollowCommunity}
            className="text-white text-sm px-6 py-2 rounded-full bg-gradient-to-r from-[#5B46DF] to-[#BA4DF9] shadow flex items-center gap-2 whitespace-nowrap"
          >
            + Follow
          </button>
        </div>
        <AddPost getPostsData={getPostsData} />

        <div className="py-2">
          <div className="px-4 flex justify-between">
            <Tab
              items={types}
              selectedItem={type}
              setItem={setType}
              size="sm"
            />
          </div>
          <div>
            <Posts posts={posts} isDataLoading={isDataLoading} />
          </div>
          {/* <div>{type === "top" && <TopPosts />}</div> */}
        </div>
        {/* <div className="p-6 min-h-[135px]">
          {!isAuthenticated && (
            <div className="flex justify-center items-center">
              <Link className="text-3xl text-cyan-600" to={"/login"}>
                Login to view
              </Link>
            </div>
          )}
        </div> */}
        <div className="border-t border-[#DFDFDF] dark:border-[#23262F] flex justify-between items-center px-6 py-4 w-full">
          <div className="flex justify-center gap-1 items-center mt-3 sm:mt-0">
            <SmsIcon />
            <p>4</p>
          </div>

          <div className="flex justify-center gap-1 items-center">
            <LoopIcon />
            <p>Repost</p>
          </div>
          <div className="flex justify-center gap-1 items-center">
            <FavoriteBorderIcon />
            <p>4</p>
          </div>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
