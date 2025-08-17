export default class PublicationAuthor {
    public value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    private isValid(author: string): void {
        if (author.length < 2) {
            throw new Error("Author must be at least 2 characters")
        }
    }

}

