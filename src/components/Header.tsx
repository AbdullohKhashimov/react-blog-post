import React from "react";
import "../styles/header.css";

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
    </div>
  );
};

export default Header;
