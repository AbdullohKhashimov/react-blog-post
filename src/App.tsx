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
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first Post",
      datetime: "July 01, 2024, 11:20:35 AM",
      body: "I have just fallen in love with the song",
    },
    {
      id: 2,
      title: "My second Post",
      datetime: "June 02, 2024, 06:21:35 AM",
      body: "I started going to the gym",
    },
    {
      id: 3,
      title: "My third Post",
      datetime: "May 25, 2024, 4:20:20 PM",
      body: "React has become my one and only",
    },
    {
      id: 4,
      title: "My fourth Post",
      datetime: "August, 11, 2024, 9:20:35 PM",
      body: "I found my love",
    },
  ]);
  const [search, setSearch] = useState("");
  return (
    <>
      <Header title="React Blog Post" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
        <Route path="/" element={<Home />} />
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
