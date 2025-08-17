import Publication from "./publication";


export default interface PublicationRepository {
    save(publication: Publication): Promise<void>;
}
