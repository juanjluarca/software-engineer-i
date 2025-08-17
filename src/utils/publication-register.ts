import postgres from "postgres";
import Publication from "./publication";

export default class PublicationRegister {
    constructor() { }

    public async save(publication: Publication) {
        try {
            const connectionString = process.env.DATABASE_URL as string;
            const sql = postgres(connectionString);

            await sql`INSERT INTO publication (title, description, author) VALUES (${publication.title}, 
            ${publication.description}, 
            ${publication.author});`;

        } catch (error) {
            throw new Error("Error saving in the db")
        }


    }
}