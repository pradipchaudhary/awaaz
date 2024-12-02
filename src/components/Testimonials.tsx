"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { StarIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

const testimonials = [
    {
        name: "Aarav Sharma",
        role: "Professional Vocalist",
        content:
            "Awaaz AI has transformed my recording process. The voice enhancement is incredible - it makes my vocals sound professional without expensive studio equipment.",
        image: "/testimonials/artist1.jpg",
        rating: 5,
        location: "Kathmandu",
    },
    {
        name: "Priya Tamang",
        role: "Independent Artist",
        content:
            "The emotion detection feature helps me understand how my performances resonate with listeners. It's like having a personal vocal coach.",
        image: "/testimonials/artist2.jpg",
        rating: 5,
        location: "Pokhara",
    },
    {
        name: "Rajesh KC",
        role: "Music Producer",
        content:
            "The AI lyrics generator is a game-changer. It helps overcome writer's block and provides creative inspiration when needed.",
        image: "/testimonials/artist3.jpg",
        rating: 5,
        location: "Lalitpur",
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-heading mb-4"
                    >
                        What{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                            Artists Say
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Hear from artists who have transformed their music with
                        our AI-powered platform.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm h-full">
                                <ChatBubbleLeftIcon className="w-8 h-8 text-blue-400 mb-6" />

                                {/* Content */}
                                <p className="text-gray-300 mb-6">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>

                                {/* Rating */}
                                <div className="flex items-center mb-6">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <StarIcon
                                                key={i}
                                                className="w-5 h-5 text-yellow-400"
                                            />
                                        )
                                    )}
                                </div>

                                {/* Author */}
                                <div className="flex items-center">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">
                                            {testimonial.name}
                                        </h4>
                                        <div className="text-sm text-gray-400">
                                            {testimonial.role}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {testimonial.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl" />
                                <div className="absolute bottom-0 left-0 -mb-2 -ml-2 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-300 mb-8">
                        Join our growing community of artists and experience the
                        power of AI-enhanced music creation.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 
                            px-8 py-4 rounded-full font-semibold text-white
                            hover:opacity-90 transition-all duration-200
                            shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                    >
                        Get Started Free
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
