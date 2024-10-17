import React from "react";
import "../styles/home.css";
import Feed from "./Feed";

interface HomeProps {
  posts: any | "" | [];
  setPosts: any | "" | [];
}

const Home = (props: HomeProps) => {
  const { posts, setPosts } = props;
  return (
    <div className="home-container">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p className="home-paragraph">No posts to display</p>
      )}
    </div>
  );
};

export default Home;
