import React from 'react'
import Banner from '../assets/lp-desk.gif'
import Bannermob from '../assets/lp-mob.gif'

const Hero = () => {
  return (
    <header id='hero'>
        <img className='w-full h-auto hidden lg:flex' src={Banner} alt="/" />
        <img className='w-full h-auto flex lg:hidden' src={Bannermob} alt="/" />
        
    </header>
  )
}

export default Hero