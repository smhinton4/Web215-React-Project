import React from "react";

export default function Navbar() {
  return (
    <header>
      <div className="container mt-4 mb-5">

        <nav className="mt-3">
        <a href="#About" className="p-3 text-black">
            About
          </a>
          <a href="#Projects" className="p-3 text-black">
            Projects
          </a>
          <a href="#Skills" className="p-3 text-black">
            Skills
          </a>
          <a href="#Experience" className="p-3 text-black">
            Experience
          </a>
        </nav>
      </div>
    </header>
  );
}