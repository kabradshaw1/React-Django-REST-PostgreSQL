import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Login from './components/Login';
import RegiserUser from './components/RegisterUser';

const App: React.FC = () => {
  return(
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/Register" element={<RegiserUser/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;