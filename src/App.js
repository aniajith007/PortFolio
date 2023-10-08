import React from "react";
import Navbar from "./Components/Nav/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import IntroPage from "./Pages/IntroPage";
import MockLoader from "./Pages/MockLoader";

function App() {
  return (
    <div className="scroll-smooth">
      {/* For Intro Page */}
      {/* <BrowserRouter>
        <Routes>
          <Route index path="/PortFolio" element={<MockLoader />} />
          <Route path={"/PortFolio/Main"} element={<Navbar />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* Normal Mockdata */}
      <BrowserRouter>
        <Routes>          
          <Route path={"/PortFolio"} element={<Navbar />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
