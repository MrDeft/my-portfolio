import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import './css/media.css'
import SideBar from './sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home';
import About from './about';
import Resume from './resume';
import Blogs from './blogs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='resume' element={<Resume />} />
        <Route path='blogs' element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  </div>
)