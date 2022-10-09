import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';


function Header() {
  return (
    <header className='header__container' id='#'>
        <div className='header__logo__container'>
            Logo
        </div>
        <div>
          <Link to='/'><h2>What If Rishi's Wife Paid Her Tax?</h2></Link>
        </div>
        <div className='header__user__links'>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Sign Up</Link>
        </div>
    </header>
  )
}

export default Header