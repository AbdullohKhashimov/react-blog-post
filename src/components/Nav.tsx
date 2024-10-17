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
          <label htmlFor="search" className="nav-title"></label>
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
          <li className="nav-li">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-li">
            <Link className="nav-link" to="/post/:id">
              Post
            </Link>
          </li>

          <li className="nav-li">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;

// search will be controlled input
