import React from "react";
import { Link } from "react-router-dom";

function Anchor() {
  return (
    <div className="flex justify-around py-6 px-7 text-xl	text-white">
      <div className="font-semibold text-2xl">SHARON INDUSTRIES</div>
      <div className="flex gap-8 text-gray-400">
        <a className="hover:text-red-600" href="/">
          Home
        </a>
        <a className="hover:text-red-600" href="/about">
          About
        </a>
        <Link className="hover:text-red-600" to="/contact">
        
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Anchor;
