import React from "react";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import PostPage from "./components/PostPage";
import NewPost from "./components/NewPost";
import About from "./components/About";
import Missing from "./components/Missing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/new-post">
          <NewPost />
        </Route>

        <Route path="/post/id">
          <PostPage />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/*">
          <Missing />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

/*
  react-router-dom is a popular routing library for React applications that allows
developers to create navigation between different views or components. It handles browser history,
path matching, and rendering of the appropriate components based on the URL path.
Think of it as a way to manage what content is displayed to the user based on the current URL.
 */
