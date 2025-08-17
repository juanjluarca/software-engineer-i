import next from "next";
import { NextRequest, NextResponse } from "next/server";
import Publication from "@/utils/publication";
import PublicationRegister from "@/utils/publication-register";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const publication = new Publication(data.title, data.description, data.author);
        const register = new PublicationRegister();

        register.save(publication);

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

