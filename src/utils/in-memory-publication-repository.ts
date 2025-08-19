import PublicationRepository from "./publication-repository";
import Publication from "./publication";


export default class InMemoryPublicationRepository implements PublicationRepository {
    public publications: Array<{
        title: string;
        description: string;
        author: string;
    }> = [];
    constructor() {
        this.publications = [];
    }

    public async save(publication: Publication) {
        const title = publication.title.value;
        const description = publication.description.value;
        const author = publication.author.value;
        this.publications.push({ title, description, author });
        console.log(this.publications.length);
    }
}
