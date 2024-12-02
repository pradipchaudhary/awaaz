"use client";
import {
    MicrophoneIcon,
    VideoCameraIcon,
    SparklesIcon,
    MusicalNoteIcon,
    CloudArrowUpIcon,
    ShareIcon,
    ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
    {
        title: "Voice Enhancement",
        description:
            "Transform raw recordings into studio-quality vocals with advanced AI noise reduction and clarity enhancement.",
        icon: MicrophoneIcon,
        color: "text-blue-400 group-hover:text-blue-300",
        delay: 0.2,
        demo: "Try voice enhancement →",
    },
    {
        title: "Automated Videos",
        description:
            "Create stunning music videos automatically with AI-generated visuals synchronized to your audio.",
        icon: VideoCameraIcon,
        color: "text-indigo-400 group-hover:text-indigo-300",
        delay: 0.3,
        demo: "See video creation →",
    },
    {
        title: "Lyric Generation",
        description:
            "Get creative with AI-powered Nepali lyrics generation, tailored to your style and theme.",
        icon: SparklesIcon,
        color: "text-blue-400 group-hover:text-blue-300",
        delay: 0.4,
    },
    {
        title: "Music Composition",
        description:
            "Compose beautiful melodies and harmonies with our intelligent music generation system.",
        icon: MusicalNoteIcon,
        color: "from-indigo-500 to-blue-400",
        delay: 0.5,
    },
    {
        title: "Cloud Storage",
        description:
            "Store and manage your creations securely in the cloud with unlimited access and backup.",
        icon: CloudArrowUpIcon,
        color: "from-blue-400 to-indigo-500",
        delay: 0.6,
    },
    {
        title: "Social Sharing",
        description:
            "Share your enhanced performances directly to social platforms with automated optimization.",
        icon: ShareIcon,
        color: "from-indigo-400 to-blue-500",
        delay: 0.7,
    },
];

const Features = () => {
    const { scrollY } = useScroll();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <section className="py-24 relative overflow-hidden" id="features">
            {/* Simplified Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header with enhanced animations */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10"
                    >
                        <SparklesIcon className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-sm font-medium text-gray-300">
                            Powered by Advanced AI
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6"
                    >
                        <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                            Transform Your Music
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Comprehensive suite of AI-powered tools designed to
                        enhance your vocal performances and streamline content
                        creation.
                    </motion.p>
                </motion.div>

                {/* Features Grid with stagger animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            whileHover={{
                                y: -5,
                                transition: { type: "spring", stiffness: 300 },
                            }}
                            className="group relative p-8 bg-white/5 hover:bg-white/10 
                                rounded-2xl transition-all duration-300
                                hover:shadow-2xl hover:shadow-blue-500/10
                                border border-white/10 hover:border-blue-500/20
                                backdrop-blur-sm"
                        >
                            {/* Enhanced Gradient Border Effect */}
                            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Enhanced Icon */}
                            <div
                                className={`inline-flex p-3 rounded-xl bg-white/5 mb-5 group-hover:scale-110 transition-all duration-300`}
                            >
                                <feature.icon
                                    className={`w-6 h-6 ${feature.color} transition-colors duration-300`}
                                />
                            </div>

                            {/* Enhanced Content */}
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Interactive Demo Link */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: feature.delay + 0.3 }}
                                className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                            >
                                <span className="text-sm font-medium">
                                    {feature.demo}
                                </span>
                                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                            </motion.div>

                            {/* Feature Number */}
                            <div className="absolute top-4 right-4 text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300">
                                {(index + 1).toString().padStart(2, "0")}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Enhanced Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <p className="text-lg text-blue-400 mb-4">
                        Ready to elevate your music?
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500/90 via-indigo-600/90 to-blue-600/90 
                            px-7 py-3.5 rounded-full text-[13px] font-medium tracking-wide
                            shadow-lg shadow-blue-500/[0.15] hover:shadow-blue-500/25
                            transform transition-all duration-200
                            relative overflow-hidden"
                    >
                        <span className="relative z-10">Get Started Free</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
