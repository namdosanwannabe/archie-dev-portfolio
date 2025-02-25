import React from 'react'
import { motion } from 'framer-motion'
import Stack from './Stack/Stack';

import Profile from '../assets/profile.jpg'

import CoffeeOne from '../assets/coffees/coffee-1.jpg';
import CoffeeTwo from '../assets/coffees/coffee-2.jpg';
import CoffeeThree from '../assets/coffees/coffee-3.jpg';
import CoffeeFour from '../assets/coffees/coffee-4.jpg';
import CoffeeFive from '../assets/coffees/coffee-5.jpg';
import CoffeeSix from '../assets/coffees/coffee-6.jpg';

const images = [
    { id: 1, img: CoffeeOne },
    { id: 2, img: CoffeeSix },
    { id: 3, img: CoffeeThree },
    { id: 4, img: CoffeeTwo },
    { id: 5, img: CoffeeFive },
    { id: 6, img: CoffeeFour }
]

const Header = () => {
    return (
        <motion.div
            className='flex justify-between mb-8 select-none'
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className='flex flex-1 flex-col gap-3'>
                <motion.h1
                    className='text-3xl sm:text-5xl xl:text-6xl/none font-bold tracking-tight'
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    Hi, I’m Archie 👋
                </motion.h1>
                <motion.p
                    className='md:text-xl font-normal max-w-md leading-normal'
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                >
                    Frontend Developer. I love designing websites and turning them into code. Slightly addicted to coffee, and not a fan of {" "}
                    <span className='relative'>
                        CS
                        <span className='absolute top-0 transform translate-y-[8px] rotate-45'>S.</span>
                    </span>
                </motion.p>
            </div>
            <motion.div
                className='block lg:hidden'
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            >
                <img src={Profile} alt='Archie Cayabyab' className='w-32 h-32 object-cover rounded-full' />
            </motion.div>
            <motion.div
                className='hidden lg:block z-20'
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            >
                <Stack
                    randomRotation={true}
                    sensitivity={100}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 190, height: 190 }}
                    cardsData={images}
                />
            </motion.div>
        </motion.div>
    )
}

export default Header
