import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="missing-container">
      <h2 className="missing-h2">Page Not Found</h2>

      <p className="missing-ptag">
        <Link to="/" className="missing-link">
          Visit home page
        </Link>
      </p>
    </div>
  );
};

export default Missing;
