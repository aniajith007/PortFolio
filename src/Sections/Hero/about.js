import React from "react";
import "../../Css/style.css";
import Card from "../../Card";
import { Reveal } from "../../Components/Reveal";

function About({about}) {
  return (
    <div class="bg-white pl-8 pr-8 lg:pl-28 lg:pr-24 lg:pt-10 lg:pb-4 dark:bg-[#0a192f] min-h-screen">
      <div class="items-center lg:flex lg:ml-12">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <Reveal>
              <header className="lg:mb-6">
                <span className="font-semibold text-xl text-green-400">
                  01.
                </span>
                <span className="font-normal font-poppins text-xl link-underline link-underline-black">
                  {" "}
                  About Me
                  <span className="divider flex" />{" "}
                </span>
              </header>
            </Reveal>
            <Reveal>
              <h1 class="text-3xl font-semibold mt-8 text-gray-800 dark:text-white lg:text-4xl lg:mt-0">
                {about.heading.start}<span class="text-green-500 ">{about.heading.highLight}</span>
              </h1>
            </Reveal>
            <Reveal>
              <p class="mt-3 text-gray-600 dark:text-gray-400 text-xl">
                {about.p1}
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-xl ">
              {about.p2}
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-xl lg:whitespace-nowrap">
              {about.p3}
              </p>
            </Reveal>
            <Reveal>
              <div className="columns-2 m-1 gap-3">
                <ul>
                  {about.knowntechs.map((tech)=>
                  <li class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3 m-1 text-green-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                    {tech}
                  </li>)}                  
                </ul>
              </div>
            </Reveal>            
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-8 lg:mt-0 lg:w-1/2">
          {/* <img
            class="w-full h-full lg:max-w-3xl"
            src="https://merakiui.com/images/components/Catalogue-pana.svg"
            alt="Catalogue-pana.svg"
          /> */}
          <Reveal>
            <Card pictureSrc={about.picturePath}/>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default About;
