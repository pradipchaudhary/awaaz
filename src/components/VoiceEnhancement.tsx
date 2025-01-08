"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    MicrophoneIcon,
    ChartBarIcon,
    SparklesIcon,
    SpeakerWaveIcon,
    AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const VoiceEnhancement = () => {
    const [file, setFile] = useState<File | null>(null);
    const [processing, setProcessing] = useState(false);
    const [settings, setSettings] = useState({
        noiseReduction: 50,
        clarity: 70,
        warmth: 60,
        reverb: 30,
    });

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const handleSettingChange = (setting: string, value: number) => {
        setSettings((prev) => ({ ...prev, [setting]: value }));
    };

    const handleProcess = () => {
        if (!file) return;
        setProcessing(true);
        // TODO: Implement processing logic
        setTimeout(() => {
            setProcessing(false);
        }, 2000);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
                <motion.div
                    style={{ opacity }}
                    className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
                            <SpeakerWaveIcon className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-sm font-medium text-gray-300">
                                Professional-Grade Enhancement
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                                Studio-Quality Voice
                            </span>{" "}
                            Enhancement
                        </h2>

                        <p className="text-lg text-gray-300 mb-8">
                            Transform your raw recordings into
                            professional-grade vocals with our AI-powered
                            enhancement technology.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Noise Reduction",
                                    description:
                                        "Remove background noise and unwanted sounds",
                                    icon: ChartBarIcon,
                                },
                                {
                                    title: "Voice Clarity",
                                    description:
                                        "Enhance vocal presence and definition",
                                    icon: MicrophoneIcon,
                                },
                                {
                                    title: "Smart Processing",
                                    description:
                                        "AI-optimized settings for your voice",
                                    icon: SparklesIcon,
                                },
                            ].map((feature) => (
                                <motion.div
                                    key={feature.title}
                                    className="flex items-start space-x-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="flex-shrink-0">
                                        <div className="p-3 bg-blue-500/10 rounded-xl">
                                            <feature.icon className="w-6 h-6 text-blue-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 font-heading">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Interactive Demo */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-3xl" />
                            <div className="relative">
                                <h3 className="text-2xl font-semibold mb-6 font-heading">
                                    Try Voice Enhancement
                                </h3>

                                {/* File Upload */}
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Upload your vocal recording
                                    </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white/10 border-dashed rounded-xl hover:border-blue-500/50 transition-colors duration-200 group">
                                        <div className="space-y-1 text-center">
                                            <MicrophoneIcon className="mx-auto h-12 w-12 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                                            <div className="flex text-sm text-gray-400">
                                                <label className="relative cursor-pointer rounded-md font-medium text-blue-400 hover:text-blue-300 focus-within:outline-none">
                                                    <span>Upload a file</span>
                                                    <input
                                                        type="file"
                                                        className="sr-only"
                                                        accept="audio/*"
                                                        onChange={(e) =>
                                                            setFile(
                                                                e.target
                                                                    .files?.[0] ||
                                                                    null
                                                            )
                                                        }
                                                    />
                                                </label>
                                                <p className="pl-1">
                                                    or drag and drop
                                                </p>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                MP3, WAV up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhancement Controls */}
                                <div className="space-y-6">
                                    {Object.entries(settings).map(
                                        ([key, value]) => (
                                            <div key={key}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label className="block text-sm font-medium text-gray-300 capitalize">
                                                        {key
                                                            .replace(
                                                                /([A-Z])/g,
                                                                " $1"
                                                            )
                                                            .trim()}
                                                    </label>
                                                    <span className="text-sm text-gray-400">
                                                        {value}%
                                                    </span>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg" />
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="100"
                                                        value={value}
                                                        onChange={(e) =>
                                                            handleSettingChange(
                                                                key,
                                                                parseInt(
                                                                    e.target
                                                                        .value
                                                                )
                                                            )
                                                        }
                                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer relative z-10
                                                            [&::-webkit-slider-thumb]:appearance-none
                                                            [&::-webkit-slider-thumb]:w-4
                                                            [&::-webkit-slider-thumb]:h-4
                                                            [&::-webkit-slider-thumb]:rounded-full
                                                            [&::-webkit-slider-thumb]:bg-blue-500
                                                            [&::-webkit-slider-thumb]:cursor-pointer
                                                            [&::-webkit-slider-thumb]:transition-transform
                                                            [&::-webkit-slider-thumb]:duration-200
                                                            [&::-webkit-slider-thumb]:hover:scale-110"
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>

                                {/* Process Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-8 w-full bg-gradient-to-r from-blue-500 to-indigo-600 
                                        text-white py-3 px-4 rounded-xl font-semibold 
                                        hover:opacity-90 transition-opacity relative group"
                                    disabled={!file || processing}
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        {processing ? (
                                            <>
                                                <SparklesIcon className="w-5 h-5 mr-2 animate-pulse" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
                                                Enhance Voice
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VoiceEnhancement;
