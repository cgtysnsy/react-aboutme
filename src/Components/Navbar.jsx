import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home Page</Link>
      <Link to="/tools">Tools</Link>
      <Link to="/mychoices">My choices</Link>
      <Link to="/websitetofollow">Website to follow</Link>
      <a href="https://www.seytech.co/">Seytech</a>
    </div>
  );
}
