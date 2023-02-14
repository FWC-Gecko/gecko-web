import React from "react";
import PostItem from "./PostItem";

function Posts({ posts, isDataLoading }) {
  return (
    <div className="max-h-[250px] overflow-auto">
      {isDataLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        posts.map((row, key) => {
          return <PostItem key={key} post={row} />;
        })
      )}
    </div>
  );
}

export default Posts;
