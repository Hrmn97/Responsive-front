import React from 'react'
import { motion } from 'framer-motion'

import './Circles.scss'


function BackgroundCircles() {
  return (
    <motion.div 
   
    className='app__circles'>
        <div className='circle__a'/>
        <div className='circle__b'/>
        <div className='circle__c'/>
        <div className='circle__d'/>
        <div className='circle__e'/>
    </motion.div>
  )
}

export default BackgroundCircles