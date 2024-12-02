import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
                heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
            },
            letterSpacing: {
                tighter: "-0.05em",
                tight: "-0.025em",
                normal: "0",
                wide: "0.025em",
                wider: "0.05em",
                widest: "0.1em",
            },
        },
    },
    plugins: [],
};

export default config;
