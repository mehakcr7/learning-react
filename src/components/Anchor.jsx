import React from "react";

function Anchor() {
  return (
    <div className="flex justify-around py-6 px-7 text-xl	text-white">
      <div className="font-semibold">SHARON INDUSTRIES</div>
      <div className="flex gap-4">
        <a className="hover:text-red-600" href="">Home</a>
        <a className="hover:text-red-600" href="">About</a>
        <a className="hover:text-red-600" href="">Contact</a>
      </div>
    </div>
  );
}

export default Anchor;
