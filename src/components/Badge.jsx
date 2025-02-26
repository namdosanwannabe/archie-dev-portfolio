import React from 'react'

const Badge = ({ children, className }) => {
    return (
        <div
            className={`inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md py-0.5 px-2.5 text-white font-semibold leading-relaxed hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition ${className}`}
        >
            {children}
        </div>

    )
}

export default Badge