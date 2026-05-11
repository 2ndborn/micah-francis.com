import React from 'react'
import {motion} from 'framer-motion';
import ThreeDots from './ThreeDots'

const Loader = () => {

    const loaderStyle = {
        position: 'absolute', 
        inset: 0,
        display: 'flex',
        justifyContent: 'center', 
        alignItem: 'center', 
        height: "100vh", 
        width: '100%', 
        background: 'rgb(255, 255, 255)',
        zIndex: 999
    }
  return (
      <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          style={loaderStyle}
        >
          <ThreeDots />
      </motion.div>
  )
}

export default Loader