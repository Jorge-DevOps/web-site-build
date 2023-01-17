import { useState } from 'react'
import './App.css'
import CustomizedProgressBars from './progressBar'
import site from './assets/website.png'
import instagram from './assets/instagram.svg'
import youtube from './assets/youtube.svg'
import facebook from './assets/facebook.svg'


function App() {

  return (
    <>
      <div className='container-web-site' >
        <div className='container-title'>
          <h1 className='title'>Sitio web en <br /> construcción</h1>

        </div>
        <img src={site} className="webSite" alt="React logo" />
        <div className='container-social-media'>
          <a href="https://www.instagram.com/">

            <img src={instagram} className="social-media" alt="React logo" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} className="social-media" alt="React logo" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={facebook} className="social-media" alt="React logo" />
          </a>
        </div>
      </div>
      <CustomizedProgressBars />
    </>

  )
}

export default App
