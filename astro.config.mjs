// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://aigen.com',
    vite: {
        plugins: [tailwindcss()],
        // Vite configuration options
        build: {
            // Enable minification for production
            minify: 'terser',
            // Configure code-splitting
            cssCodeSplit: true,
        },
        ssr: {
            // External packages that should not be bundled
            external: [],
        },
    },
    // Image optimization settings
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
        },
    },
});
