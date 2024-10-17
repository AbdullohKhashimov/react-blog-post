import React from "react";
import "../styles/posts.css";
import { Link, useParams } from "react-router-dom";

interface PostPageProps {
  posts: any;
  handleDelete: any;
}
const PostPage = (props: PostPageProps) => {
  const { id } = useParams();
  const { posts, handleDelete } = props;

  const post = posts.find((post: any) => post.id.toString() === id);
  return (
    <div className="postpage-container">
      <article className="postpage-post">
        {post && (
          <>
            <h2 className="post-title">{post.title}</h2>
            <p className="postDate"> {post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h2>No Post Found</h2>
            <Link to="/">Visit Our Homepage</Link>
          </>
        )}
      </article>
    </div>
  );
};

export default PostPage;
