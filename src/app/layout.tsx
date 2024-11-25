import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

// Load local fonts
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
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
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Static Meta Tags */}
                <meta charSet="UTF-8" />
                <meta
                    name="keywords"
                    content="Awaaz , Nepali vocal performances, AI-powered platform, storytelling, lyric generation, video automation, Nepali content creation, social media integration"
                />
                <meta name="author" content="Pradip Chaudhary" />
                <meta name="robots" content="index, follow" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
            >
                <Header />
                <main className="container mx-auto flex max-w-5xl flex-1 flex-col px-4">
                    {children}
                </main>
                <footer>
                    <div className="flex items-center justify-center py-8">
                        <span className="text-sm text-gray-400">
                            Made by
                            <a
                                href="https://twitter.com/Ibelick"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-gray-50"
                            >
                                @Pradip Chaudhary
                            </a>
                        </span>
                    </div>
                </footer>
            </body>
        </html>
    );
}
