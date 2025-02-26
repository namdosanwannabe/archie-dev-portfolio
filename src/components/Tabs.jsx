import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ tabs, defaultTab = 0 }) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="flex rounded-lg bg-gray-100 p-1">
                {tabs.map((tab, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex-1 py-2 px-4 text-center text-sm font-medium rounded-md transition-colors text-black ${activeTab === index
                            ? 'bg-white shadow-sm'
                            : 'bg-transparent '
                            }`}
                        whileTap={{ scale: 0.98 }}
                    >
                        {tab.label}
                    </motion.button>
                ))}
            </div>

            <div className="py-4">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {tabs[activeTab].content}
                </motion.div>
            </div>
        </div>
    )
}

export default Tabs