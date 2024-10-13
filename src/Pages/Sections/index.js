import React from "react";
import About from "./Hero/about";
import VerticalTabs from "./Experience/Experience";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";

function Sections({sectionData}) {
  return (
    <>
      {" "}
      <section id="about">
        <About about={sectionData.AboutData}/>
      </section>
      <section id="experience">
        <VerticalTabs tabs={sectionData.Experiancetabs} />
      </section>
      <section id="works">
        <Works/>
      </section>
      <section id = "contact">
        <Contact contact= {sectionData.ContactData}/>
      </section>
    </>
  );
}

export default Sections;
