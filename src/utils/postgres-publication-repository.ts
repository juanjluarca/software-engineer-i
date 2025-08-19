import Publication from "./publication";
import { Sql } from "postgres";
import postgres from "postgres";
import PublicationRepository from "./publication-repository";


export default class PostgresPublicationRepository implements PublicationRepository {
    private readonly sql: Sql;

    constructor() {
        const connectionString = process.env.DATABASE_URL as string;
        this.sql = postgres(connectionString);
    }

    async savePublication(publication: Publication) {
        try {
            const title = publication.title.value;
            const description = publication.description.value;
            const author = publication.author.value;

            await this.sql`INSERT INTO publication (title, description, author) VALUES (${title}, 
             ${description}, 
             ${author});`;

        } catch {
            throw new Error("Failed to save publication");
        }
    }

    async getPublications(): Promise<Publication[]> {
        try {
            const rows = await this.sql`SELECT * FROM publication;`
            return rows.map(row => new Publication(
                row.title,
                row.description,
                row.author
            ));
        } catch {
            throw new Error("Failed to obtain the publications");
        }
    }

    async updatePublication(id: string, data: any): Promise<Publication | null> {
        try {
            const [row] = await this.sql`UPDATE publication SET title = ${data.title}, description = ${data.description}, 
                author = ${data.author} WHERE id = ${id} RETURNING *;`;

            if (!row) return null;

            return Publication.create(row.title, row.description, row.author);
        } catch (error) {
            throw new Error("Failed to update publication");
        }
    }

}
