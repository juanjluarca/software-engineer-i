import Publication from "./publication";


export default interface PublicationRepository {
    savePublication(publication: Publication): Promise<void>;
    getPublications(): Promise<Publication[]>
    updatePublication(id: string, data: Partial<Publication>): Promise<Publication | null>;
    deletePublication(id: string): Promise<Publication | null>;
}
