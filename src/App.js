import React  from 'react';
import Navbar from './Components/Nav/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import IntroPage from './Pages/IntroPage';

function App() {
  return (
    <div className='scroll-smooth'>
      <BrowserRouter><Routes>
        <Route path={'/PortFolio'} element={<Navbar/>}>
          <Route index element={<MainPage/>}/>
          <Route path='intro' element={<IntroPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
