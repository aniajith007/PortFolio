import React from "react";
import { Reveal } from "../../Components/Reveal";
import { WindupChildren, Pace, StyledText, Pause } from "windups";
import { Tilt } from 'react-tilt'
import Avatar from "../../Components/SplineModel/Avatar";
function Jumbo({ jumbodata }) {
  return (
    <section class="bg-white min-h-screen items-center md:grid grid-cols-2 gap-4 content-center dark:bg-[#0a192f] pt-16 pl-8 lg:pl-28 pb-80 lg:pb-32 font-poppins">
      <div class="max-w-screen-xl mr-2 lg:mt-2 mt-20 p-2 lg:py-05 md:py-16">
        <WindupChildren>
          <Reveal duration={0.5} delay={0.25}>
            <h1 className="text-xl font-normal text-green-400 mb-4 selection:text-gray-50">
              <Pace ms={80}>
                <StyledText>{jumbodata.subHeading}</StyledText>
              </Pace>
            </h1>
          </Reveal>
        </WindupChildren>
        <Reveal duration={0.5} delay={0.4}>
          <h1 class="mb-4 text-5xl font-bold tracking-tight leading-none text-gray-900  lg:text-7xl dark:text-white selection:text-green-500 select-all">
            {jumbodata.name}
          </h1>
        </Reveal>
        <Reveal duration={0.5} delay={0.65}>
          <p class="mb-4 text-5xl font-bold tracking-tight leading-none text-gray-600 lg:text-7xl dark:text-gray-400 selection:text-green-200">
            {jumbodata.mainDesc}
          </p>
        </Reveal>
        <Reveal duration={0.5} delay={0.75}>
          <WindupChildren>
            <p className="text-xl font-semibold pr-2 selection:text-green-300">
              {jumbodata.subDesc.normalStart}
              <span className="text-green-400 break-keep whitespace-nowrap selection:text-red-400">
                {jumbodata.subDesc.highLight}
              </span>{" "}
              {jumbodata.subDesc.normalEnd}
            </p>
          </WindupChildren>
        </Reveal>
      </div>
      <div className="my-4 hidden sm:block">
        <Avatar />
      </div>
    </section>
  );
}

export default Jumbo;
