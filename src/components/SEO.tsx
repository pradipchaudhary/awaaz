import Head from "next/head";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
}

export default function SEO({
    title = "Awaaz AI - Nepali Vocal Performances Enhanced with AI",
    description = "Transform your vocal performances with AI-powered enhancement, emotion detection, and lyric generation.",
    image = "https://awaaz.ai/og-image.jpg",
}: SEOProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}
