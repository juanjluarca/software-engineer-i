import next from "next";
import { NextRequest, NextResponse } from "next/server";
import Publication from "@/utils/publication";
import PublicationRegister from "@/utils/publication-register";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const register = new PublicationRegister();
        await register.save(data.title, data.description, data.author);

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

