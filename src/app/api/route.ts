import next from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();

    const title = data.title;
    const description = data.description;
    const author = data.author;
    try {
        isValidTitle(title);
        isValidDescription(description);
        isValidAuthor(author);
        console.log("Éxito");
        return NextResponse.json({
            message: 'All fields are valid'
        });
    } catch (error) {
        console.error('Error saving the publication:', error);
        return NextResponse.json({
            error: 'Failed to save the publication',
        }, { status: 500 });
    }

}

function isValidTitle(title: string): void {
    if (title.length < 2) {
        throw new Error("Title must be at least 2 characters")
    }
}

function isValidDescription(description: string): void {
    if (description.length < 2) {
        throw new Error("Title must be at least 2 characters")
    }
}

function isValidAuthor(author: string): void {
    if (author.length < 2) {
        throw new Error("Title must be at least 2 characters")
    }
}

