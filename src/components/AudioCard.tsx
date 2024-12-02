import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

interface Audio {
    id: string;
    title: string;
    artist: string;
    description: string;
    imageUrl: string;
    audioUrl: string;
    createdAt: Date;
}

interface AudioCardProps {
    audio: Audio;
}

export const AudioCard = ({ audio }: AudioCardProps) => {
    return (
        <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition">
            <div className="relative h-48">
                <Image
                    src={audio.imageUrl}
                    alt={audio.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{audio.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{audio.artist}</p>
                <p className="text-gray-300 text-sm mb-4">
                    {audio.description}
                </p>
                <audio controls className="w-full mb-2">
                    <source src={audio.audioUrl} type="audio/mpeg" />
                </audio>
                <p className="text-gray-400 text-xs">
                    {formatDistanceToNow(audio.createdAt, { addSuffix: true })}
                </p>
            </div>
        </div>
    );
};
