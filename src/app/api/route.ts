import next from "next";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function POST(request: NextRequest) {
    const data = await request.json();

    const title = data.title;
    const description = data.description;
    const author = data.author;
    try {
        if (title.length < 2) {
            throw new Error("Title must be at least 2 characters")
        }
        if (description.length < 5) {
            throw new Error("Description must be at least 5 characters")
        }
        if (author.length < 2) {
            throw new Error("Title must be at least 2 characters")
        }

        const connectionString = process.env.DATABASE_URL as string;
        const sql = postgres(connectionString);

        await sql`INSERT INTO publication (title, description, author) VALUES (${title}, ${description}, ${author});`;


        return NextResponse.json({
            message: 'All fields are valid and the connection with db is success'
        });
    } catch (error) {
        console.error('Error saving the post:', error);
        return NextResponse.json({
            error: 'Failed to save the post',
        }, { status: 500 });
    }

}

