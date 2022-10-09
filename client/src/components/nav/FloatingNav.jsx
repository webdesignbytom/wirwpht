import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { BsPlusCircle, BsShuffle } from 'react-icons/bs'
import './style.css'


function FloatingNav() {
  const [activeNav, setActiveNav] = useState('#')


  return (
    <nav className='floating__nav__container'>
        <Link to='/'><AiOutlineHome /></Link>
        <Link to='/additem'><BsPlusCircle /></Link>
        <Link to='/topten'><AiOutlineStar /></Link>
        <Link to='/random'><BsShuffle /></Link>
        <Link to='/account'><AiOutlineUser /></Link>
    </nav>
  )
}

export default FloatingNav