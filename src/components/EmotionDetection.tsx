"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    HeartIcon,
    ChartBarIcon,
    FaceSmileIcon,
    MusicalNoteIcon,
    ArrowPathIcon,
} from "@heroicons/react/24/outline";

interface EmotionData {
    emotion: string;
    intensity: number;
    color: string;
}

const EmotionDetection = () => {
    const [analyzing, setAnalyzing] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const emotions: EmotionData[] = [
        {
            emotion: "Joy",
            intensity: 85,
            color: "from-yellow-400 to-orange-500",
        },
        {
            emotion: "Energy",
            intensity: 75,
            color: "from-blue-400 to-cyan-500",
        },
        {
            emotion: "Passion",
            intensity: 90,
            color: "from-red-400 to-pink-500",
        },
        {
            emotion: "Serenity",
            intensity: 60,
            color: "from-green-400 to-teal-500",
        },
    ];

    const handleAnalyze = () => {
        if (!audioUrl) return;
        setAnalyzing(true);
        // Simulate analysis
        setTimeout(() => setAnalyzing(false), 2000);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
                <motion.div
                    style={{ opacity }}
                    className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Visualization Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-3xl" />
                            <div className="relative">
                                <h3 className="text-2xl font-semibold mb-8 font-heading">
                                    Emotional Analysis
                                </h3>

                                {/* Emotion Visualization */}
                                <div className="space-y-8">
                                    {emotions.map((emotion, index) => (
                                        <motion.div
                                            key={emotion.emotion}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative"
                                        >
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-300">
                                                    {emotion.emotion}
                                                </span>
                                                <span className="text-sm font-medium text-gray-400">
                                                    {emotion.intensity}%
                                                </span>
                                            </div>
                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    className={`h-full bg-gradient-to-r ${emotion.color}`}
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: `${emotion.intensity}%`,
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1,
                                                        delay:
                                                            0.5 + index * 0.1,
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Dominant Emotion */}
                                <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-lg font-medium">
                                            Dominant Emotion
                                        </h4>
                                        <HeartIcon className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent">
                                        Passion
                                    </div>
                                    <p className="mt-2 text-sm text-gray-400">
                                        High emotional intensity detected in the
                                        performance
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Controls Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="sticky top-24">
                            <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
                                <FaceSmileIcon className="w-5 h-5 text-blue-400 mr-2" />
                                <span className="text-sm font-medium text-gray-300">
                                    AI Emotion Analysis
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                                    Understand Your
                                </span>{" "}
                                Impact
                            </h2>

                            <p className="text-lg text-gray-300 mb-8">
                                Analyze the emotional patterns in your
                                performance to better connect with your
                                audience.
                            </p>

                            {/* Audio Upload */}
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium">
                                        Upload Audio
                                    </h3>
                                    <MusicalNoteIcon className="w-6 h-6 text-blue-400" />
                                </div>
                                <input
                                    type="file"
                                    accept="audio/*"
                                    onChange={(e) =>
                                        setAudioUrl(
                                            e.target.files?.[0]?.name || null
                                        )
                                    }
                                    className="block w-full text-sm text-gray-400
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-blue-500 file:text-white
                                        hover:file:bg-blue-600
                                        file:cursor-pointer cursor-pointer"
                                />
                            </div>

                            {/* Analysis Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleAnalyze}
                                disabled={!audioUrl || analyzing}
                                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 
                                    py-4 px-6 rounded-xl font-semibold text-white
                                    hover:opacity-90 transition-all duration-200
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                    flex items-center justify-center space-x-2"
                            >
                                {analyzing ? (
                                    <>
                                        <ArrowPathIcon className="w-5 h-5 animate-spin" />
                                        <span>Analyzing...</span>
                                    </>
                                ) : (
                                    <>
                                        <ChartBarIcon className="w-5 h-5" />
                                        <span>Analyze Emotions</span>
                                    </>
                                )}
                            </motion.button>

                            {/* Features List */}
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[
                                    "Emotion Detection",
                                    "Intensity Analysis",
                                    "Pattern Recognition",
                                    "Audience Insights",
                                ].map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center space-x-2 text-sm text-gray-400"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EmotionDetection;
