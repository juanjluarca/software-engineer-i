import PublicationTitle from "./publication-title";
import PublicationDescription from "./publication-description";
import PublicationAuthor from "./publication-author";


export default class Publication {
    public title: PublicationTitle;
    public description: PublicationDescription;
    public author: PublicationAuthor;

    constructor(title: PublicationTitle, description: PublicationDescription, author: PublicationAuthor) {
        this.title = title;
        this.description = description;
        this.author = author;
    }

    public static create(title: string, description: string, author: string) {
        const publication = new Publication(
            new PublicationTitle(title),
            new PublicationDescription(description),
            new PublicationAuthor(author)
        );
        return publication;
    }
}
