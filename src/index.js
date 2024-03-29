import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import './css/media.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './sidebar';
import Home from './home';
import About from './about';
import Resume from './resume';
import Blogs from './blogs';
import Portfolios from './portfolio';
import Article from './Article';
import TechnologyNews from './TechnologyNews';
import Language from './language';
import LanguageInfo from './languageInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='resume' element={<Resume />} />
        <Route path='portfolios' element={<Portfolios />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='blogs/:id' element={<Article />} />
        <Route path='news' element={<TechnologyNews />} />
        <Route path='languages' element={<Language />} />
        <Route path='languages/:id_lan' element={<LanguageInfo />} />
      </Routes>
    </BrowserRouter>
  </div>
)