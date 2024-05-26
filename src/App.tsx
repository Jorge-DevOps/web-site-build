import { useState } from 'react'
import './App.css'
import CustomizedProgressBars from './progressBar'
import site from './assets/6261569a.jpg'
import mobileSite from './assets/6261479a.jpg'
import instagram from './assets/instagram.svg'
import youtube from './assets/youtube.svg'
import facebook from './assets/facebook.svg'


function App() {
  return (
    <>
      <div className='container-web-site'>
        <div className='container-title'>
          <h1 className='title'>Website coming  <br /> soon</h1>
        </div>
        <img style={{ filter: 'blur(8px)' }} src={site} className="webSite" alt="Web" />
        <img style={{ filter: 'blur(8px)' }} src={mobileSite} className="webSite-mobile" alt="Mobile Web" />
        <div className='container-social-media'>
          <a href="/">
            <img src={""} className="social-media" alt="" />
          </a>
        </div>
      </div>
      <CustomizedProgressBars />
    </>
  );
};

export default App
