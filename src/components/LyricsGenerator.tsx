"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    SparklesIcon,
    PencilSquareIcon,
    MusicalNoteIcon,
    DocumentTextIcon,
    ArrowPathIcon,
    LanguageIcon,
} from "@heroicons/react/24/outline";

interface Theme {
    name: string;
    description: string;
    icon: any; // Using any for brevity, ideally should be more specific
    color: string;
}

const LyricsGenerator = () => {
    const [generating, setGenerating] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState<string>("love");
    const [style, setStyle] = useState<string>("modern");
    const [language, setLanguage] = useState<string>("nepali");
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const themes: Theme[] = [
        {
            name: "Love",
            description: "Romantic and heartfelt lyrics",
            icon: SparklesIcon,
            color: "from-red-400 to-pink-600",
        },
        {
            name: "Joy",
            description: "Upbeat and celebratory",
            icon: MusicalNoteIcon,
            color: "from-yellow-400 to-orange-500",
        },
        {
            name: "Sorrow",
            description: "Deep emotional expression",
            icon: PencilSquareIcon,
            color: "from-blue-400 to-indigo-600",
        },
        {
            name: "Nature",
            description: "Environmental themes",
            icon: DocumentTextIcon,
            color: "from-green-400 to-emerald-600",
        },
    ];

    const handleGenerate = () => {
        setGenerating(true);
        // Simulate generation
        setTimeout(() => setGenerating(false), 3000);
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
                    {/* Theme Selection */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="sticky top-24">
                            <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
                                <PencilSquareIcon className="w-5 h-5 text-blue-400 mr-2" />
                                <span className="text-sm font-medium text-gray-300">
                                    AI Lyrics Generator
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                                    Create Beautiful
                                </span>{" "}
                                Lyrics
                            </h2>

                            <p className="text-lg text-gray-300 mb-8">
                                Generate unique Nepali lyrics with AI
                                assistance. Choose your theme and style to get
                                started.
                            </p>

                            {/* Theme Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {themes.map((theme) => (
                                    <motion.button
                                        key={theme.name}
                                        onClick={() =>
                                            setSelectedTheme(
                                                theme.name.toLowerCase()
                                            )
                                        }
                                        className={`p-4 rounded-xl border transition-all duration-200 text-left
                                            ${
                                                selectedTheme ===
                                                theme.name.toLowerCase()
                                                    ? `bg-gradient-to-r ${theme.color} border-transparent`
                                                    : "bg-white/5 border-white/10 hover:border-blue-500/50"
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <theme.icon className="w-6 h-6 mb-3" />
                                        <h3 className="font-semibold mb-1">
                                            {theme.name}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {theme.description}
                                        </p>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Style & Language Selection */}
                            <div className="space-y-4 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Style
                                    </label>
                                    <select
                                        value={style}
                                        onChange={(e) =>
                                            setStyle(e.target.value)
                                        }
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-gray-300 focus:border-blue-500 transition-colors"
                                    >
                                        <option value="modern">Modern</option>
                                        <option value="classical">
                                            Classical
                                        </option>
                                        <option value="folk">Folk</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Language
                                    </label>
                                    <div className="flex space-x-4">
                                        {["nepali", "english"].map((lang) => (
                                            <button
                                                key={lang}
                                                onClick={() =>
                                                    setLanguage(lang)
                                                }
                                                className={`flex-1 py-2.5 rounded-lg border transition-all duration-200
                                                    ${
                                                        language === lang
                                                            ? "bg-blue-500 border-transparent"
                                                            : "bg-white/5 border-white/10 hover:border-blue-500/50"
                                                    }`}
                                            >
                                                <LanguageIcon className="w-5 h-5 mx-auto" />
                                                <span className="text-sm mt-1 block capitalize">
                                                    {lang}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Output Section */}
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
                                    Generated Lyrics
                                </h3>

                                {/* Lyrics Display */}
                                <div className="bg-black/20 rounded-xl p-6 min-h-[400px] mb-6 border border-white/10">
                                    {generating ? (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="text-center">
                                                <ArrowPathIcon className="w-8 h-8 mx-auto mb-4 animate-spin text-blue-400" />
                                                <p className="text-gray-400">
                                                    Crafting your lyrics...
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="prose prose-invert max-w-none">
                                            <p className="text-gray-400 text-center">
                                                Click generate to create new
                                                lyrics
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Generate Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleGenerate}
                                    disabled={generating}
                                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 
                                        py-4 px-6 rounded-xl font-semibold text-white
                                        hover:opacity-90 transition-all duration-200
                                        disabled:opacity-50 disabled:cursor-not-allowed
                                        flex items-center justify-center space-x-2"
                                >
                                    {generating ? (
                                        <>
                                            <ArrowPathIcon className="w-5 h-5 animate-spin" />
                                            <span>Generating...</span>
                                        </>
                                    ) : (
                                        <>
                                            <SparklesIcon className="w-5 h-5" />
                                            <span>Generate Lyrics</span>
                                        </>
                                    )}
                                </motion.button>

                                {/* Action Buttons */}
                                <div className="mt-4 flex justify-end space-x-4">
                                    <button className="text-sm text-gray-400 hover:text-white transition-colors">
                                        Copy to Clipboard
                                    </button>
                                    <button className="text-sm text-gray-400 hover:text-white transition-colors">
                                        Download as Text
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LyricsGenerator;
