import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import Login from './page/login';
import RegiserUser from './page/RegisterUser';
import Hume from './page/Home'

const App: React.FC = () => {
  return(
    <>
      <Header/>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Register" element={<RegiserUser/>}/>
            <Route path="/Login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
        </Provider>
    </>
  )
};

export default App;