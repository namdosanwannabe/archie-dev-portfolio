import React from 'react'
import { motion } from 'framer-motion'
import Accordion from '../components/Accordion'

import Nspire from '../assets/logos/nspire-logo.jpg';

const Experience = [
    {
        logo: Nspire,
        title: 'NSPIRE Software and Technology Solutions Inc.',
        subtitle: 'Assistant Junior Programmer',
        date: 'June 2024 - Present',
        description: `Implemented the Atom Design System using C# and Blazor, streamlining UI development and enhancing design consistency. Developed over 50 reusable components, reducing redundancy and accelerating development. Focused on building a highly responsive web design for the system's prototype and now transitioning to mobile development with .NET MAUI.`
    },
    {
        logo: Nspire,
        title: 'NSPIRE Software and Technology Solutions Inc.',
        subtitle: 'UI/UX Designer Intern',
        date: 'March 2024 - May  2024',
        description: 'Designed components, interactive system prototypes, and responsive web interfaces using Figma, contributing to the UI/UX team. Gained hands-on experience in user experience design and enhanced skills in creating intuitive and visually appealing interfaces.'
    },
]

const WorkExperience = () => {
    return (
        <motion.div
            className='mb-10'
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <motion.p
                className='font-bold text-xl leading-normal mb-3'
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
            >
                Work Experience
            </motion.p>
            <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
                {Experience.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                    >
                        <Accordion
                            key={index}
                            logo={item.logo}
                            title={item.title}
                            subtitle={item.subtitle}
                            date={item.date}
                        >
                            {item.description}
                        </Accordion>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default WorkExperience