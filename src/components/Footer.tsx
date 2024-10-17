import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const today = new Date();
  return (
    <div className="footer-container">
      <div className="footer-copyright">
        <p className="copyright-tag">Copyright &copy;</p>
      </div>
      <div className="footer-date">
        <p className="footer-ptag-date">{today.getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
