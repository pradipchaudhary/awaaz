"use client";
import { useState } from "react";
import { AudioFile } from "@/types/api";

export default function Create() {
    const [file, setFile] = useState<File | null>(null);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [enhancedAudio, setEnhancedAudio] =
        useState<Partial<AudioFile> | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setError(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) return;

        setProcessing(true);
        setError(null);

        try {
            // Upload file
            const formData = new FormData();
            formData.append("file", file);

            const uploadRes = await fetch("/api/audio/upload", {
                method: "POST",
                body: formData,
            });
            const uploadData = await uploadRes.json();

            if (!uploadData.success) {
                throw new Error(uploadData.error || "Upload failed");
            }

            // Enhance audio
            const enhanceRes = await fetch("/api/audio/enhance", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: uploadData.data.url }),
            });
            const enhanceData = await enhanceRes.json();

            if (!enhanceData.success) {
                throw new Error(enhanceData.error || "Enhancement failed");
            }

            setEnhancedAudio(enhanceData.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="min-h-screen pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold mb-8">Create New Content</h1>

                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-4 mb-6">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">
                            Upload Audio File
                        </label>
                        <input
                            type="file"
                            accept="audio/*"
                            onChange={handleFileUpload}
                            className="block w-full text-sm text-gray-400
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-purple-500 file:text-white
                                hover:file:bg-purple-600"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!file || processing}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 
                            py-3 rounded-full font-semibold hover:opacity-90 
                            transition disabled:opacity-50"
                    >
                        {processing ? "Processing..." : "Enhance Audio"}
                    </button>
                </form>

                {enhancedAudio && (
                    <div className="mt-8 p-6 bg-white/5 rounded-xl">
                        <h2 className="text-xl font-semibold mb-4">
                            Enhanced Audio
                        </h2>
                        <audio
                            controls
                            className="w-full"
                            src={enhancedAudio.enhancedUrl}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
