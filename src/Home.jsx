import React from 'react'
import { Link } from 'react-router-dom'
import { House, Scroll, ImageSquare, AngularLogo, User } from 'phosphor-react'

const Home = () => {
  return (
    <div className='navigation'>
        <ul>
            <li className='list active'>
                <Link to='/'>
                    <span className='icon'><House size={32} weight="thin" /></span>
                    <span className='text'>Home</span>
                </Link>
            </li>
            <li className='list'>
                <Link to='/blog'>
                    <span className='icon'><Scroll size={32} weight="thin" /></span>
                    <span className='text'>Blog</span>
                </Link>
            </li>
            <li className='list'>
                <Link to='/gallery'>
                    <span className='icon'><ImageSquare size={32} weight="thin" /></span>
                    <span className='text'>Gallery</span>
                </Link>
            </li>
            <li className='list'>
                <Link to='/about'>
                    <span className='icon'><AngularLogo size={32} weight="thin" /></span>
                    <span className='text'>About</span>
                </Link>
            </li>
            <li className='list'>
                <Link to='/contact'>
                    <span className='icon'><User size={32} weight="thin" /></span>
                    <span className='text'>Contact</span>
                </Link>
            </li>
            <div className="indicator"></div>
        </ul>
    </div>
  )
}

export default Home