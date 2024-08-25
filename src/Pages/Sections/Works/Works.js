import React from "react";
import Doublediv_Card from "../../../Doublediv_Card";

function Works() {
  return (
    <div class="pl-8 pr-8 lg:pl-36 lg:pr-24 lg:pt-10 lg:pb-4 pt-4 bg-[#0a192f] min-h-screen selection:text-gray-50">
      <header className="lg:mb-6">
        <span className="font-semibold text-xl text-green-400">03.</span>
        <span className="font-semibold text-xl link-underline link-underline-black">
          {" "}
          Some Things I’ve Built
          <span className="divider flex" />{" "}
        </span>
      </header>
      <Doublediv_Card/>
    </div>
  );
}

export default Works;
