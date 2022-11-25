import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper'

import './Header.scss';

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
          {/*<span>👋</span>*/}
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hi, my name is</p>
              <h1 className='head-text'>Jacob</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
          <p className='p-text'>Full Stack Dev</p>
          <p className='p-text'>& Data Analyst</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile-bg"/>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.blob}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
      >
        {[images.tableaularge, images.pythonlarge, images.sqllarge].map((circle, index) => (
          <div className='circle-cmp app__flex' key={'circle-index'}>
            <img src={circle} alt='circle'/>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');