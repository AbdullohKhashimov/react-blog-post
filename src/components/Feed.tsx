import React from "react";
import Post from "./Post";
import "../styles/feed.css";

interface FeedProps {
  posts: any;
}
const Feed = (props: FeedProps) => {
  const { posts } = props;
  return (
    <div className="feed-container">
      {posts.map((item: any) => (
        <Post key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Feed;
