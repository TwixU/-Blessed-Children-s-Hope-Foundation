/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./App.tsx",
        "./index.tsx",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./hooks/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryBrand: '#0ea5e9', // Sky Blue 500
                secondaryBrand: '#f59e0b', // Amber 500
                backgroundDark: '#111827', // Gray 900
                backgroundLight: '#ffffff', // White
                textHeadingDarkBg: '#F9FAFB', // Gray 50
                textBodyDarkBg: '#D1D5DB', // Gray 300
                textLightBg: '#1F2937', // Gray 800
                borderDarkBg: '#374151', // Gray 700
            },
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
