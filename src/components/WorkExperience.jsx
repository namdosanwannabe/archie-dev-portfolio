import React from 'react'
import { motion } from 'framer-motion'

const WorkExperience = () => {
    return (
        <motion.div
            className='mb-8'
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <motion.p
                className='font-bold text-xl leading-normal'
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
            >
                Work Experience
            </motion.p>

        </motion.div>
    )
}

export default WorkExperience