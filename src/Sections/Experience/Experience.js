import React, { useState } from "react";

const VerticalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="pl-8 pr-8 lg:pl-64 lg:pt-10 lg:pr-24 lg:pb-4 bg-[#0a192f] min-h-screen">
      <header className="lg:mb-6">
        <span className="font-semibold text-xl text-green-400">02.</span>
        <span className="font-semibold text-xl link-underline link-underline-black">
          {" "}
          Works
          <span className="divider flex" />{" "}
        </span>
      </header>
      <div className="flex">
        <div className="flex-none w-1/4">
          <ul className="flex flex-col space-y-1">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer font-semibold hover:bg-[#112240] hover:text-green-300 bg-opacity-5  transform duration-200 p-2 ${
                  activeTab === index
                    ? "border-l-green-400 border-l-2  bg-[#112240] text-green-400 rounded-sm pl-2 delay-300"
                    : "border-l-blue-800 border-l-2"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 ml-4">
          <div className="text-grey-400 font-semibold text-xl">
            {tabs[activeTab].content_title}
            <div className="text-xl text-green-400 font-semibold inline m-2">
              @ {tabs[activeTab].title}
            </div>
          </div>
          <div className="text-grey-100 text-lg mb-2 font-mono font-light">
            {tabs[activeTab].duration}
          </div>

          <ul>
            {tabs[activeTab].content.map((content) => (
              <li class="flex m-2 whitespace-normal font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 lg:m-2 text-green-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
                <p>{content.p}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
