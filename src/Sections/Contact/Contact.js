import React from "react";
import Hoverbutton from "../../Components/Hoverbutton";
import { Reveal } from "../../Components/Reveal";

function Contact() {
  return (
    <>
      <div class="bg-white pl-8 pr-8 lg:pl-28 lg:pr-24 lg:pt-10 lg:pb-4 dark:bg-[#0a192f] min-h-screen">
        <div class="items-center lg:flex lg:ml-12 justify-center">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <Reveal>
              <header className="lg:mb-6 mb-6 text-center">
                <span className="font-semibold text-lg text-green-400">
                  04.
                </span>
                <span className="font-semibold text-lg link-underline link-underline-black text-green-400 font-mono">
                  {" "}
                  What's Next?
                  {/* <span className="divider flex" />{" "} */}
                </span>
              </header></Reveal>
              <Reveal>
              <div className="text-5xl text-center font-bold mb-6 font-poppins">
                Get in Touch
              </div>
              </Reveal>
              <Reveal>
              <p className="text-xl text-center mb-6">
                My inbox is always open. Whether you have a question or just
                want to say hi, I’ll try my best to get back to you!
              </p>
              </Reveal>
            </div>
            {/* <div className="lg:ml-44 md:ml-56"> */}
            <Reveal>
            <div className="absolute ml-24 lg:ml-48 lg:left-auto md:ml-72">             
                <Hoverbutton label={"Hello!!"} href={"mailto:swaminathangiridharan@gmail.com"} />
              </div></Reveal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
