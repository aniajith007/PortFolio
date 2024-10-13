import React, { useEffect, useState } from "react";
import SideElements from "../../Components/SideElements/SideElements";
import Jumbo from "../MainHero/Jumbo";
import Sections from '../Sections';
import Footer from "../../Components/Foot/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { pageData_raw } from "../../Raw/Raw";
import Works from "../Sections/Works/Works";

function MainPage() {  
  const location = useLocation()
  const navigate = useNavigate()
  const [PageSData,setPageSData] = useState();
  
  // navheadings: ["About", "Experiance", "Works", "Timeline", "Contact", "TS"],
  
  //const pageData = location?.state?.pagedata;
  const pageData = pageData_raw
  // console.log("in mainpage loc data",location.state)
  // if(location.state){
  //   console.log("in mainpage loc data",location.state)
  // }else{
  //   navigate(-1)
  // }
  

  return (
    <>
      <SideElements SideElementsData={pageData?pageData.SideElementsData:""} />
      <Jumbo jumbodata={pageData?pageData.JumboData:""} />
      <Sections
        sectionData={pageData?pageData.SectionData:""}        
      />
      
      <Footer footerData={{footerp:pageData?pageData.FooterData:"",sideelem_sm:pageData?pageData.SideElementsData:""}} />
    </>
  );
}

export default MainPage;
