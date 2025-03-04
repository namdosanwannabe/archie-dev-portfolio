import React from 'react'
import Dock from '../components/Dock/Dock'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaHouse } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const items = [
    { icon: <FaHouse size={18} />, label: 'Home', onClick: () => window.location.href = '/' },
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/in/archiecayabyabconnects/', '_blank') },
    { icon: <FaGithub size={18} />, label: 'GitHub', onClick: () => window.open('https://github.com/namdosanwannabe', '_blank') },
    { icon: <RiInstagramFill size={18} />, label: 'Instagram', onClick: () => window.open('https://www.instagram.com/achikochi_/', '_blank') },
];

const Navigation = () => {
    return (
        <>
            <div className="fixed inset-x-0 bottom-0 z-40 h-16 w-full bg-white to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none"></div>
            <motion.div
                className='fixed bottom-0 left-0 right-0 z-50'
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
                <Dock
                    items={items}
                    panelHeight={60}
                    baseItemSize={40}
                    magnification={50}
                    className='mb-3'
                />
            </motion.div>
        </>

    )
}

export default Navigation