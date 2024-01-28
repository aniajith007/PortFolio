import React from "react";
import "../../../Css/style.css";
import Card from "../../../Components/Card";
import { Reveal } from "../../../Components/Reveal";
import { WindupChildren, Pace, StyledText } from "windups";
import overlayimg from '../../../Assets/1706441122303.png'
import { Tilt } from 'react-tilt'
const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
function About({ about }) {
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
              <WindupChildren>
                <Pace ms={80}><StyledText>
                  <h1 class="text-3xl font-semibold mt-8 text-gray-800 dark:text-white lg:text-4xl lg:mt-0">
                    {about.heading.start}<span class="text-green-500 ">{about.heading.highLight}</span>
                  </h1>
                </StyledText>
                </Pace>
              </WindupChildren>
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
                  {about.knowntechs.map((tech) =>
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
            {/* <Tilt options={defaultOptions} style={{ height: 300, width: 300 }}>
               <img src = {overlayimg}  className='absolute flex inset-x-2 z-30' height={300} width={300}/>
              <Card pictureSrc={about.picturePath} />
            </Tilt> */}
            <Tilt options={defaultOptions} style={{ height: 300, width: 300 }}>
            <div class="relative">
              {/* <img src={overlayimg} alt="Image 1" class="w-full h-full object-cover" /> */}
              <Card pictureSrc={about.picturePath} />
              <div class="absolute top-2 left-0 w-full h-full">
                <img src={overlayimg} alt="Image 2" class="w-full h-full object-cover opacity-100 inset-8 z-40" />
              </div>
            </div>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default About;
