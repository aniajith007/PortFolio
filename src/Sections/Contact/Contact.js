import React from "react";
import Hoverbutton from "../../Components/Hoverbutton";

function Contact() {
  return (
    <>
      <div class="pl-8 pr-8 lg:pl-28 lg:pr-24 lg:pt-10 lg:pb-4 bg-[#0a192f] min-h-screen">
        <div class="items-center lg:flex lg:ml-12 justify-center">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <header className="lg:mb-6 text-center">
                <span className="font-semibold text-lg text-green-400">
                  04.
                </span>
                <span className="font-semibold text-lg link-underline link-underline-black text-green-400 font-mono">
                  {" "}
                  What's Next?
                  {/* <span className="divider flex" />{" "} */}
                </span>
              </header>
              <div className="text-5xl text-center font-bold mb-6 font-poppins">
                Get in Touch
              </div>
              <p className="text-xl text-center mb-6">
                My inbox is always open. Whether you have a question or just
                want to say hi, I’ll try my best to get back to you!
              </p>
              {/* <div className="absolute left-36 lg:ml-44 lg:left-auto md:ml-72"> */}              
            </div>
            <div className="lg:ml-44 md:ml-56">
                <Hoverbutton label={"Hello"} href={"mailto:swaminathangiridharan@gmail.com"} />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
