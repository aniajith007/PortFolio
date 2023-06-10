import React from "react";
import SideElements from "../../Components/SideElements/SideElements";
import Jumbo from "../MainHero/Jumbo";
import Sections from '../Sections';
import Footer from "../../Components/Foot/Footer";

function MainPage() {
  // navheadings: ["About", "Experiance", "Works", "Timeline", "Contact", "TS"],
  const pageData = {
    navheadings: ["About", "Experiance", "Works", "Contact", "TS"],
    SideElementsData: {
      rightEmail: {
        view: "SwaminathanGiridharan@gmail.com",
        email: "mailto:swaminathangiridharan@gmail.com",
      },
      links: [
        {
          name: "github",
          href: "https://www.google.com",
        },
        {
          name: "instagram",
          href: "https://www.instagram.com/aniajith_007/",
        },
        {
          name: "linkedin",
          href: "https://https://www.linkedin.com/in/swaminathan-giridharan/",
        },
      ],
    },
    JumboData: {
      subHeading: "Hi, My name is",
      name: "Swaminathan Giridharan.",
      mainDesc: "I build things for the web.",
      subDesc: {
        normalStart:
          "I’m a software engineer passionate about learning new skills. Currently, I’m focused on building",
        highLight: " React ",
        normalEnd: "based web & mobile applications.",
      },
    },
    SectionData: {
      Experiancetabs: [
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
      ],
      AboutData: {
        heading: { start: "I'm a ", highLight: "web developer" },
        p1: "Passionate about learning new skills and creating software to make the world a better place. I am a curious person and a fast learner, hard work doesn't scare me. My goal is to create things that make a difference.",
        p2: "My main focus these days is building accessible, inclusive products.",
        p3: "Here are a few technologies I’ve been working with recently:",
        knowntechs: [
          "JavaScript (ES6+)",
          "Node.js",
          "TypeScript",
          "MongoDB",
          "React",
        ],
        picturePath: "",
      },
      ContactData: {
        heading: "Get in Touch",
        p: "My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
        buttonText: "Hello!",
        buttonLink: "mailto:swaminathangiridharan@gmail.com",
      },
    },
    FooterData: { p: "Designed & Built by Swaminathan Giridharan" },
  }; // whole mockdata
  
  return (
    <>
      <SideElements SideElementsData={pageData.SideElementsData} />
      <Jumbo jumbodata={pageData.JumboData} />
      <Sections
        sectionData={pageData.SectionData}        
      />
      <Footer footerData={{footerp:pageData.FooterData,sideelem_sm:pageData.SideElementsData}} />
    </>
  );
}

export default MainPage;
