import React, { useEffect, useRef } from 'react'
import {motion, useAnimation, useInView} from 'framer-motion';


const Reveal = ({children}) => {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true, amount: 0.2});
    const mainControls = useAnimation();

    useEffect(() => {
        if(inView){
            mainControls.start('visible')
        }
    }, [inView, mainControls])

    const variants = {
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0}
    }
    return (
        <div>
            <motion.div
                ref={ref}
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, ease: 'easeIn' }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal