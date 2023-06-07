import React from "react";
import { Reveal } from "../Components/Reveal";

function Jumbo({jumbodata}) {
  return (
    
    <section class="bg-white dark:bg-[#0a192f] pt-16 pl-8 lg:pl-28 pb-80 lg:pb-32 font-poppins">
      
      <div class="max-w-screen-xl mr-2 lg:mt-2 mt-20 p-2 lg:py-05 md:py-16">
      <Reveal duration={0.5} delay={0.25}>
        <h1 className="text-xl font-normal text-green-400 mb-4">
          {jumbodata.subHeading}
        </h1>
        </Reveal>
        <Reveal duration={0.5} delay={0.40}>
        <h1 class="mb-4 text-5xl font-bold tracking-tight leading-none text-gray-900  lg:text-7xl dark:text-white">
          {jumbodata.name}
        </h1>
        </Reveal>
        <Reveal duration={0.5} delay={0.65}>
        <p class="mb-4 text-5xl font-bold tracking-tight leading-none text-gray-600 lg:text-7xl dark:text-gray-400">
          {jumbodata.mainDesc}
        </p>
        </Reveal>
        <Reveal duration={0.5} delay={0.75}>
        <p className="text-xl font-semibold pr-2 ">
          {jumbodata.subDesc.normalStart}
          <span className="text-green-400 break-keep whitespace-nowrap">
            {jumbodata.subDesc.highLight}
          </span>{" "}
          {jumbodata.subDesc.normalEnd}
        </p>
        </Reveal>
      </div>          
    </section>
    
  );
}

export default Jumbo;
