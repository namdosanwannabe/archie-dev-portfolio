import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Accordion = ({ dropdown = true, logo, title, subtitle, date, onClick, children }) => {

    const [isOpen, setOpen] = useState(false)
    const [hovered, setHover] = useState(false)

    const handClick = () => {
        if (onClick) {
            onClick()
        } else {
            setOpen(!isOpen)
        }
    }

    return (
        <div className='flex select-none'>
            <div className='flex-none'>
                <img className='w-12 h-12 rounded-full border-2 border-gray-light' src={logo} alt={`${logo} Logo`} />
            </div>
            <div className='flex-grow ml-4 items-center flex-col group cursor-pointer'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handClick}>
                <div className='flex flex-col'>
                    <div className='w-full flex justify-between'>
                        <p className="flex flex-grow-0 font-semibold text-xs sm:text-sm text-black">
                            {title}
                            <span className="inline-flex gap-x-1"></span>
                            <AnimatePresence>
                                {hovered && (
                                    <motion.span
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -10, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <MdOutlineKeyboardArrowRight
                                            size={18}
                                            className={`text-black inline transform transition-transform duration-200 ${isOpen && dropdown ? 'rotate-90' : 'rotate-0'}`}
                                        />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </p>
                        <p className='text-xs sm:text-sm text-gray font-medium sm:whitespace-nowrap'>{date}</p>
                    </div>
                    <p className='text-xs text-gray font-medium'>{subtitle}</p>
                </div>
                <AnimatePresence>
                    {isOpen && dropdown && (
                        <motion.div
                            className="mt-2 text-xs sm:text-sm text-black font-normal overflow-hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Accordion