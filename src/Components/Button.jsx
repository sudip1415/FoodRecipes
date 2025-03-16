import { button } from 'framer-motion/client';
import React from 'react'

function Button({ label, onClick, type = "button", className = "" }) {
    return (
        <button type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 ${className}`}
        >{label}</button>
    )
}

export default Button;