import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

interface NavProps {
  search: any;
  setSearch: any;
}

const Nav = (props: NavProps) => {
  const { search, setSearch } = props;
  return (
    <div className="nav-container">
      <nav className="nav-search">
        <form className="nav-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search" className="nav-title">
            Search Posts
          </label>
          <input
            className="nav-input"
            id="search"
            type="text"
            placeholder="Search Posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/post/:id">Post</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

// search will be controlled input
