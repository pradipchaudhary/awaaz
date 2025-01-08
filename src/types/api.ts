export interface AudioFile {
    id: string;
    userId: string;
    title: string;
    description?: string;
    originalUrl: string;
    enhancedUrl?: string;
    status: "pending" | "processing" | "completed" | "failed";
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export interface VoiceEnhancementRequest {
    audioUrl: string;
    settings: {
        noiseReduction: number;
        clarity: number;
        warmth: number;
    };
}

export interface EmotionAnalysisResult {
    emotions: {
        joy: number;
        energy: number;
        passion: number;
        serenity: number;
    };
    dominantEmotion: string;
    intensity: number;
}

export interface LyricGenerationRequest {
    theme: string;
    style: "modern" | "classical" | "folk";
    length: "short" | "medium" | "long";
    language: "nepali" | "english";
}

export interface LyricGenerationResponse {
    lyrics: string;
    translation?: string;
    metadata: {
        theme: string;
        style: string;
        length: string;
        createdAt: Date;
    };
}
