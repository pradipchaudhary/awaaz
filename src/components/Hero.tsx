"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowRightIcon,
    SparklesIcon,
    PlayIcon,
    MusicalNoteIcon,
} from "@heroicons/react/24/outline";

const WaveEffect = () => {
    return (
        <div className="absolute left-0 right-0 top-[59%] -translate-y-1/2 flex items-center justify-center overflow-hidden">
            {/* Single Center Wave Group */}
            <div className="flex items-center space-x-1 h-24 max-w-md mx-auto">
                {[...Array(24)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1 bg-gradient-to-t from-blue-500/40 via-blue-400/20 to-transparent rounded-full"
                        animate={{
                            height: [
                                "15%",
                                `${40 + Math.random() * 50}%`,
                                "15%",
                            ],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 1 + Math.random(),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.05,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Simplified Background with single centered gradient */}
            <div className="absolute inset-0">
                {/* Single centered radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

                {/* Musical Notes Pattern */}
                <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.2, 1],
                                y: [-20, 20, -20],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut",
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        >
                            <MusicalNoteIcon className="w-8 h-8 text-white/5" />
                        </motion.div>
                    ))}
                </div>

                {/* Wave Effect */}
                <WaveEffect />

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            {/* Content */}
            <motion.div
                style={{ scale }}
                className="relative pt-20 flex items-center min-h-screen"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-5 py-2.5 bg-white/[0.03] rounded-full mb-10 backdrop-blur-sm border border-white/[0.05] hover:border-blue-500/30 transition-colors duration-300">
                            <SparklesIcon className="w-[18px] h-[18px] text-blue-400 mr-2.5 animate-pulse" />
                            <span className="text-[13px] font-medium tracking-wide text-gray-200/90">
                                Revolutionizing Nepali Music with AI
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-[3.5rem] md:text-[5rem] font-medium mb-8 font-heading tracking-[-0.02em] leading-[1.1]">
                            <motion.span
                                className="inline-block bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ["0%", "100%", "0%"],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{
                                    backgroundSize: "200% auto",
                                }}
                            >
                                Transform your voice
                            </motion.span>
                            <br />
                            <span className="text-[2.5rem] md:text-[3.5rem] font-heading bg-gradient-to-r from-white/95 via-white/80 to-white/70 bg-clip-text text-transparent">
                                With AI-Powered Magic
                            </span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-[34rem] mx-auto space-y-6 mb-32"
                    >
                        <p className="text-lg md:text-xl py-1 text-gray-300/90 tracking-[-0.01em] leading-relaxed">
                            Unleash the power of AI to elevate your Nepali
                            vocals to studio-quality perfection.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 mt-36 justify-center items-center"
                    >
                        <Link
                            href="/create"
                            className="group w-full sm:w-auto inline-flex items-center justify-center 
                                bg-gradient-to-r from-blue-500/90 via-indigo-600/90 to-blue-600/90 
                                px-7 py-3.5 rounded-full text-[13px] font-medium tracking-wide
                                shadow-lg shadow-blue-500/[0.15] hover:shadow-blue-500/25
                                transform hover:scale-[1.03] transition-all duration-200
                                relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative flex items-center">
                                Start Creating Now
                                <ArrowRightIcon className="w-[14px] h-[14px] ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                        </Link>

                        <Link
                            href="/explore"
                            className="group w-full sm:w-auto inline-flex items-center justify-center
                                bg-white/[0.03] border border-white/[0.05]
                                px-7 py-3.5 rounded-full text-[13px] font-medium tracking-wide
                                hover:bg-white/[0.05] hover:border-blue-500/30
                                transition-all duration-200 backdrop-blur-sm"
                        >
                            <PlayIcon className="w-[14px] h-[14px] mr-2 group-hover:text-blue-400 transition-colors duration-200" />
                            Watch Demo
                        </Link>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    >
                        {[
                            { label: "Active Artists", value: "500+" },
                            { label: "Songs Enhanced", value: "2K+" },
                            { label: "Minutes Processed", value: "50K+" },
                            { label: "Happy Users", value: "1K+" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-2xl font-medium text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-gray-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
