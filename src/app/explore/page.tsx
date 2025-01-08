import { AudioCard } from "@/components/AudioCard";

// This would typically come from your API/database
const sampleAudios = [
    {
        id: "1",
        title: "Morning Raga",
        artist: "Suman Kumar",
        description: "A classical morning raga performance",
        imageUrl: "/images/placeholder.jpg",
        audioUrl: "#",
        createdAt: new Date(),
    },
    // Add more sample items...
];

export default function Explore() {
    return (
        <main className="min-h-screen pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Explore Performances</h1>
                    <div className="flex gap-4">
                        <select className="bg-white/5 rounded-lg px-4 py-2 text-sm">
                            <option>Latest</option>
                            <option>Most Popular</option>
                            <option>Trending</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleAudios.map((audio) => (
                        <AudioCard key={audio.id} audio={audio} />
                    ))}
                </div>
            </div>
        </main>
    );
}
