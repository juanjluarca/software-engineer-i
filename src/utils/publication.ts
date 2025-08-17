
export default class Publication {
    public title: string;
    public description: string;
    public author: string;

    constructor(title: string, description: string, author: string) {
        this.isValidTitle(title);
        this.title = title;
        this.isValidDescription(description);
        this.description = description;
        this.isValidAuthor(author);
        this.author = author;
    }

    private isValidTitle(title: string): void {
        if (title.length < 2) {
            throw new Error("Title must be at least 2 characters")
        }
    }

    private isValidDescription(description: string): void {
        if (description.length < 5) {
            throw new Error("Description must be at least 5 characters")
        }
    }

    private isValidAuthor(author: string): void {
        if (author.length < 2) {
            throw new Error("Author must be at least 2 characters")
        }
    }

}