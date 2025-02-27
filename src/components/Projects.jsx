import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../components/Badge'
import Tabs from '../components/Tabs'
import CardContainer from '../components/CardContainer'

import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

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

    const projects = [
        {
            image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
            title: 'Project 1',
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
            title: 'Project 2',
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
            title: 'Project 3',
            date: '2023 - 2024',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.',
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
            title: 'Project 4',
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
