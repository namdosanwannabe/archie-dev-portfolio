
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import Badge from '../components/Badge'

const Card = ({ image, title, date, desc, techStack = [], actionButton = [] }) => {
    return (
        <motion.div
            className="rounded-lg bg-card flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
        >
            {/* Image */}
            <div className="relative w-full h-40">
                <img
                    src={image}
                    alt="Chat Collect"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="text-left flex flex-col h-full px-2 py-2">
                <div className="space-y-1 mb-2">
                    {/* Title */}
                    <h3 className="text-md font-semibold text-black">{title}</h3>
                    <p className="text-xs font-medium text-black">{date}</p>

                    {/* Description */}
                    <p className="mt-2 text-xs text-gray leading-relaxed">
                        {desc}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className=" mt-auto flex flex-wrap gap-2">
                    {techStack?.map(
                        (tech) => (
                            <span
                                key={tech}
                                className="text-[10px] px-2 py-1 bg-gray-100 rounded-md font-semibold"
                            >
                                {tech}
                            </span>
                        )
                    )}
                </div>

                {/* Website Button */}
                <div className="mt-2 flex gap-1">
                    {
                        actionButton.map(
                            (button) => (
                                <Badge
                                    key={button.label}
                                    className="text-[10px] cursor-pointer inline-flex gap-1 py-1 px-2.5"
                                    onClick={button.onClick}
                                >
                                    {button?.icon}
                                    {button?.label}
                                </Badge>
                            )
                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default Card