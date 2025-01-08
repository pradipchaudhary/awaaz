import Link from "next/link";

const CallToAction = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Transform Your Voice?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join Awaaz AI today and experience the power of AI-enhanced
                    vocal performances.
                </p>
                <Link
                    href="/create"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 
                        px-8 py-3 rounded-full font-semibold hover:opacity-90 
                        transition inline-block"
                >
                    Start Creating Now
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;
