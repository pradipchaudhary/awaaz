"use client";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VoiceEnhancement from "@/components/VoiceEnhancement";
import EmotionDetection from "@/components/EmotionDetection";
import LyricsGenerator from "@/components/LyricsGenerator";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Home = () => {
    return (
        <main className="min-h-screen">
            <Hero />
            <Features />
            <VoiceEnhancement />
            <EmotionDetection />
            <LyricsGenerator />
            <Testimonials />
            <CallToAction />
        </main>
    );
};

export default Home;
