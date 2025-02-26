import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../components/Badge'
import Tabs from '../components/Tabs'

const tabsData = [
    {
        label: "Development",
        content: (
            <Development />
        )
    },
    {
        label: "Design",
        content: (
            <Design />
        )
    }
];


const Projects = () => {

    return (
        <motion.div
            className="mb-20 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
        >
            <>
                <div className='space-y-2 mb-10'>
                    <Badge className="text-sm">{'My Projects'}</Badge>
                    <motion.h2
                        className='font-bold text-3xl sm:text-5xl tracking-tight'
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    >
                        Check out my latest works
                    </motion.h2>
                    <motion.p className='text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed text-gray'
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
                    >
                        I developed and designed websites, from simple pages to advanced web applications. Here are a few of my favorites.
                    </motion.p>
                </div>
                <Tabs tabs={tabsData} />
            </>
        </motion.div>
    );
};

export default Projects

function Development() {
    return (
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
            <div className='bg-gray-200 h-80 rounded-md'></div>
            <div className='bg-gray-200 h-80 rounded-md'></div>
            <div className='bg-gray-200 h-80 rounded-md'></div>
            <div className='bg-gray-200 h-80 rounded-md'></div>
        </div>
    )
}

function Design() {
    return (
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
            <div className='bg-gray-200 h-80 rounded-md'></div>
            <div className='bg-gray-200 h-80 rounded-md'></div>
        </div>
    )
}