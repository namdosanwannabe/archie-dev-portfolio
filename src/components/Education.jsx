import React from 'react'
import { motion } from 'framer-motion'
import Accordion from '../components/Accordion'

import Bpsu from '../assets/logos/bpsu-logo.png';
import Eastwood from '../assets/logos/eastwood-logo.png';

const Education = [
    {
        logo: Bpsu,
        title: 'Bataan Peninsula State University',
        subtitle: 'Bachelor’s Degree in Information Technology (BSIT)',
        date: 'September 2020 - September 2024 ',
        onClick: () => window.open('https://www.bpsu.edu.ph/', '_blank')
    },
    {
        logo: Eastwood,
        title: ' Eastwoods Academy of Science and Technology',
        subtitle: 'Information and Communications Technology (ICT)',
        date: 'September 2018 - April 2020 ',
        onClick: () => window.open('https://east.edu.ph/', '_blank')
    },
]

const WorkExperience = () => {
    return (
        <motion.div
            className='mb-10'
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
            <motion.p
                className='font-bold text-xl leading-normal mb-3'
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
            >
                Education
            </motion.p>
            <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
                {Education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.6 }}
                    >
                        <Accordion
                            key={index}
                            logo={item.logo}
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                            dropdown={false}
                            onClick={item.onClick}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default WorkExperience