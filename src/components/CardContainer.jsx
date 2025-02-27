import React from 'react'
import { motion } from 'framer-motion'

import Card from '../components/Card'

const CardContainer = ({ arr }) => {
    return (
        <motion.div
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
            }}
        >
            {arr.map((arr, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                >
                    <Card
                        image={arr.image}
                        title={arr.title}
                        date={arr.date}
                        desc={arr.desc}
                        techStack={arr.techStack}
                        actionButton={arr.actionButton}
                    />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default CardContainer