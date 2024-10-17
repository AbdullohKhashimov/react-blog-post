import React from "react";
import { Link } from "react-router-dom";
import "../styles/post.css";

interface PostProps {
  item: any;
}

const Post = (props: PostProps) => {
  const { item } = props;
  return (
    <div className="post-container">
      <article className="post-article">
        <Link to={`/post/${item.id}`} className="post-link">
          <h2 className="post-title">{item.title}</h2>
        </Link>

        <p className="post-body">
          {item.body.length <= 35 ? item.body : `${item.body.slice(0, 35)}`}
        </p>
        <p className="post-parag"> {item.datetime} </p>
      </article>
    </div>
  );
};

export default Post;
