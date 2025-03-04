import React from 'react'

const Badge = ({ children, className, onClick }) => {
    return (
        <div
            className={`inline-flex flex-nowrap whitespace-nowrap items-center bg-black rounded-md text-white font-semibold hover:bg-black/80 ring-2 ring-transparent hover:ring-white ring-offset-2 transition ${className}`}
            onClick={onClick || undefined}
        >
            {children}
        </div >

    )
}

export default Badge