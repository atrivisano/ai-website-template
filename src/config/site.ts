export const siteConfig = {
    // Basic site info
    name: "My Astro Tailwind Site",
    description: "A high-performing, visually modern website built with Astro and TailwindCSS",
    url: "https://your-domain.com", // replace with your actual domain
    ogImage: "/images/og-image.jpg",

    // SEO configuration
    defaultTitle: "My Astro Tailwind Site",
    titleTemplate: "%s | My Astro Tailwind Site",

    // Navigation links (used in Header component)
    mainNav: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ],

    // Social links (used in Footer component)
    socialLinks: [
        {
            title: "Twitter",
            href: "https://twitter.com/yourusername",
            icon: "twitter", // You would need to implement an icon system
        },
        {
            title: "GitHub",
            href: "https://github.com/yourusername",
            icon: "github",
        },
        {
            title: "LinkedIn",
            href: "https://linkedin.com/in/yourusername",
            icon: "linkedin",
        },
    ],

    // Contact information
    contact: {
        email: "contact@yourdomain.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, City, State 12345",
    },

    // Copyright information
    copyright: `© ${new Date().getFullYear()} My Astro Tailwind Site. All rights reserved.`,
};

// Type definitions for use throughout the site
export type SiteConfig = typeof siteConfig;