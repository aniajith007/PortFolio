import React  from 'react';
import Navbar from "./Nav/Navbar";
import Footer from "./Foot/Footer";
import Jumbo from "./MainHero/Jumbo";
import Sections from "./Sections";
import SideElements from "./SideElements/SideElements";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage/MainPage';

function App() {
  return (
    <div className='scroll-smooth'>
      <BrowserRouter><Routes>
        <Route path={'/PortFolio'} element={<Navbar/>}>
          <Route index element={<MainPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
