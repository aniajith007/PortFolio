import React from "react";

function Jumbo() {
  return (
    <section class="bg-white dark:bg-[#0a192f] pt-16 pl-8 lg:pl-28 pb-80 lg:pb-32">
      <div class="max-w-screen-xl mr-2 lg:mt-2 mt-20 p-2 lg:py-05 md:py-16">
        <h1 className="text-2xl font-semibold text-green-400 font-mono mb-4">
          Hi, My name is
        </h1>
        <h1 class="mb-4 text-5xl font-bold tracking-tight leading-none text-gray-900  lg:text-7xl dark:text-white">
          Swaminathan Giridharan.
        </h1>
        <p class="mb-4 text-5xl font-bold tracking-tight leading-none text-gray-600 lg:text-7xl dark:text-gray-400">
          I build things for the web.
        </p>
        <p className="text-xl font-semibold pr-2 ">
          I’m a software engineer passionate about learning new skills. Currently, I’m focused on building{" "}
          <span className="text-green-400 break-keep whitespace-nowrap">
            React
          </span>{" "}
          based web & mobile applications.          
        </p>
      </div>
      {/* <div className="container content-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-12 h-12 "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>
      </div> */}            
    </section>
  );
}

export default Jumbo;
