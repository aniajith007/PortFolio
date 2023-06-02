import React from "react";

function SideElements() {
  return (
    <>
      <aside
        id="default-sidebar"
        class="hidden lg:block fixed lg:top-96 lg:left-4 lg:z-40 lg:w-10 lg:h-screen transition-transform -translate-x-full sm:translate-x-0 md:translate-x-0"
        aria-label="Sidebar"
      >
        <ul>
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
          <li className="m-2 mb-4  hover:text-green-400  transition ease-in-out hover:-translate-y-1 hover:scale-100  duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <title>Instagram</title>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </li>
          <li className="m-2 mb-4  hover:text-green-400  transition ease-in-out hover:-translate-y-1 hover:scale-100  duration-100">
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
          {/* <li className="m-2 mb-4 transition-colors hover:text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </li> */}
          {/* <li className="m-2 mb-4 transition-colors hover:text-green-400">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"              
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z"
                fill="#f2f2f2"
              ></path>
              <path
                d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z"
                fill="#f2f2f2"
              ></path>
              <path
                d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z"
                fill="#f2f2f2"
              ></path>
            </svg>
          </li> */}
        </ul>
        <div class="ml-5 mt-2 inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
      </aside>
      <aside
        id="default-sidebar"
        class=" hidden lg:block fixed lg:top-96 lg:right-0 lg:z-40  lg:h-screen transition-transform -translate-x-full sm:translate-x-0 md:translate-x-0"
        aria-label="Sidebar"
      >
        <h6 className="rotate-90 mt-10 cursor-pointer absolute hover:text-green-500 font-medium transition ease-in-out hover:-translate-y-1 hover:scale-110 delay-150 duration-100">
          SwaminathanGiridharan@gmail.com
        </h6>
        <div className="mt-52 ml-32 mr-9 inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
      </aside>
    </>
  );
}

export default SideElements;
