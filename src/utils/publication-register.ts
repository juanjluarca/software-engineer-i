import postgres from "postgres";
import Publication from "./publication";
import { title } from "process";

export default class PublicationRegister {
    constructor() { }

    public async save(title: string, description: string, author: string) {
        try {
            const publication = Publication.create(title, description, author);

            const connectionString = process.env.DATABASE_URL as string;
            const sql = postgres(connectionString);

            await sql`INSERT INTO publication (title, description, author) VALUES (${publication.title.value}, 
            ${publication.description.value}, 
            ${publication.author.value});`;

        } catch (error) {
            throw new Error("Error saving in the db")
        }


    }
}