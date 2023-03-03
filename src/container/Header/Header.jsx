import React from 'react'

import {motion} from 'framer-motion'

import { images } from '../../constants'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

import './Header.scss'
import Circles from './Circles/Circles'
import {AppWrap} from "../../wrapper"

const scaleVariants = {
    whileInView: {
        scale: [0,1],
        opacity: [0,1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    const [text, count] = useTypewriter({
        words: ["Hi, from Web Developer Harman","Tech geek love to build","Fresher available to learn new tech","<Code />"], loop:true, delaySpeed:2000
      })

  return (
    <div className='app__header app__flex'>
      <Circles />

      <h2 className='app__info'>Full stack web developer</h2>

      <h1 className='app__text'>
        <span className='app__span'>
            {text}
        </span>
        <Cursor cursorColor='#4979ff'/>
      </h1>
      <div className='app__content'>
      <p>Creative</p>
      <p>Exclusive</p>
      <p>Responsive</p>
      <p>Enthusiastic</p>
      </div>
    
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.git, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')