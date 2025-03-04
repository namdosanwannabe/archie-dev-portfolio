import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../components/Badge'
import Tabs from '../components/Tabs'
import CardContainer from '../components/CardContainer'

import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

import BarnBuddy from "../assets/projects/barnbuddy.png";
import Omnifood from "../assets/projects/omnifood.png";
import Todowy from "../assets/projects/todowy.png";

const Projects = () => {
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
                    <Badge className="text-sm py-1 px-2.5">{'My Projects'}</Badge>
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

    const projects = [
        {
            image: `${Todowy}`,
            title: 'Todowy',
            date: '2024 - 2025',
            desc: 'Designed, and developed a custom to-do list website that helps organize tasks, set priorities, and boost productivity.',
            techStack: ['React', 'JavaScript', 'Tailwind', 'DaisyUI'],
            actionButton: [
                {
                    label: 'Website',
                    icon: <FaGlobe />,
                    onClick: () => window.open('https://todowy.netlify.app/')
                },
                {
                    label: 'Source',
                    icon: <FaGithub />,
                    onClick: () => window.open('https://github.com/namdosanwannabe/Todowy')
                }
            ]
        },
        {
            image: `${Omnifood}`,
            title: 'Omnifood',
            date: '2024',
            desc: 'Developed a landing page for Omnifood AI: Showcase its features, optimize conversions, and enhance user engagement.',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            actionButton: [
                {
                    label: 'Website',
                    icon: <FaGlobe />,
                    onClick: () => window.open('https://omnifoodkitchen.netlify.app/')
                },
                {
                    label: 'Source',
                    icon: <FaGithub />,
                    onClick: () => window.open('https://github.com/namdosanwannabe/Omnifood')
                }
            ]
        },
        {
            image: `${BarnBuddy}`,
            title: 'BarnBuddy Landing Page',
            date: '2024',
            desc: 'Built a landing page for BarnBuddy, an Android app developed with Java and Android Studio to streamline farm animal management through agricultural extension services.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'AOS'],
            actionButton: [
                {
                    label: 'Website',
                    icon: <FaGlobe />,
                    onClick: () => window.open('https://barnbuddy.netlify.app/')
                },
                {
                    label: 'Source',
                    icon: <FaGithub />,
                    onClick: () => window.open('https://github.com/namdosanwannabe/BarnBuddy-Website')
                }
            ]
        },
    ]

    return (
        <CardContainer arr={projects} />
    )
}

function Design() {
    const projects = [
        {
            image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
            title: 'Design 1',
            date: '2023 - 2024',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
            actionButton: [
                {
                    label: 'Website',
                    icon: <FaGithub />,
                    onClick: () => window.open('https://www.google.com')
                },
                {
                    label: 'Code',
                    icon: <FaGlobe />,
                    onClick: () => window.open('https://www.github.com')
                }
            ]
        },
        {
            image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
            title: 'Design 2',
            date: '2023 - 2024',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.',
            techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
            actionButton: [
                {
                    label: 'Website',
                    icon: <FaGithub />,
                    onClick: () => window.open('https://www.google.com')
                },
                {
                    label: 'Code',
                    icon: <FaGlobe />,
                    onClick: () => window.open('https://www.github.com')
                }
            ]
        },
    ]

    return (
        <CardContainer arr={projects} />
    )
}
