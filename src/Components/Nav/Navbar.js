import React from "react";
import Hoverbutton from "../Hoverbutton";
import { Reveal, RevealTop } from "../Reveal";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "About", href: "#about", current: true },
  { name: "Experience", href: "#experience", current: false },
  { name: "Works", href: "#works", current: false },
  { name: "Timeline", href: "#", current: false },
  { name: "Contact", href: "#contact", current: false },
  { name: "Co", href: "#contact", current: false },
];

export default function Example() {
  const location = useLocation();
  const navigate = useNavigate();
  const pageData = location?.state?.pagedata;
  console.log("in mainpage loc data", location.state);
  if (!location.state) {
    console.log("in mainpage loc data", location.state);
  } else {
    navigate(-1);
  }

  var delayInc = 0.25;
  return (
    <>
      <div className="navbar bg-white dark:bg-[#0a192f]  scroll-smooth fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-green-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                navigation.map((item, index) => (
                  <RevealTop duration={0.5} delay={(delayInc += 0.1)}>
                    <li className="hover:text-green-400" key={index}>
                      <a href={item.href}>
                        <span className="text-green-400 text-sm font-mono">
                          0{index + 1 + ". "}
                        </span>
                        {item.name}
                      </a>
                    </li>
                  </RevealTop>
                )) //Button and Hidden Menu
              }
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navigation.map((item, index) => (
              <RevealTop duration={0.5} delay={(delayInc += 0.1)}>
                <li className="hover:text-green-400 text-sm">
                  <a href={item.href}>
                    <span className="text-green-400 font-mono">
                      0{index + 1 + ". "}
                    </span>
                    {item.name}
                  </a>
                </li>
              </RevealTop>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
