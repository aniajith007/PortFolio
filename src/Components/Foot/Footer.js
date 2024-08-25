import React from "react";
import { Reveal,RevealLeft } from "../Reveal";

function Footer({footerData}) {
  return (
    <footer class="bg-white dark:bg-[#0a192f] selection:text-gray-50">
      <div class="container px-6 py-8 mx-auto">
        <div class="flex flex-col items-center text-center">                  
        <ul className="lg:hidden md:hidden flex">
          {footerData.sideelem_sm.links.map((link) => (
            <>
              {link.name === "github" ? (
                <RevealLeft duration={0.5} delay={0.25}>
                  <a href={link.href}>
                    <li className="m-2 mb-4  hover:text-green-400 transition ease-in-out hover:-translate-y-1 hover:scale-100  duration-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </li>
                  </a>
                </RevealLeft>
              ) : (
                ""
              )}
              {link.name === "instagram" ? (
                <RevealLeft duration={0.5} delay={0.5}>
                  <a href={link.href}>
                    <li className="m-2 mb-4   hover:text-green-400  transition ease-in-out hover:-translate-y-1 hover:scale-100  duration-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <title>Instagram</title>
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </li>
                  </a>
                </RevealLeft>
              ) : (
                ""
              )}

              {link.name === "linkedin" ? (
                <RevealLeft duration={0.5} delay={0.75}>
                  <a href={link.href}>
                    <li
                      className="m-2 mb-4 hover:text-green-400  transition ease-in-out hover:-translate-y-1 hover:scale-100  duration-100"
                      href={link.href}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <title>LinkedIn</title>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </li>
                  </a>
                </RevealLeft>
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
        </div>

        {/* <hr class="my-10 border-gray-200 dark:border-gray-700" /> */}
        <Reveal>
        <div class="flex flex-col items-center sm:flex-row sm:justify-between">                              
            <p class="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400 font-poppins">
              {footerData.footerp.p}
            </p>            
        </div>
        </Reveal>
      </div>
    </footer>
  );
}

export default Footer;
