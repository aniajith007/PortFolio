import React from "react";
import Hoverbutton from "../Hoverbutton";
import { Reveal, RevealTop } from "../Reveal";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { pageData } from "../../Raw/Raw";
import axios from "axios";

const navigation = [
  { name: "About", href: "#about", current: true },
  { name: "Experience", href: "#experience", current: false },
  // { name: "Works", href: "#works", current: false },
  // { name: "Timeline", href: "#", current: false },
  { name: "Contact", href: "#contact", current: false },
  { name: "Resume", href: "#", current: false },
];

export default function Example() {
  const location = useLocation();
  const navigate = useNavigate();
  //const pageData = location?.state?.pagedata;
  //const pageData_raw = pageData
  //console.log("in mainpage loc data", location.state);
  // if (!location.state) {
  //   console.log("in mainpage loc data", location.state);
  // } else {
  //   navigate(-1);
  // }

  var delayInc = 0.25;
  const fileId = '1JRB4nne2oxu9hrUTgvmY9neYg8BSGtZ5'; // Replace with your actual Google Drive file ID
  const apiKey = 'AIzaSyBW4wH4cSOUERpXYlbCKEbTtgCUi6zzaAI'; // Replace with your actual Google API key

  const downloadFile = () => {
    const apiUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;

    axios.get(apiUrl, { responseType: 'blob'})
      .then(response => {
        // Handle the file download response
        const blob = new Blob([response.data]);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'downloaded_file.xlsx'; // Replace with the desired file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        // Handle errors
        console.error('Error downloading file:', error);
      });
  };

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
                    <li className="hover:text-green-400" key={index} onClick={item.name == 'Resume'&&downloadFile}>
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
                <li className="hover:text-green-400 text-sm" onClick={item.name == 'Resume'&&downloadFile}>
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
