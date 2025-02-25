/** @type {import('tailwindcss').Config} */

import { DEFAULT } from '@react-three/fiber/dist/declarations/src/core/utils';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#08090A",
                gray: {
                    DEFAULT: "#737373",
                    light: "#E5E5E5"
                }
            }
        },
    },
    plugins: [],
}

