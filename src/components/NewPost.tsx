import React from "react";
import "../styles/new-post.css";

interface NewpostProps {
  handleSubmit: any;
  postTitle: any;
  setPostTitle: any;
  postBody: any;
  setPostBody: any;
}

const NewPost = (props: NewpostProps) => {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } =
    props;
  return (
    <div className="newpost-container">
      <div className="newpost-title">
        <h2>New Post</h2>
      </div>

      <div className="form">
        <form className="newpost-form" onSubmit={handleSubmit}>
          <label htmlFor="postTitle" className="newpost-title2">
            Title
          </label>
          <input
            className="newpost-input"
            id="postTitle"
            type="text"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <label htmlFor="postBody" className="newpost-body-title">
            Post
          </label>
          <textarea
            id="postBody"
            className="newpost-body"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />

          <button type="submit" className="newpost-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
