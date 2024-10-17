import React from "react";
import "../styles/home.css";
import Feed from "./Feed";

interface HomeProps {
  posts: any | "" | [];
}

const Home = (props: HomeProps) => {
  const { posts } = props;
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
