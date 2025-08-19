import Publication from "./publication";
import PublicationRepository from "./publication-repository";


export default class PublicationRegister {
    private readonly repository: PublicationRepository;

    constructor(repository: PublicationRepository) {
        this.repository = repository;
    }

    public async run(title: string, description: string, author: string) {
        const publication = Publication.create(title, description, author);
        await this.repository.savePublication(publication);
    }
}
