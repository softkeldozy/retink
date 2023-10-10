import React from 'react';
import './Sidenav.css';
import content from './icons/content-gallary.svg';
import home from './icons/home.svg';
import settings from './icons/settings.svg';
import vector from './icons/vector.svg';
import logo from './icons/logo.svg';

const Sidenav = () => {
  return (
    <div className="l-navbar" id="nav-bar">
      <nav className="nav">
        <div className="Sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <div className="brandLogo">
                <img src={logo} alt='' className='logoIcon' />
              </div>
              <div className="logo homeLogo active">
                <img src={home} alt='' className='homeIcon' />
              </div>
              <div className="logo contentLogo">
                <img src={content} alt='' className='contentIcon' />
              </div>
            </div>
          </div>

          <div className="sidebarWrapper-2">
            <div className="sidebarMenu">
              <div className="logo settingsBtn">
                <img src={settings} alt='' className='settingsIcon' />
              </div>
              <div className="logo vectorBtn">
                <img src={vector} alt='' className='vector' />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidenav