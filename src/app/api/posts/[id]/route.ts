import { NextRequest, NextResponse } from "next/server";
import PublicationRegister from "@/utils/publication-register";
import PostgresPublicationRepository from "@/utils/postgres-publication-repository";
import InMemoryPublicationRepository from "@/utils/in-memory-publication-repository";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        const data = await request.json();

        const repository = new PostgresPublicationRepository();
        // const repository = new InMemoryPublicationRepository();
        const register = new PublicationRegister(repository);

        const updatedPublication = await register.update(id, data);

        if (!updatedPublication) {
            return NextResponse.json(
                { error: `Publication with id ${id} not found` },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: `Post ${id} has been updated`,
            data: updatedPublication,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to update the publication" },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const repository = new PostgresPublicationRepository();
        // const repository = new InMemoryPublicationRepository();
        const register = new PublicationRegister(repository);

        const deletedPublication = await register.delete(id);
        return NextResponse.json({
            message: `Post ${id} has been deleted`,
            data: deletedPublication,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to delete the publication" },
            { status: 500 }
        );
    }
}
