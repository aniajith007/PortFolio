import React from "react";
import About from "./Hero/about";
import VerticalTabs from "./Experience/Experience";
import Works from "./Works/Works";

function Sections() {
  const tabs = [
    {
      title: "LucasTVS",
      content_title: "React Developer",
      duration: "Mar 2022 - Present",
      content: [
        {
          p: "Developed, maintained, and shipped production code for HR projects primarily using HTML, TailwindCSS, MUI, ReactJS, and NodeJS",
        },
        {
          p: "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
        },
        {
          p: "Developed Cross-platform mobile application for Android & IOS using Ionic React",
        },
        {
          p: "Side by side Supporting the ERP Software they developed their own for whole company production modules.",
        },
      ],
    },
    {
      title: "Another Reputed company!!",
      content_title: "Developer",
      duration: "May be in future",
      content: [        
        {
          p: "Process on going....",
        },
      ],
    }    
  ];
  return (
    <>
      {" "}
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <VerticalTabs tabs={tabs} />
      </section>
      {/* <section id="works">
        <Works/>
      </section> */}
    </>
  );
}

export default Sections;
