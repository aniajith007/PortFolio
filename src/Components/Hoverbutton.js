import React from "react";

function Hoverbutton({ label, href }) {
  return (
    <a href={href}>
      <button
        className="group relative inline-block text-sm font-medium text-green-400 focus:outline-none focus:ring active:text-green-400"
        //href="/download"
      >
        <span className="absolute inset-0 border border-current"></span>
        <span className="block border border-current px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
          {label}
        </span>
      </button>
    </a>
  );
}

export default Hoverbutton;
