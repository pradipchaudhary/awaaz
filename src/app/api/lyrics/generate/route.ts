import { NextResponse } from "next/server";
import { LyricGenerationRequest, LyricGenerationResponse } from "@/types/api";

export async function POST(req: Request) {
    try {
        const body: LyricGenerationRequest = await req.json();

        // TODO: Integrate with GPT or similar AI service for lyrics generation
        // For now, return mock data
        const response: LyricGenerationResponse = {
            lyrics: "मेरो मनको गीत...\n(Sample Nepali lyrics would go here)",
            translation:
                "Song of my heart...\n(English translation would go here)",
            metadata: {
                theme: body.theme,
                style: body.style,
                length: body.length,
                createdAt: new Date(),
            },
        };

        return NextResponse.json({
            success: true,
            data: response,
        });
    } catch (error) {
        console.error("Lyrics generation error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to generate lyrics" },
            { status: 500 }
        );
    }
}
