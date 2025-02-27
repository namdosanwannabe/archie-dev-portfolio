import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../components/Badge'

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Blazor', 'MySQL', 'Tailwind', 'Boostrap', 'Framer Motion', 'Node', 'Express', 'Firebase', 'Supabase', 'Vite', 'GitHub', 'Bitbucket', 'Photoshop', 'Figma', 'VS Code']

const Skills = () => {
    return (
        <motion.div
            className='mb-20'
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
        >
            <motion.p
                className='font-bold text-xl leading-normal mb-3'
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
            >
                Skills
            </motion.p>
            <motion.div
                className="flex flex-wrap gap-y-1 gap-x-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.05
                        },
                    },
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Badge className="text-xs leading-relaxed">{skill}</Badge>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div >
    )
}

export default Skills