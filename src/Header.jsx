import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, Scroll, ImageSquare, AngularLogo, User } from 'phosphor-react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='navigation'>
      <ul>
        <li className={`list ${activeTab === 'Home' ? 'active' : ''}`}>
          <Link to='/' onClick={() => handleTabClick('Home')}>
            <span className='icon'><House size={32} weight="thin" /></span>
            <span className='text'>Hoe</span>
          </Link>
        </li>
        <li className={`list ${activeTab === 'Blog' ? 'active' : ''}`}>
          <Link to='/blog' onClick={() => handleTabClick('Blog')}>
            <span className='icon'><Scroll size={32} weight="thin" /></span>
            <span className='text'>Blog</span>
          </Link>
        </li>
        <li className={`list ${activeTab === 'Gallery' ? 'active' : ''}`}>
          <Link to='/gallery' onClick={() => handleTabClick('Gallery')}>
            <span className='icon'><ImageSquare size={32} weight="thin" /></span>
            <span className='text'>Gallery</span>
          </Link>
        </li>
        <li className={`list ${activeTab === 'About' ? 'active' : ''}`}>
          <Link to='/about' onClick={() => handleTabClick('About')}>
            <span className='icon'><AngularLogo size={32} weight="thin" /></span>
            <span className='text'>About</span>
          </Link>
        </li>
        <li className={`list ${activeTab === 'Contact' ? 'active' : ''}`}>
          <Link to='/contact' onClick={() => handleTabClick('Contact')}>
            <span className='icon'><User size={32} weight="thin" /></span>
            <span className='text'>Contact</span>
          </Link>
        </li>
        <div className={`indicator ${activeTab === 'Home' ? 'home' : ''} ${activeTab === 'Blog' ? 'blog' : ''} ${activeTab === 'Gallery' ? 'gallery' : ''} ${activeTab === 'About' ? 'about' : ''} ${activeTab === 'Contact' ? 'contact' : ''}`}></div>
      </ul>
    </div>
  );
};

export default Header;