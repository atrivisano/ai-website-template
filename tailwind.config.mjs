/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class', // Enable dark mode with class-based switching
    theme: {
        extend: {
            colors: {
                // Define your project color palette here
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                secondary: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                    950: '#2e1065',
                },
                // Add more custom colors as needed
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Merriweather', 'Georgia', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                // Define your typographic scale
                xs: ['0.75rem', {lineHeight: '1rem'}],
                sm: ['0.875rem', {lineHeight: '1.25rem'}],
                base: ['1rem', {lineHeight: '1.5rem'}],
                lg: ['1.125rem', {lineHeight: '1.75rem'}],
                xl: ['1.25rem', {lineHeight: '1.75rem'}],
                '2xl': ['1.5rem', {lineHeight: '2rem'}],
                '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
                '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
                '5xl': ['3rem', {lineHeight: '1'}],
                '6xl': ['3.75rem', {lineHeight: '1'}],
            },
            spacing: {
                // Define consistent spacing if needed beyond Tailwind defaults
            },
            borderRadius: {
                // Custom border radius values if needed
            },
            boxShadow: {
                // Custom shadows
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
            },
            animation: {
                // Custom animations
                'fade-in': 'fadeIn 0.5s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
            },
        },
    },
    plugins: [],
}