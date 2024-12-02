export default function About() {
    return (
        <main className="min-h-screen pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-8">About Awaaz AI</h1>

                <div className="prose prose-invert">
                    <p className="text-xl text-gray-300 mb-8">
                        Awaaz AI is a platform that combines Nepali vocal
                        performances with AI-powered content creation, automated
                        video production, and seamless social media integration.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="mb-8">
                        To amplify authentic Nepali emotional expressions
                        globally through an AI-driven content creation and
                        engagement platform.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">
                        Key Features
                    </h2>
                    <ul className="space-y-4 mb-8">
                        <li>
                            <strong>Voice Enhancement:</strong>{" "}
                            Professional-grade audio enhancement powered by AI
                        </li>
                        <li>
                            <strong>Automated Videos:</strong> Convert your
                            audio into engaging visual content
                        </li>
                        <li>
                            <strong>Lyric Generation:</strong> AI-powered Nepali
                            lyrics generation for your music
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p>
                        Have questions or suggestions? Reach out to us at{" "}
                        <a
                            href="mailto:contact@awaaz.ai"
                            className="text-purple-400 hover:text-purple-300"
                        >
                            contact@awaaz.ai
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
