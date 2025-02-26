import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            className='mb-10'
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <motion.p
                className='font-bold text-xl leading-normal'
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            >
                About
            </motion.p>
            <motion.p
                className='text-sm font-medium text-gray'
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            >
                By the middle of 2024, I graduated with a Bachelor of Science in Information Technology, <a href='#' className='underline'>majoring in Web Development</a>, <a href='#' className='underline'>interned at one of the first IT company in Bataan</a> and <a href='#' className='underline'>landed my first job as an Assistant Junior Programmer.</a> In the past, I had the opportunity to join <a href='#' className='underline'>IRCITE 2024</a> for a paper presentation and also won the <a href='#' className='underline'>Best Paper in the IT Category</a>  at  <a href='#' className='underline'>Bataan Peninsula State University.</a>
            </motion.p>
        </motion.div>
    )
}

export default About