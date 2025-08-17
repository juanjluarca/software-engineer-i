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

    async save(publication: Publication) {
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
}
