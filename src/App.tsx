import { useState } from 'react'
import './App.css'
import CustomizedProgressBars from './progressBar'
import site from './assets/6261569.jpg'
import mobileSite from './assets/6261479.jpg'
import instagram from './assets/instagram.svg'
import youtube from './assets/youtube.svg'
import facebook from './assets/facebook.svg'


function App() {
  return (
    <>
      <div className='container-web-site'>
        <div className='container-title'>
          <h1 className='title'>Sitio web en <br /> construcción</h1>
        </div>
        <img style={{ filter: 'blur(8px)' }} src={site} className="webSite" alt="Web" />
        <img style={{ filter: 'blur(8px)' }} src={mobileSite} className="webSite-mobile" alt="Mobile Web" />
        <div className='container-social-media'>
          <a href="https://www.instagram.com/cesarramirezabogados/">
            <img src={instagram} className="social-media" alt="Instagram" />
          </a>
        </div>
      </div>
      <CustomizedProgressBars />
    </>
  );
};

export default App
