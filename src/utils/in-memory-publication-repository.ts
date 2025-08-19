import PublicationRepository from "./publication-repository";
import Publication from "./publication";


export default class InMemoryPublicationRepository implements PublicationRepository {
    public publications: Array<{
        id: string;
        title: string;
        description: string;
        author: string;
    }> = [];
    constructor() {
        this.publications = [];
    }

    public async savePublication(publication: Publication) {
        const id = `${this.publications.length + 1}`;
        console.log(id);
        const title = publication.title.value;
        const description = publication.description.value;
        const author = publication.author.value;
        this.publications.push({ id, title, description, author });
    }


    public async updatePublication(id: string, data: any): Promise<Publication | null> {
        // buscamos la publicación por id
        const index = this.publications.findIndex((p) => p.id === id);
        if (index === -1) return null;

        this.publications[index] = {
            ...this.publications[index],
            ...data,
        };

        const updated = this.publications[index];

        return Publication.create(updated.title, updated.description, updated.author);
    }
}
