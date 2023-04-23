import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Layout, Typography, Space} from 'antd';
import Navbar from './Components/Navbar';
import './App.css';
import Exchanges from './Components/Exchanges';
import CryptoDetailes from './Components/CryptoDetailes';
import Cryptocurrencies from './Components/Cryptocurrencies';
import News from './Components/News';
import HomePage from './Components/HomePage';



function App() {
  return (
      <div className='app'>
      <div className='navbar'>
   
      </div>
      <div className='main'>
       <Layout>
        <div className='routes'>
        <BrowserRouter>
        <Navbar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:coinId" element={<CryptoDetailes/>} />
          <Route path="news" element={<News/>} />
       
      </Routes>

      <div className='footer'>
           <Typography.Title  level={5} style={{color:'white', textAlign:'center'}}>
              Cryptocurrencies<br/>
              All right Reserved
           </Typography.Title>
           <space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
           </space>
      </div>
    </BrowserRouter>

        </div>
       </Layout>
    
   
      </div>
      </div>
    
  );
}

export default App;
