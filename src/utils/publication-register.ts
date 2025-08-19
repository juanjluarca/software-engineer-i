import Publication from "./publication";
import PublicationRepository from "./publication-repository";


export default class PublicationRegister {
    private readonly repository: PublicationRepository;

    constructor(repository: PublicationRepository) {
        this.repository = repository;
    }

    public async save(title: string, description: string, author: string) {
        const publication = Publication.create(title, description, author);
        await this.repository.savePublication(publication);
    }

    public async get(): Promise<Publication[]> {
        return await this.repository.getPublications();
    }

    public async update(id: string, data: any): Promise<Publication | null> {
        return await this.repository.updatePublication(id, data);
    }

    public async delete(id: string): Promise<Publication | null> {
        return await this.repository.deletePublication(id);
    }
}
