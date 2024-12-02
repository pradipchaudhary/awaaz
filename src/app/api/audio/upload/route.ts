import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { success: false, error: "No file provided" },
                { status: 400 }
            );
        }

        // Generate unique filename with original extension
        const ext = file.name.split(".").pop();
        const filename = `${nanoid()}.${ext}`;

        // Upload to Vercel Blob
        const blob = await put(filename, file, {
            access: "public",
            addRandomSuffix: false,
            contentType: file.type,
        });

        return NextResponse.json({
            success: true,
            data: {
                url: blob.url,
                filename: blob.pathname,
                size: file.size,
                type: file.type,
            },
        });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to upload file" },
            { status: 500 }
        );
    }
}
