import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import SEO from "@/components/SEO";
import ScrollToTop from "@/components/ScrollToTop";

// Load Google fonts
const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Metadata API
export const metadata: Metadata = {
    title: "Awaaz - Nepali Vocal Performances Enhanced with AI",
    description:
        "Awaaz AI is a platform that combines Nepali vocal performances with AI-powered content creation, automated video production, and seamless social media integration. Create and share emotions effortlessly.",
    openGraph: {
        type: "website",
        url: "https://awaaz-navy.vercel.app/",
        title: "Awaaz  - Nepali Vocal Performances Enhanced with AI",
        description:
            "Explore a world of Nepali vocal performances and storytelling enriched by AI tools. Generate lyrics, automate video production, and share your creations with ease.",
        images: [
            {
                url: "https://yourdomain.com/path-to-image.jpg",
                alt: "Awaaz AI Preview Image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Awaaz - Nepali Vocal Performances Enhanced with AI",
        description:
            "Explore a world of Nepali vocal performances and storytelling enriched by AI tools. Generate lyrics, automate video production, and share your creations with ease.",
        images: ["https://yourdomain.com/path-to-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    themeColor: "#ffffff",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <SEO />
            <body
                className={`${jakarta.variable} ${outfit.variable} font-sans antialiased bg-black text-white`}
            >
                <ErrorBoundary>
                    <Header />
                    {children}
                    <Footer />
                    <ScrollToTop />
                </ErrorBoundary>
            </body>
        </html>
    );
}
