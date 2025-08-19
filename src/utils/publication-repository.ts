import Publication from "./publication";


export default interface PublicationRepository {
    savePublication(publication: Publication): Promise<void>;
    updatePublication(id: string, data: Partial<Publication>): Promise<Publication | null>;
}
