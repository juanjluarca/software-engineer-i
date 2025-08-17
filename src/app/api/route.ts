import next from "next";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const title = data.title;
        const description = data.description;
        const author = data.author;

        isValidTitle(title);
        isValidDescription(description);
        isValidAuthor(author);

        save(title, description, author);

        return NextResponse.json({
            message: 'The post has been saved successfully'
        });
    } catch (error) {
        console.error('Error saving the post:', error);
        return NextResponse.json({
            error: 'Failed to save the post',
        }, { status: 500 });
    }
}

function isValidTitle(title: string): void {
    if (title.length < 2) {
        throw new Error("Title must be at least 2 characters")
    }
}

function isValidDescription(description: string): void {
    if (description.length < 5) {
        throw new Error("Description must be at least 5 characters")
    }
}

function isValidAuthor(author: string): void {
    if (author.length < 2) {
        throw new Error("Author must be at least 2 characters")
    }
}

async function save(title: string, description: string, author: string) {
    try {
        const connectionString = process.env.DATABASE_URL as string;
        const sql = postgres(connectionString);

        await sql`INSERT INTO publication (title, description, author) VALUES (${title}, ${description}, ${author});`;

    } catch (error) {
        throw new Error("Error saving in the db")
    }

}
